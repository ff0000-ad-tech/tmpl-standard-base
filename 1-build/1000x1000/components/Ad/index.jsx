import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

// Components
import DemoElement from '../DemoElement'
import TwitchBug from '../TwitchBug'
import TwitchWordMark from '../TwitchWordMark'
import TwitchCta from '../TwitchCta'
import TwitchText from '../TwitchText'
import TwitchAnimatedGrad from '../TwitchAnimatedGrad'
import TwitchStreamerBug from '../TwitchStreamerBug'
import TwitchGlitch from '../TwitchGlitch'
import TwitchWordBoard from '../TwitchWordBoard'
import TwitchTripleText from '../TwitchTripleText'
import TwitchNameScrollBug from '../TwitchNameScrollBug'

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
		this.wordboardtext = 'Its Here.'
		this.tripletext = 'This is a really cool thing!<br>Yes, yes it is!'
	}

	render() {
		return (
			<div className="ad">
				<div className="ad__inner-container">
					<DemoElement
						name="Twitch Name Scroll Bug"
						width="250px"
						height="180px"
						onClick={() => {
							this.twitchNameScrollBug.restart()
						}}
					>
						<TwitchNameScrollBug name="Khaykashi" scale={0.2} ref={(el) => (this.twitchNameScrollBug = el)} />
					</DemoElement>
					<DemoElement
						name="Twitch Name Scroll Bug"
						width="250px"
						height="180px"
						onClick={() => {
							this.twitchNameScrollBug2.restart()
						}}
					>
						<TwitchNameScrollBug name="Khaykashi" scale={0.2} ref={(el) => (this.twitchNameScrollBug2 = el)} />
					</DemoElement>
					<DemoElement
						name="Twitch Triple Text"
						width="250px"
						height="180px"
						background="#9146ff"
						onClick={() => {
							this.twitchTripleText.restart()
						}}
					>
						<TwitchTripleText
							width={230}
							zoomScale={2}
							fit
							minFontSize={5}
							//maxFontSize={23}
							fontSize={50}
							ref={(el) => (this.twitchTripleText = el)}
						>
							{this.tripletext}
						</TwitchTripleText>
					</DemoElement>
					<DemoElement
						name="Twitch Bug"
						width="250px"
						height="180px"
						onClick={() => {
							this.twitchBug.restart()
						}}
					>
						<TwitchBug scale={0.6} ref={(el) => (this.twitchBug = el)} />
					</DemoElement>
					<DemoElement
						name="Twitch Word Board"
						width="250px"
						height="180px"
						onClick={() => {
							this.twitchWordBoard.restart()
						}}
					>
						<TwitchWordBoard className="twitchtext" width="100%" height="100%" zoomScale={2} ref={(el) => (this.twitchWordBoard = el)}>
							{this.wordboardtext}
						</TwitchWordBoard>
					</DemoElement>

					<DemoElement
						name="Twitch Glitch"
						width="250px"
						height="180px"
						onClick={() => {
							this.twitchGlitch.restart()
						}}
					>
						<TwitchGlitch ref={(el) => (this.twitchGlitch = el)} />
					</DemoElement>
					<DemoElement
						name="Twitch Streamer bug"
						width="250px"
						height="180px"
						onClick={() => {
							this.twitchStreamerBug.restart()
						}}
					>
						<TwitchStreamerBug ref={(el) => (this.twitchStreamerBug = el)} name="UmiNoKaiju" />
					</DemoElement>
					<DemoElement
						name="Twitch Wordmark"
						width="250px"
						height="180px"
						background="#9146ff"
						onClick={() => {
							this.twitchWordMark.restart()
						}}
					>
						<TwitchWordMark scale={0.6} ref={(el) => (this.twitchWordMark = el)} />
					</DemoElement>

					<DemoElement
						name="Twitch CTA"
						width="250px"
						height="180px"
						onClick={() => {
							this.twitchCta.restart()
						}}
					>
						<TwitchCta fit width={200} minFont={3} maxFont={25} arrow text="Install this app now" ref={(el) => (this.twitchCta = el)} />
					</DemoElement>
					<DemoElement
						name="Twitch Text"
						width="250px"
						height="180px"
						onClick={() => {
							this.twitchText.restart()
						}}
					>
						<TwitchText className="twitchtext" width={200} animateOut fit outDelay={2} ref={(el) => (this.twitchText = el)}>
							{this.text}
						</TwitchText>
					</DemoElement>
					<DemoElement name="Twitch Grad2-1" width="250px" height="180px">
						<div className="grad2-1 grad"></div>
					</DemoElement>
					<DemoElement name="Twitch Grad3-1" width="250px" height="180px">
						<div className="grad3-1 grad"></div>
					</DemoElement>
					<DemoElement name="Twitch Grad3-2" width="250px" height="180px">
						<div className="grad3-2 grad"></div>
					</DemoElement>
					<DemoElement name="Twitch Grad3-3" width="250px" height="180px">
						<div className="grad3-3 grad"></div>
					</DemoElement>
					<DemoElement name="Twitch Grad3-4" width="250px" height="180px">
						<div className="grad3-4 grad"></div>
					</DemoElement>
					<DemoElement
						name="Twitch Animated Grad"
						width="250px"
						height="180px"
						onClick={() => {
							this.twitchAnimatedGrad.restart()
						}}
					>
						<TwitchAnimatedGrad startClass="grad3-2" endClass="grad2-1" duration={1} ref={(el) => (this.twitchAnimatedGrad = el)} />
					</DemoElement>
				</div>
			</div>
		)
	}
}
export default Ad
