import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

// Styles
import './styles.scss'

class TwitchStreamerBug extends Component {
	constructor(props) {
		super(props)

		this.glitch = (
			<svg viewBox="0 0 2400 2800" class="streamerbug__glitch" ref={(el) => (this.glitchRef = el)}>
				<g>
					<polygon class="streamerbug__glitch-bg" points="2200,1300 1800,1700 1400,1700 1050,2050 1050,1700 600,1700 600,200 2200,200 	" />
					<g>
						<g id="Layer_1-2">
							<path
								class="streamerbug__glitch-icon"
								d="M500,0L0,500v1800h600v500l500-500h400l900-900V0H500z M2200,1300l-400,400h-400l-350,350v-350H600V200h1600
				   V1300z"
							/>
							<rect x="1700" y="550" class="streamerbug__glitch-icon" width="200" height="600" />
							<rect x="1150" y="550" class="streamerbug__glitch-icon" width="200" height="600" />
						</g>
					</g>
				</g>
			</svg>
		)
	}

	componentDidMount() {
		this.start()
	}

	// Only used in demo for restarting animation. You can delete if you want
	restart() {
		// this.tl.reverse()
		this.tl.play()
		// Only used to demonstrate animate out
		gsap.delayedCall(3, () => {
			this.animateOut()
		})
	}

	start() {
		const { bgRef, streamernameRef, highlightRef, glitchRef } = this
		const highlightWidth = parseInt(getComputedStyle(highlightRef).getPropertyValue('width'))
		this.tl = gsap.timeline()
		this.tl.fromTo(bgRef, { scaleX: 0, scaleY: 0 }, { scaleX: 0.25, scaleY: 1, duration: 0.3, ease: 'none' })
		this.tl.to(bgRef, { duration: 0.2, scaleX: 1 }, '-=.05')
		this.tl.from(glitchRef, { duration: 0.35, y: 30, ease: 'expo.out' }, '-=.2')
		this.tl.from(streamernameRef, { duration: 0.35, y: 30, ease: 'expo.out' }, '-=.1')
		this.tl.fromTo(highlightRef, { x: -highlightWidth - 2 }, { duration: 0.6, x: highlightWidth + 2, ease: 'sine.inOut' }, '-=.35')
		this.tl.play()

		// Only used to demonstrate animate out
		gsap.delayedCall(3, () => {
			this.animateOut()
		})

		// Original animation without timeline
		// -----------------------------------------
		// gsap.fromTo(bgRef, { scaleX: 0, scaleY: 0 }, { scaleX: 0.25, scaleY: 1, duration: 0.3, ease: 'none' })
		// gsap.to(bgRef, { delay: 0.3, duration: 0.2, scaleX: 1 })
		// gsap.from(glitchRef, { delay: 0.2, duration: 0.3, y: 30, ease: 'expo.out' })
		// gsap.from(streamernameRef, { delay: 0.3, duration: 0.3, y: 30, ease: 'expo.out' })
		// gsap.fromTo(highlightRef, { x: -highlightWidth }, { delay: 0.2, duration: 0.6, x: highlightWidth, ease: 'sine.inOut' })
	}
	animateOut() {
		this.tl.reverse()
	}
	render() {
		const { name } = this.props
		const { streamerBugRef, bgRef, streamernameRef, highlightRef } = this

		return (
			<div className="streamerbug" ref={(el) => (this.streamerBugRef = el)}>
				<div className="streamerbug__container">
					<div className="streamerbug__bg" ref={(el) => (this.bgRef = el)} />
					{this.glitch}
					<div className="streamerbug__streamername" ref={(el) => (this.streamernameRef = el)}>
						/{name}
					</div>
					<div className="streamerbug__highlight" ref={(el) => (this.highlightRef = el)} />
				</div>
			</div>
		)
	}
}

export default TwitchStreamerBug
