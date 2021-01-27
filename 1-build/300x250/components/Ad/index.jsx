import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-control'

import CanvasElement from '../CanvasElement'
import CanvasElementImage from '../CanvasElementImage'
import CanvasElementMask from '../CanvasElementMask'
import CanvasElementText from '../CanvasElementText'
import CanvasElementTween from '../CanvasElementTween'

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

	render() {
		return (
			<div className="a">
				{/* <TextFit minFontSize={1} maxFontSize={50} className="tf__box">
					The quick brown fox jumps over the lazy dog. This is some more good stuff sdfg sdfgsd dsfg sfgh dgdfh fdgh
				</TextFit> */}
				{/* <CanvasElement ref={(el) => (this.canvas = el)} className="a__canvas" width={adParams.adWidth} height={adParams.adHeight} /> */}
				{/* <CanvasElementTween ref={(el) => (this.canvas = el)} className="a__canvas" width={adParams.adWidth} height={adParams.adHeight} /> */}
				{/* <CanvasElementImage ref={(el) => (this.canvas = el)} width={adParams.adWidth} height={adParams.adHeight} /> */}
				{/* <CanvasElementMask ref={(el) => (this.canvas = el)} width={adParams.adWidth} height={adParams.adHeight} /> */}
				{/* <CanvasElementText ref={(el) => (this.canvas = el)} width={adParams.adWidth} height={adParams.adHeight} /> */}
				{/* <SplitText>This is some cool text</SplitText> */}
				<div className="buttons">
					<button>Element</button>
					<button>Image</button>
					<button>Mask</button>
					<button>Text</button>
					<button>Tween</button>
				</div>
			</div>
		)
	}
}
export default Ad
