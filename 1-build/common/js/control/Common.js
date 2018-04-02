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
					this.prepareAdData()
					resolve()
				})
				.catch(err => {
					reject(err)
				})
		})
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
}