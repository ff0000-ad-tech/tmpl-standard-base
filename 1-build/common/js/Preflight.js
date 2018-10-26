import AdData from '@common/js/AdData.js'
import { ImageManager } from 'ad-control'
/*-- Red.Imports.head.start --*/
/*-- Red.Imports.head.end --*/

/**
	PRE-FLIGHT		

	Resources that are shared by all the sizes should be loaded here. Boilerplate components 
	like {@link Velvet} & {@link DateManager} can be configured. Runtime JS loads. Etc.

	Once resolved, control moves to AdData.
*/
export class Preflight {
	static init() {
		console.log('Preflight.init()')
		return new Promise((resolve, reject) => {
			let promises = [
				// this.loadDynamicJS('define-your-case-id')
			]

			Promise.all(promises)
				.then(() => {
					this.addPreloadedImages()
					this.prepareAdData()
				})
				.then(() => {
					resolve()
				})
				.catch(err => {
					reject(err)
				})
		})
	}


	static addPreloadedImages() {
		console.log('Preflight.addPreloadedImages()')
		ImageManager.addToDictionary(assets.preloadedImages)
	}

	static prepareAdData() {
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
	static loadDynamicJS(id) {
		return new Promise((resolve, reject) => {
			switch (id) {
				/*
				case THIS_CASE__ID: // ex: '300x250_Endframe'
					import('THIS_CASE__ASSET_PATH') // ex: '@common/dynamic_js/300x250_Endframe.js'
						.then(module => {
							// example implementation of loaded ES6 module
							global[module.default.name] = module.default
							resolve()
						})
						.catch(err => reject(err))
					break
				*/
				default:
					console.log(`Common.loadDynamicJS() has no import case for: ${id}`)
					resolve()
			}
		})
	}
}
