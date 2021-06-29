import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

import CanvasElement from '../CanvasElement'
import CanvasElementImage from '../CanvasElementImage'
import CanvasElementMask from '../CanvasElementMask'
import CanvasElementText from '../CanvasElementText'
import CanvasElementTween from '../CanvasElementTween'

import './styles.scss'
import '@common/fonts/template_font.woff'

// Styles
import './styles.scss'

class Ad extends Component {
	constructor(props) {
		super(props)
		this.state = {
			activeItem: 'element',
		}
	}

	render() {
		return (
			<div className="ad">
				{this.state.activeItem == 'element' ? (
					<CanvasElement ref={(el) => (this.canvas = el)} className="ad__canvas" width={adParams.adWidth} height={adParams.adHeight} />
				) : null}
				{this.state.activeItem == 'tween' ? (
					<CanvasElementTween ref={(el) => (this.canvas = el)} className="ad__canvas" width={adParams.adWidth} height={adParams.adHeight} />
				) : null}
				{this.state.activeItem == 'image' ? (
					<CanvasElementImage ref={(el) => (this.canvas = el)} width={adParams.adWidth} height={adParams.adHeight} />
				) : null}
				{this.state.activeItem == 'mask' ? (
					<CanvasElementMask ref={(el) => (this.canvas = el)} width={adParams.adWidth} height={adParams.adHeight} />
				) : null}
				{this.state.activeItem == 'text' ? (
					<CanvasElementText ref={(el) => (this.canvas = el)} width={adParams.adWidth} height={adParams.adHeight} />
				) : null}

				<div className="ad__nav">
					<button
						onClick={() => {
							this.setState({ activeItem: 'element' })
						}}
					>
						Element
					</button>
					<button
						onClick={() => {
							this.setState({ activeItem: 'image' })
						}}
					>
						Image
					</button>
					<button
						onClick={() => {
							this.setState({ activeItem: 'mask' })
						}}
					>
						Mask
					</button>
					<button
						onClick={() => {
							this.setState({ activeItem: 'text' })
						}}
					>
						Text
					</button>
					<button
						onClick={() => {
							this.setState({ activeItem: 'tween' })
						}}
					>
						Tween
					</button>
				</div>
			</div>
		)
	}
}
export default Ad
