import * as AdData from '@common/js/AdData.js'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import * as Velvet from '@ff0000-ad-tech/ad-velvet'

/**
 * PRE-FLIGHT
 *
 * Resources that are shared by all the sizes should be loaded here.
 *
 */
export const init = async (assets) => {
	// prepare velvet
	await prepareVelvet()
	// instantiate global ad-data
	window.adData = AdData
	window.adData.processVelvetAdData()

	// add payload assets to ImageManager
	addImageAssets([...assets.preloaders, ...assets.images, ...assets.binaries])
	// author adds necessary requests to queue
	await window.adData.requestDynamicImages()
	// preload dynamic images
	await loadDynamicImages()
}

// prepare ad manager
const prepareVelvet = async () => {
	console.log('Preflight.prepareVelvet()')
	Velvet.addEventListener(Velvet.events.FAIL, window.useBackup)
	Velvet.addEventListener(Velvet.events.STATIC, window.useBackup)
	adParams.dateSettings.inDev = adParams.environmentId == 'staging' || adParams.environmentId == 'debug'
	return Promise.resolve(Velvet.init(adParams.velvet, adParams.dateSettings, adParams.adSize, document.getElementById('main')))
}

const addImageAssets = async (imageAssets) => {
	console.log('Preflight.addImageAssets()')
	ImageManager.add(imageAssets)
}

const loadDynamicImages = async () => {
	console.log('Preflight.loadDynamicImages()')
	await ImageManager.load()
}
