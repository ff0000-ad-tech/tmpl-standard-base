import * as AdData from '@common/js/AdData.js'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import { DpsManager } from '@ff0000-ad-tech/ad-dps'

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
	// init dps-manager environment, based on adParams.environmentId
	DpsManager.init(adParams)
	// load dps-data and add to ad-data
	await DpsManager.loadFeeds(adParams.dpsConfig)
	// author adds necessary requests to queue
	await window.adData.requestDynamicImages()
	// preload dynamic images
	await loadDynamicImages()
	// let creative-server know dps-preflight is complete
	await DpsManager.preflightComplete()
}

const addImageAssets = async (imageAssets) => {
	console.log('Preflight.addImageAssets()')
	ImageManager.add(imageAssets)
}

const loadDynamicImages = async () => {
	console.log('Preflight.loadDynamicImages()')
	await ImageManager.load()
}
