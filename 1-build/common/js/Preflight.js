import * as AdData from '@common/js/AdData.js'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import * as Velvet from '@common/js/ad-velvet'
/**
 * PRE-FLIGHT
 *
 * Resources that are shared by all the sizes should be loaded here.
 *
 */
export const init = async (binaryAssets) => {
	// json map
	await prepareVelvet()

	// instantiate global ad-data
	// window.adData = new AdData()
	window.adData = AdData

	// add binary payload
	addFbaImages(binaryAssets)

	// add preloader images to build
	addPreloadedImages()

	// author adds necessary requests to queue
	// await AdData.requestDynamicImages()

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
