import AdData from '@common/js/AdData.js'
import { ImageManager } from '@ff0000-ad-tech/ad-control'
import * as dps from '@ff0000-ad-tech/ad-dps'
/*-- Red.Imports.head.start --*/
/*-- Red.Imports.head.end --*/

/**
	PRE-FLIGHT		

	Resources that are shared by all the sizes should be loaded here. Boilerplate components 
	like {@link Velvet} & {@link DateManager} can be configured. Runtime JS loads. Etc.

	Once resolved, control moves to AdData.
*/
export class Preflight {
	static init = async () => {
		console.log('Preflight.init()')
		await Promise.all([
			// loadDynamicJS('define-your-case-id')
			loadDpsData(),
		])
		addPreloadedImages()
		prepareAdData()
	}
}

const loadDpsData = async () => {
	console.log('Preflight.loadDpsData()')
	const data = await dps.load(adParams.dps)
	console.log(data)
}

const addPreloadedImages = () => {
	console.log('Preflight.addPreloadedImages()')
	ImageManager.addToDictionary(assets.preloadedImages)
}

const prepareAdData = () => {
	console.log('Preflight.prepareAdData()')

	global.adData = new AdData()
}

/**
	Method for loading dynamic, compiled ES6 modules at runtime. This should be threaded into 
	Preflight.init()'s promise chain, as needed.

	You must:
		- define THIS_CASE__ID
		- replace THIS_CASE__ASSET_PATH with a string
		- handle the implementation of the loaded module.
*/
const loadDynamicJS = async (id) => {
	switch (id) {
		/*
		case THIS_CASE__ID: // ex: '300x250_Endframe'
			await import('THIS_CASE__ASSET_PATH') // ex: '@common/dynamic_js/300x250_Endframe.js'
			// example implementation of loaded ES6 module
			global[module.default.name] = module.default
			break
		*/
		default:
			console.log(`Common.loadDynamicJS() has no import case for: ${id}`)
	}
}
