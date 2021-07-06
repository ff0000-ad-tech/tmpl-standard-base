import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import * as Velvet from '@common/js/ad-velvet'

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
		// const playerImgs = Velvet.get('networks')
		// console.warn('THESE ARE PLAYER IMAGES=', playerImgs)
	}

	render() {
		return (
			<div className="ad">
				<BrandLogo ref={(el) => (this.brandlogo = el)} />
				<div className="ad__footer">
					<img className="ad__logo" src={ImageManager.get('160over90-logo-small').src} />
					<div className="ad__cta">LEARN MORE</div>
				</div>
			</div>
		)
	}
}
export default Ad
