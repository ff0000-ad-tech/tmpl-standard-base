import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import { DpsManager } from '@ff0000-ad-tech/ad-dps'

/**
	EXTRACT JSON DATA
	Prepare dynamic data here.
 */
export const requestDynamicImages = () => {
	console.log(window.dpsData)
	const bg = DpsManager.getImageRequest(window.dpsData, 'bg')
	ImageManager.addImageRequest(bg)
}

/**
 * TODO:
 *	Dynamic HTML:
 *		a. 3-traffic: DPS will need to publish assets
 *	Rendered HTML (3-traffic, using cs-plugin):
 *		a. cs-plugin will download/include any source-refs found in row being rendered
 *		b. cs-plugin will rewrite dpsConfig.data source-refs with relative path
 */

/**
	DYNAMIC IMAGES
	Dynamically loaded images need to be in their own directory, like "dynamic/".

	Then, you need to add your dynamic image-paths to the load-queue, so that when
	the secondary preload happens, these assets will get loaded. For example:

	self.theImageName = ImageManager.addToLoad(adParams.imagesPath + 'sample.jpg');
 */
export const copy = [
	'WHY PAY MORE\nFOR ELECTRICITY?',
	'MAKE THE MOST OF YOUR\nENERGY AND MONEY',
	'CHOOSE SMART SAVINGS\nWITH DISCOUNT POWER.'
]
export const fonts = {
	primary: 'template_font'
}
export const colors = {}
