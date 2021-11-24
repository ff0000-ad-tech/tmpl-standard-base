import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

import './styles.scss'
import '@size/images/ref.png'
class TwitchGlitch extends Component {
	constructor(props) {
		super(props)

		this.glitch = (
			<svg viewBox="0 0 2005 2542" class="twitchglitch__glitch">
				<g>
					<polygon class="twitchglitch__glitch-bg" points="1805,1300 1405,1700 1005,1700 655,2050 655,1700 205,1700 205,200 1805,200 	" />
					<g>
						<g id="Layer_1-2">
							<path
								class="twitchglitch__glitch-icon"
								d="M0,1905h451v637l639-637h439l476-505V0H0 M1805,1300l-400,400h-400l-350,350v-350H205V200h1600V1300z"
							/>
							<rect x="1305" y="550" class="twitchglitch__glitch-icon" width="200" height="600" />
							<rect x="755" y="550" class="twitchglitch__glitch-icon" width="200" height="600" />
						</g>
					</g>
				</g>
			</svg>
		)
	}
	componentDidMount() {
		// this.start()
		let bg_left = 'linear-gradient(90deg, rgba(145, 70, 255, 0) 0%, rgba(145, 70, 255, 1) 100%, rgba(145, 70, 255, 0) 100%)'
		let bg_mid = 'linear-gradient(90deg, rgba(145, 70, 255, 0) 10%, rgba(145, 70, 255, 1) 100%, rgba(145, 70, 255, 0) 100%)'
		let bg_bottom = 'linear-gradient(0deg, rgba(145, 70, 255, 0) 0%, rgba(145, 70, 255, 1) 100%, rgba(145, 70, 255, 0) 100%)'
		gsap.to('.twitchglitch__left', { duration: 0.3, backgroundImage: bg_left, ease: 'sine.out' })
		gsap.to('.twitchglitch__mid', { duration: 0.3, backgroundImage: bg_mid, ease: 'sine.out' })
		gsap.to('.twitchglitch__bottom', { duration: 0.3, backgroundImage: bg_bottom, ease: 'sine.out' })
		gsap.from('.twitchglitch__glitch', { duration: 0.305, left: -5, top: 40, ease: 'sine.out' })
	}

	// Only used in demo for restarting animation. You can delete if you want
	restart() {
		this.start()
	}

	start() {}
	render() {
		const { debug } = this.props
		return (
			<div className="twitchglitch">
				{/*<img src={ImageManager.get('ref').src} className="twitchglitch__ref" />*/}
				<div className="twitchglitch__extrusion-container">
					<div className="twitchglitch__left"></div>
					<div className="twitchglitch__bottom"></div>
					<div className="twitchglitch__mid"></div>
				</div>
				{this.glitch}
			</div>
		)
	}
}

export default TwitchGlitch
