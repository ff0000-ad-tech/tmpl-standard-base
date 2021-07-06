import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import * as Velvet from '@common/js/ad-velvet'
import * as AdData from '@common/js/AdData.js'

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
		this.state = {
			img: '',
		}
	}

	componentDidMount() {
		const networkImages = Velvet.get('networks')
		this.setState({ img: networkImages[0].value.url })
		console.warn('THESE ARE NETWORK IMAGES=', this.state.img)
		console.warn('POOP=', window.adData.stuff)
	}

	render() {
		return (
			<div className="ad">
				<BrandLogo ref={(el) => (this.brandlogo = el)} />
				<div className="ad__footer">
					<img className="ad__logo" src={ImageManager.get('160over90-logo-small').src} />
					<div className="ad__cta">LEARN MORE</div>
				</div>
				<img style={{ position: 'absolute', top: '0', left: '0', width: '300px', height: '250px' }} src={this.state.img} />
			</div>
		)
	}
}
export default Ad
