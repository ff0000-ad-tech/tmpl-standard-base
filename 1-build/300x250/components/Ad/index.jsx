import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

// Components
import BrandLogo from '../BrandLogo'
import TwitchText from '../TwitchText'
import TwitchCta from '../TwitchCta'

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

	start() {}
	render() {
		return (
			<div className="ad" onClick={this.props.onClick} onMouseOver={this.props.onMouseOver} onMouseLeave={this.props.onMouseLeave}>
				{/* <TwitchText className="twitchtext" width={250} animateOut fit outDelay={2} ref={(el) => (this.twitchTextRef = el)}>
					{this.text}
				</TwitchText> */}
				<TwitchCta height={30} text="Install now ↗" ref={(el) => (this.twitchCtaRef = el)} />
			</div>
		)
	}
}
export default Ad
