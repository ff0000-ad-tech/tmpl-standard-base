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
	// make additional dps load for "networks" tab
	const networksData = await DpsManager.load({
		env: window.adParams.dpsConfig.env,
		ssid: window.adParams.dpsConfig.ssid,
		sid: '2079020722'
	})
	// preload network images for matchup
	const matchupNetworks = window.dpsData.Matchup.Networks.split(',')
	console.log(matchupNetworks)
	matchupNetworks.forEach(label => {
		console.log(`Requesting network image for ${label}`)
		const networkRow = findNetwork(networksData, label)
		const networkImageReq = DpsManager.getImageRequest(networkRow.Sources, label)
		ImageManager.addImageRequest(networkImageReq)
	})

	// preload images
	const bg = DpsManager.getImageRequest(window.dpsData.Sources, 'bg')
	ImageManager.addImageRequest(bg)
}
const findNetwork = (networksData, label) => {
	return Object.values(networksData).find(rowData => rowData.Label === label)
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
