import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import { DpsManager } from '@ff0000-ad-tech/ad-dps'

/**
 * TODO:
 *	Dynamic HTML:
 *		a. 3-traffic: DPS will need to publish assets
 *	Rendered HTML (3-traffic, using cs-plugin):
 *		a. cs-plugin will download & add imports for any source-refs found in row being rendered
 *		b. cs-plugin will rewrite dpsConfig.data columns with `fba-bundled`
 */

/**
	EXTRACT JSON DATA
	Prepare dynamic data here.
 */
export const requestDynamicImages = async () => {
	// preload network images for matchup
	const matchupNetworks = DpsManager.getData('main', 'Matchup.Networks').split(',')
	console.log(matchupNetworks)
	matchupNetworks.forEach(label => {
		console.log(`Requesting network image for ${label}`)
		const networkRow = DpsManager.getData('networks', 'Label', label)
		const networkImageReq = DpsManager.getImageRequest(networkRow.Sources, label)
		ImageManager.addImageRequest(networkImageReq)
	})

	// preload images
	const mainSource = DpsManager.getData('main', 'Sources')
	console.log({ mainSource })
	const bg = DpsManager.getImageRequest(mainSource, 'bg')
	ImageManager.addImageRequest(bg)
}


export const copy = [
	'WHY PAY MORE\nFOR ELECTRICITY?',
	'MAKE THE MOST OF YOUR\nENERGY AND MONEY',
	'CHOOSE SMART SAVINGS\nWITH DISCOUNT POWER.'
]
export const fonts = {
	primary: 'template_font'
}
export const colors = {}
