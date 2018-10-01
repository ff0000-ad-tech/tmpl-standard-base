/**
	@class Common
	@desc
		Resources that are shared among all the sizes should be prepared here.
		<br><br>
		There are two phases to {@link Common}:
		<b>Phase 1 - Components:</b><br>
		This is where boilerplate-components options can be prepared, like {@link Velvet}, {@link DateManager}, 
		{@link Analytics}, Monet, Flashtalking, GDC, etc, etc can be prepared, asyncronously before {@link AdData} 
		is instantiated.
		<br><br>
		<b>Phase 2 - AdData:</b><br>
		See {@Common.prepareAdData} for more information.
		<br><br>
		<b>Note:</b><br>
		Your Common may have many methods that are not documented here. These are optional 
		modules that were added procedurally during the Build Source creation.
*/
import AdData from '../data/AdData.js'
import { ImageManager } from 'ad-control'
/*-- Red.Imports.head.start --*/
/*-- Red.Imports.head.end --*/

export class Common {
	/**
		@memberof Common
		@method init
	*/
	static init() {
		console.log('Common.init()')
		return new Promise((resolve, reject) => {
			let promises = []



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



	/**
		@memberof Common
		@method addPreloadedImages
		@desc
			Makes all images associated with the preloader available to the ad as a whole
	*/
	static addPreloadedImages() {
		console.log('Common.addPreloadedImages()')
		ImageManager.addToDictionary(assets.preloadedImages)

		/* ---- USER-DEFINED Common -------------------------------------------------------
		*
		*		This is BEFORE the image-queue is loaded...
		*/
		// -->
	}

	/**
		@memberof Common
		@method prepareAdData
		@desc
			Custom, hand-coded code, needed for all ad-sizes should go here. 
	*/
	static prepareAdData() {
		console.log('Common.prepareAdData()')


		global.adData = new AdData()

		/* ---- USER-DEFINED Common -------------------------------------------------------
		*
		*		This is BEFORE the image-queue is loaded...
		*/
		// -->
	}

	/**
		@memberof Common
		@method loadDynamicJS
		@desc 
			Method for loading dynamic, compiled ES6 modules at runtime. This should be threaded into 
			Common.init()'s promise chain, as needed.

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
