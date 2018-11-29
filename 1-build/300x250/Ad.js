import { Preflight } from '@common/js/Preflight.js'
import { Main, MainBorder } from '@common/js/Build.js'
import { Animation } from '@common/js/Animation.js'
import { Core } from 'ad-control'
import { Control } from '@common/js/Control.js'


export class Ad {
	// called from index.html onImpression()
	static launch(fbaContent) {
		console.log('Ad.launch()')
		Core.init(fbaContent)
			.then(() => Preflight.init())
			.then(() => Core.loadDynamic())
			.then(() => Ad.prepare())
			.catch(err => {
				throw err
			})
	}

	static prepare() {
		console.log('Ad.prepare()')
		Control.preMarkup()


		View.main = new Main()
View.mainBorder = new MainBorder()



		Control.postMarkup()


		Animation.start()

	}


}
window.Ad = Ad
