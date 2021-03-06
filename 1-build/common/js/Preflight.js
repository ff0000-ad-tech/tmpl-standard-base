import * as AdData from '@common/js/AdData.js'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

/**
 * PRE-FLIGHT
 *
 * Resources that are shared by all the sizes should be loaded here.
 *
 */
export const init = async (binaryAssets) => {
	// instantiate global ad-data
	window.adData = AdData
	// add binary payload
	addFbaImages(binaryAssets)
	// add preloader images to build
	addPreloadedImages()
	// author adds necessary requests to queue
	await window.adData.requestDynamicImages()
	// preload dynamic images
	await loadDynamicImages()
}

const addFbaImages = async (binaryAssets) => {
	console.log('Preflight.addFbaImages()')
	ImageManager.add(binaryAssets)
}

const addPreloadedImages = async () => {
	console.log('Preflight.addPreloadedImages()')
	ImageManager.add(assets.preloadedImages)
}

const loadDynamicImages = async () => {
	console.log('Preflight.loadDynamicImages()')
	await ImageManager.load()
}
