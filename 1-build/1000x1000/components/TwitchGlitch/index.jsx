import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

import './styles.scss'

class TwitchGlitch extends Component {
	constructor(props) {
		super(props)

		this.glitch = (
			<svg viewBox="0 0 2400 2800" class="twitchglitch__glitch">
				<g>
					<polygon class="twitchglitch__glitch-bg" points="2200,1300 1800,1700 1400,1700 1050,2050 1050,1700 600,1700 600,200 2200,200 	" />
					<g>
						<g id="Layer_1-2">
							<path
								class="twitchglitch__glitch-icon"
								d="M500,0L0,500v1800h600v500l500-500h400l900-900V0H500z M2200,1300l-400,400h-400l-350,350v-350H600V200h1600
				   V1300z"
							/>
							<rect x="1700" y="550" class="twitchglitch__glitch-icon" width="200" height="600" />
							<rect x="1150" y="550" class="twitchglitch__glitch-icon" width="200" height="600" />
						</g>
					</g>
				</g>
			</svg>
		)
	}
	componentDidMount() {}

	// Only used in demo for restarting animation. You can delete if you want
	restart() {
		this.start()
	}

	start() {}
	render() {
		const { debug } = this.props
		return (
			<div className="twitchglitch">
				<div className="twitchglitch__left"></div>
				<div className="twitchglitch__bottom"></div>
				<div className="twitchglitch__mid"></div>
				{this.glitch}
			</div>
		)
	}
}

export default TwitchGlitch
