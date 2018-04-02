/* BUILD SOURCE: Standard - Base / OPTIONS:  / AdApp: 1.9.3 / AdHtml: v2.8.2 / Created: 04/02/18 02:23pm */
import { Common } from '../common/js/control/Common.js'
import { Gesture, GestureEvent } from 'ad-events'
import { UIComponent, UIBorder, UIButton, UIImage, TextFormat, UITextField } from 'ad-ui'
import { Styles, Markup, Align, Effects } from 'ad-view'
import { ImageManager, Core } from 'ad-control'


/* -- CONTROL ----------------------------------------------------------------------------------------------------
 *
 *
 *
 */
window.Control = new function() {
	this.prepare = function(fbaContent) {
		console.log('Control.prepare()')
		Core.init(fbaContent)
			.then(() => {
				return Common.init()
			})
			.then(() => {
				return Core.loadDynamic()
			})
			.then(() => {
				this.prepareBuild()
			})
			.catch(err => {
				throw(err)
			})
	}

	// build runtime begins here ----------->
	this.prepareBuild = function() {
		console.log('Control.prepareBuild()')
		Control.preMarkup()


		View.main = new Main()
		View.mainBorder = new MainBorder()


		Control.postMarkup()


		Animation.startAd()

	}

	this.preMarkup = function() {
		console.log('Control.preMarkup()')

	}

	this.postMarkup = function() {
		console.log('Control.postMarkup()')
		// listen for default exit
		Gesture.add(View.main, GestureEvent.CLICK, Control.handleClick)



	}

	// IMPORTANT!!! If this method has content, Call this function when your animation is complete!
	this.animationComplete = function() {
		console.log('Control.animationComplete()')

	}

	this.handleClick = function(event) {

		Network.exit(clickTag) 
	}




}

/* -- VIEW ------------------------------------------------------------------------------------------------------
 *
 *
 *
 */

// ==============================================================================================================
function Main() {
	var T = Markup.get('main')
	Styles.setCss(T, {
		position: 'absolute',
		width: adParams.adWidth,
		height: adParams.adHeight,
		opacity: 0,
		left: '0px',
		top: '0px',
		overflow: 'hidden',
		userSelect: 'none'
	})



	return T
}


// ==============================================================================================================
function MainBorder(){
	new UIBorder({
		target : View.main,
		size : 1,
		color : '#000000'
	})
}



/* -- ANIMATION -------------------------------------------------------------------------------------------------
 *
 *
 *
 */
window.Animation = new function() {
	this.startAd = function() {
		console.log('Animation.startAd()')

		// show the main container
		global.removePreloader()
		Styles.setCss(View.main, {opacity: 1})


	}


}
