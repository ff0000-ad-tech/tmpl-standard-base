import { ImageManager } from '@ff0000-ad-tech/ad-assets'

/**
 * TODO:
 *	Dynamic HTML:
 *		a. DPS needs to publish feeds/assets to a CDN
 */

/**
	EXTRACT JSON DATA
	Prepare dynamic data here.
 */
export const requestDynamicImages = async () => {
	ImageManager.addImageRequest({ src: '/path/to/asset', imageId: 'my-dynamic-image' })
}

/**
	DEFINE and EXPORT global Ad-Data
 */
export const copy = [
	'WHY PAY MORE\nFOR ELECTRICITY?',
	'MAKE THE MOST OF YOUR\nENERGY AND MONEY',
	'CHOOSE SMART SAVINGS\nWITH DISCOUNT POWER.',
]
export const fonts = {
	primary: 'template_font',
}
export const colors = {}
