import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

import './styles.scss'
import '@size/images/refstart.jpg'
import '@size/images/refend.jpg'
class TwitchGlitch extends Component {
	constructor(props) {
		super(props)

		// Initial state of body and inner are set to no css animation class
		this.state = {
			bodyIn: null,
			innerIn: null,
		}

		// Set classes if a color is passes in
		this.color = this.props.color
		this.bodyColor = this.color ? `twitchglitch__body--${this.color}` : ''
		this.eyeColor = this.color ? `twitchglitch__eye--${this.color}` : ''

		// The glitch SVG
		this.glitch = (
			<svg viewBox="0 0 2005 2542" class="twitchglitch__glitch" ref={(el) => (this.glitchIconRef = el)}>
				<g>
					<polygon class="twitchglitch__glitch-bg" points="1805,1300 1405,1700 1005,1700 655,2050 655,1700 205,1700 205,200 1805,200 	" />
					<g>
						<g id="Layer_1-2">
							<path
								class="twitchglitch__glitch-icon"
								d="M0,1905h451v637l639-637h439l476-505V0H0 M1805,1300l-400,400h-400l-350,350v-350H205V200h1600V1300z"
							/>
							<rect x="1305" y="550" class="twitchglitch__glitch-icon-eye" ref={(el) => (this.leftEyeRef = el)} width="200" height="600" />
							<rect x="755" y="550" class="twitchglitch__glitch-icon-eye" ref={(el) => (this.rightEyeRef = el)} width="200" height="600" />
						</g>
					</g>
				</g>
			</svg>
		)
	}
	componentDidMount() {
		const { glitchRef, bodyInnerRef, leftEyeRef, rightEyeRef, leftRef, midRef, bottomRef, innerRef } = this
		const { scale } = this.props
		// Set initial scale for the inner container that contains the glitch animation
		gsap.set(innerRef, { scale: scale ? scale + 0.25 * scale : 1.25 })

		// Set initial scale for the inner body
		gsap.set(bodyInnerRef, { scale: 0.8 })
		// Hide the eyes
		gsap.set([leftEyeRef, rightEyeRef], { opacity: 0 })
		// If a scale value is passed in then resize the component container to match the scaled size
		if (scale) {
			glitchRef.style.width = 336 * scale + 'px'
			glitchRef.style.height = 392 * scale + 'px'
		}
		// Start the animation
		this.start()
	}

	// Only used in demo for restarting animation. You can delete if you want
	restart() {
		const { innerRef, leftEyeRef, rightEyeRef, bodyInnerRef, bodyRef, bottomRef } = this
		const { scale } = this.props

		// Reset initial values
		gsap.set(innerRef, { scale: scale ? scale + 0.25 * scale : 1.25 })
		gsap.set(bodyInnerRef, { scale: 0.8, top: 81, left: 31 })
		gsap.set([leftEyeRef, rightEyeRef], { opacity: 0 })

		// Reset the css animation classes to nothing to remove any existing animation
		this.setState(
			{
				bodyIn: '',
				innerIn: '',
			},
			() => {
				// For some reason we need to delay calling start
				// so the animation will reset properly
				gsap.delayedCall(0.01, () => {
					this.start()
				})
			}
		)
	}

	start() {
		const { scale } = this.props
		const { bodyInnerRef, innerRef } = this

		// Set our css animation classes so they animate
		this.setState({ bodyIn: 'twitchglitch__body-in', innerIn: 'twitchglitch__body-inner-in' })
		// Scale the inner container to 100%
		gsap.to(innerRef, { scale: scale ? scale * 1 : 1, duration: 0.25, ease: 'none' })
		// At the same time and duration scale the inner body up to 100%
		gsap.fromTo(bodyInnerRef, { scale: 0.8 }, { scale: 1, duration: 0.25, delay: 0.1, ease: 'none' })
		// Move the inner body up and to the right
		gsap.to(bodyInnerRef, {
			delay: 0.23,
			top: 35,
			left: 77,
			duration: 0.3,
		})
		// Start the eye animation
		gsap.delayedCall(0.35, () => {
			this.animateEyes()
		})
	}

	animateEyes() {
		const { leftEyeRef, rightEyeRef } = this

		// Animate open
		gsap.set([leftEyeRef, rightEyeRef], { opacity: 1 })
		gsap.from([leftEyeRef, rightEyeRef], { duration: 0.07, scaleY: 0, ease: 'sine.out' })
		// Animate closed
		gsap.to([leftEyeRef, rightEyeRef], { delay: 0.12, duration: 0.05, scaleY: 0, ease: 'sine.out' })
		// Animate open
		gsap.to([leftEyeRef, rightEyeRef], { delay: 0.17, duration: 0.05, scaleY: 1, ease: 'sine.out' })
		gsap.to([leftEyeRef, rightEyeRef], { delay: 0.22, duration: 0.05, scaleY: 0.2, ease: 'sine.out' })
		gsap.to([leftEyeRef, rightEyeRef], { delay: 0.27, duration: 0.1, scaleY: 1, ease: 'sine.out' })
	}
	render() {
		const { debug } = this.props
		const { bodyColor, eyeColor } = this
		const { bodyIn, innerIn } = this.state
		return (
			<div className="twitchglitch" style={{ background: debug ? 'green' : null }} ref={(el) => (this.glitchRef = el)}>
				<div className="twitchglitch__inner" style={{ background: debug ? 'red' : null }} ref={(el) => (this.innerRef = el)}>
					<div className={`twitchglitch__body ${bodyColor} ${bodyIn}`} ref={(el) => (this.bodyRef = el)}></div>
					<div className={`twitchglitch__body-inner ${innerIn}`} ref={(el) => (this.bodyInnerRef = el)}>
						<div className={`twitchglitch__eye ${eyeColor} twitchglitch__eye-left`} ref={(el) => (this.leftEyeRef = el)} />
						<div className={`twitchglitch__eye ${eyeColor} twitchglitch__eye-right`} ref={(el) => (this.rightEyeRef = el)} />
					</div>
				</div>
			</div>
		)
	}
}

export default TwitchGlitch
