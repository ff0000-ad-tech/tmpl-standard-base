import * as AdData from '@common/js/AdData.js'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import { DpsManager } from '@ff0000-ad-tech/ad-dps'

// TODO:
import { DateManager } from '@common/js/ad-dates'

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
	// prepare date-management
	await prepareDateManagement()
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

// prepare date utils
const prepareDateManagement = async () => {
	console.log('Preflight.prepareDateManagement()')
	adParams.dateSettings.inDev = adParams.environmentId == 'staging' || adParams.environmentId == 'debug'
	DateManager.init(adParams.dateSettings)
	DateManager.setDefaultTimezone('US/Eastern') // NOTE: ESPN-specific!
	AdData.prepareDateSchedule()
}
