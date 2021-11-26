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
							<rect x="1305" y="550" class="twitchglitch__glitch-icon-eye" width="200" height="600" />
							<rect x="755" y="550" class="twitchglitch__glitch-icon-eye" width="200" height="600" />
						</g>
					</g>
				</g>
			</svg>
		)
	}
	componentDidMount() {
		// Setup gradients to tween to
		this.bg_left_start = 'linear-gradient(90deg, rgba(145, 70, 255, 0) 0%, rgba(145, 70, 255, 1) 0%, rgba(145, 70, 255, 0) 0%)'
		this.bg_mid_start = 'linear-gradient(90deg, rgba(145, 70, 255, 0) 10%, rgba(145, 70, 255, 1) 0%, rgba(145, 70, 255, 0) 0%)'
		this.bg_bottom_start = 'linear-gradient(0deg, rgba(145, 70, 255, 0) 0%, rgba(145, 70, 255, 1) 0%, rgba(145, 70, 255, 0) 0%)'
		this.bg_left_end = 'linear-gradient(90deg, rgba(145, 70, 255, 0) 0%, rgba(145, 70, 255, 1) 100%, rgba(145, 70, 255, 0) 100%)'
		this.bg_mid_end = 'linear-gradient(90deg, rgba(145, 70, 255, 0) 10%, rgba(145, 70, 255, 1) 100%, rgba(145, 70, 255, 0) 100%)'
		this.bg_bottom_end = 'linear-gradient(0deg, rgba(145, 70, 255, 0) 0%, rgba(145, 70, 255, 1) 100%, rgba(145, 70, 255, 0) 100%)'

		// Initial setup
		gsap.set('.twitchglitch__glitch', { left: -5, top: 40, opacity: 0 })
		gsap.set('.twitchglitch__glitch-icon-eye', { opacity: 0 })
		this.start()
	}

	// Only used in demo for restarting animation. You can delete if you want
	restart() {
		// Initial setup
		gsap.set('.twitchglitch__left', { backgroundImage: this.bg_left_start })
		gsap.set('.twitchglitch__mid', { backgroundImage: this.bg_mid_start })
		gsap.set('.twitchglitch__bottom', { backgroundImage: this.bg_bottom_start })

		gsap.set('.twitchglitch__glitch', { scale: 1, left: -5, top: 40, opacity: 0 })
		gsap.set('.twitchglitch__glitch-icon-eye', { opacity: 0 })
		this.start()
	}

	start() {
		gsap.set('.twitchglitch__glitch', { opacity: 1 })
		gsap.from('.twitchglitch__glitch', { scale: 2, duration: 0.3, ease: 'expo.out' })
		let delay = 0.3

		// Animate gradients
		gsap.to('.twitchglitch__left', { delay: delay, duration: 0.3, backgroundImage: this.bg_left_end, ease: 'sine.out' })
		gsap.to('.twitchglitch__mid', { delay: delay, duration: 0.3, backgroundImage: this.bg_mid_end, ease: 'sine.out' })
		gsap.to('.twitchglitch__bottom', { delay: delay, duration: 0.3, backgroundImage: this.bg_bottom_end, ease: 'sine.out' })
		// Slide glich up
		gsap.to('.twitchglitch__glitch', { delay: delay, duration: 0.305, left: 35, top: 0, ease: 'sine.out' })

		// Eye animation
		// Animate open
		gsap.set('.twitchglitch__glitch-icon-eye', { opacity: 1 })
		gsap.from('.twitchglitch__glitch-icon-eye', { delay: delay, duration: 0.05, scaleY: 0, ease: 'sine.out' })
		// Animate closed
		gsap.to('.twitchglitch__glitch-icon-eye', { delay: delay + 0.1, duration: 0.05, scaleY: 0, ease: 'sine.out' })
		// Animate open
		gsap.to('.twitchglitch__glitch-icon-eye', { delay: delay + 0.15, duration: 0.05, scaleY: 1, ease: 'sine.out' })
		gsap.to('.twitchglitch__glitch-icon-eye', { delay: delay + 0.2, duration: 0.05, scaleY: 0.2, ease: 'sine.out' })
		gsap.to('.twitchglitch__glitch-icon-eye', { delay: delay + 0.25, duration: 0.1, scaleY: 1, ease: 'sine.out' })
	}
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
