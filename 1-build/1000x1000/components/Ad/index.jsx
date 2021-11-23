import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

// Components
import DemoElement from '../DemoElement'
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

	render() {
		return (
			<div className="ad" onClick={this.props.onClick} onMouseOver={this.props.onMouseOver} onMouseLeave={this.props.onMouseLeave}>
				<div className="ad__inner-container">
					<DemoElement name="Twitch Bug" width="250px" height="150px">
						<BrandLogo ref={(el) => (this.brandLogo = el)} />
					</DemoElement>
				</div>
			</div>
		)
	}
}
export default Ad
