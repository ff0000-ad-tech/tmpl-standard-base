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
	// instantiate global ad-data
	window.adData = AdData
	// load velvet data
	await loadVelvetData()
	// add payload assets to ImageManager
	addImageAssets([...assets.preloaders, ...assets.images, ...assets.binaries])
	// author adds necessary requests to queue
	await window.adData.requestDynamicImages()
	// preload dynamic images
	await loadDynamicImages()
}

// load velvet data and send to AdData
const loadVelvetData = async () => {
	console.log('Preflight.loadVelvetData()')
	return new Promise((resolve, reject) => {
		adParams.dateSettings.inDev = adParams.environmentId == 'staging' || adParams.environmentId == 'debug'
		// if init is successful, process data and proceed to build ad
		Velvet.addEventListener(Velvet.events.INIT, async () => {
			await window.adData.processVelvetAdData()
			resolve()
		})
		// if init is unsucessful, use static
		Velvet.addEventListener(Velvet.events.STATIC, () => {
			window.useBackup()
			reject(new Error(`Unable to resolve velvet-data, using static backup.`))
		})
		Velvet.init(document.getElementById('main'), adParams)
	})
}

const addImageAssets = async (imageAssets) => {
	console.log('Preflight.addImageAssets()')
	ImageManager.add(imageAssets)
}

const loadDynamicImages = async () => {
	console.log('Preflight.loadDynamicImages()')
	await ImageManager.load()
}
