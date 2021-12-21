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

// Assets

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
						name="Twitch Wordmark Full 3 Color"
						width="250px"
						height="180px"
						background="#cccccc"
						onClick={() => {
							this.twitchWordMarkFull3.restart()
						}}
					>
						<TwitchWordMarkFull scale={0.6} gradColors={['#9146ff', '#00fafa', '#fafa19']} ref={(el) => (this.twitchWordMarkFull3 = el)} />
					</DemoElement>
				</div>
			</div>
		)
	}
}
export default Ad
