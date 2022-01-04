import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

// Components
import DemoElement from '../DemoElement'
import TwitchBug from '../TwitchBug'
import TwitchWordMark from '../TwitchWordMark'
import TwitchWordMarkFull from '../TwitchWordMarkFull'
import TwitchCta from '../TwitchCta'
import TwitchText from '../TwitchText'
import TwitchAnimatedGrad from '../TwitchAnimatedGrad'
import TwitchStreamerBug from '../TwitchStreamerBug'
import TwitchGlitchExtrude from '../TwitchGlitchExtrude'
import TwitchGlitch from '../TwitchGlitch'
import TwitchWordBoard from '../TwitchWordBoard'
import TwitchTripleText from '../TwitchTripleText'
import TwitchNameScrollBug from '../TwitchNameScrollBug'
import TwitchPanelWipe from '../TwitchPanelWipe'
import TwitchSquareTrans from '../TwitchSquareTrans'

// Assets
// Images
import '@size/images/panelwipe.jpg'

// Styles
import './styles.scss'

class Ad extends Component {
	constructor(props) {
		super(props)
		this.text = 'This is some cool text<br>for a twitch ad'
		this.wordboardtext = 'Its Here.'
		this.tripletext = 'This is a really cool thing!<br>Yes, yes it is!'
	}

	componentDidMount() {
		const {
			twitchWordMarkFull3,
			twitchWordMarkFull2,
			twitchGlitch,
			twitchPanelWipe,
			twitchNameScrollBug,
			twitchTripleText,
			twitchBug,
			twitchWordBoard,
			twitchGlitchExtrude,
			twitchStreamerBug,
			twitchCta,
			twitchText,
			twitchAnimatedGrad,
			twitchSquareTrans,
			twitchSquareTransReverse,
		} = this

		twitchWordMarkFull3.start()
		twitchWordMarkFull2.start()
		twitchGlitch.start()
		twitchPanelWipe.start()
		twitchNameScrollBug.start()
		twitchTripleText.start()
		twitchBug.start()
		twitchWordBoard.start()
		twitchGlitchExtrude.start()
		twitchStreamerBug.start()
		twitchCta.start()
		twitchText.start()
		twitchAnimatedGrad.start()
		twitchSquareTrans.start()
		twitchSquareTransReverse.start()
	}
	render() {
		return (
			<div className="ad">
				<div className="ad__inner-container">
					<DemoElement
						name="Twitch Square Trans (inout)"
						width="250px"
						height="180px"
						background="#cccccc"
						onClick={() => {
							this.twitchSquareTrans.restart()
						}}
					>
						<TwitchSquareTrans type="inout" delay="2" ref={(el) => (this.twitchSquareTrans = el)}>
							<img src={ImageManager.get('panelwipe').src} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
						</TwitchSquareTrans>
					</DemoElement>
					<DemoElement
						name="Twitch Square Trans (inout reverse)"
						width="250px"
						height="180px"
						background="#cccccc"
						onClick={() => {
							this.twitchSquareTransReverse.restart()
						}}
					>
						<TwitchSquareTrans type="inout" delay="2" reverse ref={(el) => (this.twitchSquareTransReverse = el)}>
							<img src={ImageManager.get('panelwipe').src} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
						</TwitchSquareTrans>
					</DemoElement>
					<DemoElement
						name="Twitch Wordmark Full 3 Color"
						width="250px"
						height="180px"
						background="#cccccc"
						onClick={() => {
							this.twitchWordMarkFull3.restart()
						}}
					>
						<TwitchWordMarkFull
							delay={3}
							scale={0.6}
							gradColors={['#9146ff', '#00fafa', '#fafa19']}
							ref={(el) => (this.twitchWordMarkFull3 = el)}
						/>
					</DemoElement>
					<DemoElement
						name="Twitch Wordmark Full 2 Color"
						width="250px"
						height="180px"
						background="#cccccc"
						onClick={() => {
							this.twitchWordMarkFull2.restart()
						}}
					>
						<TwitchWordMarkFull scale={0.6} gradColors={['#9146ff', '#00fafa']} ref={(el) => (this.twitchWordMarkFull2 = el)} />
					</DemoElement>
					<DemoElement
						name="Twitch Glitch"
						width="250px"
						height="180px"
						onClick={() => {
							this.twitchGlitch.restart()
						}}
					>
						<TwitchGlitch scale={0.2} color="purple" ref={(el) => (this.twitchGlitch = el)} />
					</DemoElement>
					<DemoElement
						name="Twitch Panel Wipe"
						width="250px"
						height="180px"
						onClick={() => {
							this.twitchPanelWipe.restart()
						}}
					>
						<TwitchPanelWipe ref={(el) => (this.twitchPanelWipe = el)}>
							<img src={ImageManager.get('panelwipe').src} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
						</TwitchPanelWipe>
					</DemoElement>
					<DemoElement
						name="Twitch Name Scroll Bug"
						width="250px"
						height="180px"
						onClick={() => {
							this.twitchNameScrollBug.restart()
						}}
					>
						<TwitchNameScrollBug name="Khaykashi" color="purple" scale={0.15} ref={(el) => (this.twitchNameScrollBug = el)} />
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
						<TwitchBug color="purple" scale={0.5} ref={(el) => (this.twitchBug = el)} />
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
						name="Twitch Glitch Extrude"
						width="250px"
						height="180px"
						onClick={() => {
							this.twitchGlitchExtrude.restart()
						}}
					>
						<TwitchGlitchExtrude scale={1.3} color="purple" ref={(el) => (this.twitchGlitchExtrude = el)} />
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
						name="Twitch CTA"
						width="250px"
						height="180px"
						onClick={() => {
							this.twitchCta.restart()
						}}
					>
						<TwitchCta
							color="purple"
							fit
							width={200}
							minFont={3}
							maxFont={25}
							arrow
							text="Install this app now"
							ref={(el) => (this.twitchCta = el)}
						/>
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
