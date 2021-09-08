import * as AdData from '@common/js/AdData.js'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

/**
 * PRE-FLIGHT
 *
 * Resources that are shared by all the sizes should be loaded here.
 *
 */
export const init = async (assets) => {
	// instantiate global ad-data
	window.adData = AdData
	// add payload assets to ImageManager
	addImageAssets([...assets.preloaders, ...assets.images, ...assets.binaries])
	// author adds necessary requests to queue
	await window.adData.requestDynamicImages()
	// preload dynamic images
	await loadDynamicImages()
}

const addImageAssets = async (imageAssets) => {
	console.log('Preflight.addImageAssets()')
	ImageManager.add(imageAssets)
}

const loadDynamicImages = async () => {
	console.log('Preflight.loadDynamicImages()')
	await ImageManager.load()
}
