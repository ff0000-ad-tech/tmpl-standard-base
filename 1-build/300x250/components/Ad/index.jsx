import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

// Components
import BrandLogo from '../BrandLogo'
import TwitchText from '../TwitchText'

// Assets
import '@common/fonts/template_font.woff'
import '@size/images/160over90-logo.png'
import '@size/images/160over90-logo-small.png'

// Styles
import './styles.scss'

class Ad extends Component {
	constructor(props) {
		super(props)
		this.text = 'This is some cool text<br>for a twitch ad'
	}

	render() {
		return (
			<div className="ad" onClick={this.props.onClick} onMouseOver={this.props.onMouseOver} onMouseLeave={this.props.onMouseLeave}>
				<TwitchText className="twitchtext" width={250} animateOut outDelay={2} ref={(el) => (this.twitchTextRef = el)}>
					{this.text}
				</TwitchText>
			</div>
		)
	}
}
export default Ad
