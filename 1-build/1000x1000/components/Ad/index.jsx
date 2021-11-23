import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

// Components
import DemoElement from '../DemoElement'
import TwitchBug from '../TwitchBug'
import TwitchCta from '../TwitchCta'
import TwitchText from '../TwitchText'
import TwitchAnimatedGrad from '../TwitchAnimatedGrad'

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
				<div className="ad__inner-container">
					<DemoElement name="Twitch Bug" width="250px" height="150px">
						<TwitchBug debug scale={0.6} ref={(el) => (this.twitchBug = el)} />
					</DemoElement>
					<DemoElement name="Twitch CTA" width="250px" height="150px">
						<TwitchCta fit width={200} minFont={3} maxFont={25} arrow text="Install this app now" ref={(el) => (this.twitchCta = el)} />
					</DemoElement>
					<DemoElement name="Twitch Text" width="250px" height="150px">
						<TwitchText className="twitchtext" width={200} animateOut fit outDelay={2} ref={(el) => (this.twitchText = el)}>
							{this.text}
						</TwitchText>
					</DemoElement>
					<DemoElement name="Twitch Grad2-1" width="250px" height="150px">
						<div className="grad2-1 grad"></div>
					</DemoElement>
					<DemoElement name="Twitch Grad3-1" width="250px" height="150px">
						<div className="grad3-1 grad"></div>
					</DemoElement>
					<DemoElement name="Twitch Grad3-2" width="250px" height="150px">
						<div className="grad3-2 grad"></div>
					</DemoElement>
					<DemoElement name="Twitch Grad3-3" width="250px" height="150px">
						<div className="grad3-3 grad"></div>
					</DemoElement>
					<DemoElement name="Twitch Grad3-4" width="250px" height="150px">
						<div className="grad3-4 grad"></div>
					</DemoElement>
					<DemoElement name="Twitch Animated Grad" width="250px" height="150px">
						<TwitchAnimatedGrad startClass="grad3-2" endClass="grad2-1" duration={1} />
					</DemoElement>
				</div>
			</div>
		)
	}
}
export default Ad
