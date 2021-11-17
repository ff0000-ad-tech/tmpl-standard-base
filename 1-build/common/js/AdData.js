import { ImageManager } from '@ff0000-ad-tech/ad-assets'

import '@size/images/NetworkABC.png'
import '@size/images/NetworkESPN.png'
import '@size/images/NetworkESPNDeportes.png'

/**
 * TODO:
 *	Dynamic HTML:
 *		a. DPS needs to publish feeds/assets to a CDN
 */

/**
	EXTRACT JSON DATA
	Prepare dynamic data here.
 */
// export let myDynamicImage
export const requestDynamicImages = async () => {
	// myDynamicImage = ImageManager.addImageRequest({ src: '/path/to/asset' })
}

/**
	DEFINE and EXPORT global Ad-Data
 */

export const fonts = {
	primary: 'template_font',
}
export const colors = {}

// Sample ESPN networks data. Normally comes from Velvet
export const networks = [
	{
		name: 'ABC',
		url: 'images/NetworkABC.png',
		imageId: 'ABC',
		scaleFactor: 1,
	},
	{
		name: 'ESPN',
		url: 'images/NetworkESPN.png',
		imageId: 'ESPN',
		scaleFactor: 0.7,
	},
	{
		name: 'ESPN Deportes',
		url: 'images/NetworkESPNDeportes.png',
		imageId: 'Deportes',
		scaleFactor: 1,
	},
]
