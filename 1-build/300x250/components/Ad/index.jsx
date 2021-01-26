import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-control'

import * as Align from '@common/js/utils/Align.js'
import BrandLogo from '../BrandLogo'
import CanvasElement from '../CanvasElement'
import CanvasElementImage from '../CanvasElementImage'
import CanvasElementMask from '../CanvasElementMask'
import CanvasElementText from '../CanvasElementText'
import CanvasElementTween from '../CanvasElementTween'
import TextFit from '../TextFit'

import './styles.scss'
import '@common/fonts/template_font.woff'
import '@size/images/160over90-logo.png'
import '@size/images/160over90-logo-small.png'

class Ad extends Component {
	constructor(props) {
		super(props)
	}

	getImage = (name) => {
		return ImageManager.get(name).src
	}

	componentDidMount() {
		console.warn(this.result)
	}
	render() {
		console.warn('PARENT RENDER HAPPENED')
		return (
			<div className="a">
				{/* <TextFit minFontSize={1} maxFontSize={50} className="tf__box">
					The quick brown fox jumps over the lazy dog. This is some more good stuff sdfg sdfgsd dsfg sfgh dgdfh fdgh
				</TextFit> */}
				{/* <CanvasElement ref={(el) => (this.canvas = el)} className="a__canvas" width={adParams.adWidth} height={adParams.adHeight} /> */}
				{/* <CanvasElementTween ref={(el) => (this.canvas = el)} className="a__canvas" width={adParams.adWidth} height={adParams.adHeight} /> */}
				<CanvasElementImage ref={(el) => (this.canvas = el)} width={adParams.adWidth} height={adParams.adHeight} />
			</div>
		)
	}
}
export default Ad

// <BrandLogo ref={(el) => (this.brandlogo = el)} />
// <div ref={(el) => (this.footer = el)} className="a__footer">
// 	<img ref={(el) => (this.logo = el)} className="a__logo" src={this.getImage('160over90-logo-small')} />
// 	<div ref={(el) => (this.cta = el)} className="a__cta">
// 		LEARN MORE
// 	</div>
// </div>
