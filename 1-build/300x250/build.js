/* BUILD SOURCE: Standard - Base / OPTIONS: Sample UIComponents / AdApp: 3.0.3 / AdHtml: v0.1.3 / Created: 06/20/18 11:35am */
import { Styles, Markup, Align, Effects } from 'ad-view'
import { ImageManager, Core } from 'ad-control'
import { Gesture, GestureEvent } from 'ad-events'
import { Common } from '../common/js/control/Common.js'
import './images/template_image.png'
import { UIComponent, UIBorder, UIButton, UIImage, TextFormat, UITextField } from 'ad-ui'


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

	T.logoContainer = new UIImage({
		id: 'logo-container',
		target: T,
		source: 'template_image',
		css: {
			x: 9,
			y: 60
		}
	})

	T.txtGreeting = new UITextField({
		id: 'txt-greeting',
		target: T,
		css: {
			width: 200,
			height: 30,
			color: '#ff1414'
		},
		align: Align.CENTER,
		fontSize: 40,
		fontFamily: 'template_font',
		format: TextFormat.INLINE_FIT,
		alignText: Align.CENTER,
		bufferText: {
			left: 5,
			right: 5
		},
		leading: 1,
		text: 'MOBILE ADS'			
	})

	Effects.textDropShadow({
		target: T.txtGreeting, 
		angle: 45, 
		distance: 2, 
		size: 2, 
		color: '#000000', 
		alpha: 0.5
	})

	T.buttonCta = new UIButton({
		id: 'btn-cta',
		target: T,
		css: {
			width: 150,
			height: 40,
			backgroundColor: 'grey',
			borderRadius: 10
		},
		align: {
			x: Align.CENTER,
			y: {
				type: Align.BOTTOM,
				offset: -30
			}
		},
		icon: [
			new UITextField({
				css: {
					width: 150,
					height: 40,
					color: '#ffffff'
				},
				fontSize: 12,
				fontFamily: 'template_font',
				format: TextFormat.INLINE_FIT,
				alignText: Align.CENTER,
				text: 'CLICK FOR MORE'
			})
		]
	})

	// add background color to ad if needed
	Styles.setCss(T, { 'background-color':'#cccccc' })		

	



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

		TweenLite.from(View.main.logoContainer, 1, { y:-40 })
		TweenLite.from(View.main.txtGreeting, 1, { y:330 })


	}


}
