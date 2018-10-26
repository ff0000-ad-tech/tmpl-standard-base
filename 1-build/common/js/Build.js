import { UIComponent, UIBorder, UIButton, UIImage, TextFormat, UITextField } from 'ad-ui'
import { Styles, Markup, Align, Effects } from 'ad-view'
import { ImageManager } from 'ad-control'
import '@size/images/template_image.png'


export function Main() {
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
Styles.setCss(T, { 'background-color': '#cccccc' })


	return T
}

export function MainBorder() {
	new UIBorder({
		target: View.main,
		size: 1,
		color: '#000000'
	})
}


