import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import { Emitter } from '@ff0000-ad-tech/ad-particles'
import EmitterData from '@size/js/EmitterData.js'

// Components
import BrandLogo from '../BrandLogo'

// Assets
import '@common/fonts/template_font.woff'
import '@size/images/160over90-logo.png'
import '@size/images/160over90-logo-small.png'

// Styles
import './styles.scss'

class Ad extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const particles = new Emitter()
		const el = document.getElementById('myCanvas')
		particles.init(el, { emitterData: EmitterData })

		particles.emit()
	}

	render() {
		return (
			<div className="ad" onClick={this.props.onClick} onMouseOver={this.props.onMouseOver} onMouseLeave={this.props.onMouseLeave}>
				<canvas id="myCanvas" width="300" height="250"></canvas>
			</div>
		)
	}
}
export default Ad
