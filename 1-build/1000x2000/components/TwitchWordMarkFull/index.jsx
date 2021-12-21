import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

import './styles.scss'

class TwitchWordMarkFull extends Component {
	constructor(props) {
		super(props)
		const { gradColors } = this.props

		// Convert hex colors to RGBA
		const color1 = this.convertHexToRGB(gradColors[0])
		const color2 = this.convertHexToRGB(gradColors[1])
		const color3 = gradColors[2] ? this.convertHexToRGB(gradColors[2]) : gradColors[1]

		// Setup start and end gradients
		this.twoColorGradStart = `linear-gradient(rgba(${color1},0) 100%, rgba(${color1},0) 100%, rgba(${color2},0) 100%)`
		this.threeColorGradStart = `linear-gradient( rgba(${color1},0) 100%,rgba(${color1},1) 100%, rgba(${color2},1) 100%, rgba(${color3},1) 100%)`
		this.twoColorGradEnd = `linear-gradient(rgba(${color1},0) 0%,rgba(${color1},1) 16%, rgba(${color2},1) 100%)`
		this.threeColorGradEnd = `linear-gradient(rgba(${color1},0) 17.8%,rgba(${color1},1) 17.8%, rgba(${color2},1) 70%, rgba(${color3},1) 100%)`
		this.gradStart = gradColors.length > 2 ? this.threeColorGradStart : this.twoColorGradStart
		this.gradEnd = gradColors.length > 2 ? this.threeColorGradEnd : this.twoColorGradEnd

		this.workmark = (
			<svg viewBox="0 0 1140 290" class="twitchwordmarkfull__twitchword" ref={(el) => (this.wordRef = el)}>
				<polygon
					class="twitchwordmarkfull__wm-white"
					points="170,170 100,170 100,190 170,190 170,270 60,270 20,230 20,20 100,20 100,90 170,90 "
				/>
				<polygon
					class="twitchwordmarkfull__wm-white"
					points="470,270 230,270 190,230 190,90 270,90 270,190 290,190 290,90 370,90 370,190 390,190 390,90 470,90 
	"
				/>
				<rect x="490" y="90" class="twitchwordmarkfull__wm-white" width="80" height="180" />
				<rect x="490" y="20" class="twitchwordmarkfull__wm-white" width="80" height="50" />
				<polygon
					class="twitchwordmarkfull__wm-white"
					points="740,170 670,170 670,190 740,190 740,270 630,270 590,230 590,20 670,20 670,90 740,90 "
				/>
				<polygon
					class="twitchwordmarkfull__wm-white"
					points="920,170 840,170 840,190 920,190 920,270 800,270 760,230 760,130 800,90 920,90 "
				/>
				<polygon
					class="twitchwordmarkfull__wm-white"
					points="1120,270 1040,270 1040,170 1020,170 1020,270 940,270 940,20 1020,20 1020,90 1080,90 1120,130 "
				/>
				<path
					style={{ fill: gradColors[0] }}
					d="M1140,290V120l-50-50h-50V0H920.2l-24.5,70H790l-30,30V70h-70V0H470v70H147L120,0H0v240l50,50h140v-30l30,30
	h370v-30l30,30h140v-30l30,30 M170,170h-70v20h70v80H60l-40-40V20h80v70h70V170z M470,270H230l-40-40V90h80v100h20V90h80v100h20V90
	h80V270z M570,270h-80V90h80V270z M570,70h-80V20h80V70z M740,170h-70v20h70v80H630l-40-40V20h80v70h70V170z M920,170h-80v20h80v80
	H800l-40-40V130l40-40h120V170z M1120,270h-80V170h-20v100h-80V20h80v70h60l40,40V270z"
				/>
			</svg>
		)
	}

	convertHexToRGB(hexCode) {
		let hex = hexCode.replace('#', '')

		if (hex.length === 3) {
			hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
		}

		const r = parseInt(hex.substring(0, 2), 16)
		const g = parseInt(hex.substring(2, 4), 16)
		const b = parseInt(hex.substring(4, 6), 16)

		return `${r},${g},${b}`
	}
	componentDidMount() {
		const { scale } = this.props
		const { gradStart, gradRef, innerRef, wordmarkfullRef } = this

		// Hide the component
		gsap.set(wordmarkfullRef, { opacity: 0 })

		if (scale) {
			gsap.set(innerRef, { scale: scale })
			wordmarkfullRef.style.width = 300 * scale + 'px'
			wordmarkfullRef.style.height = 165 * scale + 'px'
		}
		this.start()
	}

	// Only used in demo for restarting animation. You can delete if you want
	restart() {
		const { gradRef, gradStart, backfillerRef } = this
		// Reset the grad to the start grad
		gradRef.style.background = gradStart
		// Reset backfiller positions
		backfillerRef.style.bottom = '0'
		backfillerRef.style.width = '100px'
		backfillerRef.style.left = '80px'
		this.start()
	}
	start() {
		const { gradHolderRef, wordmarkfullRef, innerRef, wordRef, gradRef, gradEnd, backfillerRef } = this
		// Show the component
		gsap.set(wordmarkfullRef, { opacity: 1 })

		// Animation duration
		const dur = 0.5

		// gsap.set(innerRef, { opacity: 1 })
		// gsap.set(wordRef, { x: 4, y: 89, scale: 0.38 })
		// Animate the gradient
		gsap.to(gradRef, { background: gradEnd, duration: dur + 0.01, ease: 'expo.out' })
		// Animate the wordmark
		gsap.from(wordRef, { duration: dur, x: 4, y: 89, scale: 0.38, ease: 'expo.out' })
		// Animate the backing filler for the wordmark
		gsap.to(backfillerRef, { duration: dur, width: 170, left: 31, bottom: 89, ease: 'expo.out' })
	}

	render() {
		const { debug, gradColors } = this.props
		const { gradStart } = this

		return (
			<div className="twitchwordmarkfull" style={{ backgroundColor: debug ? 'green' : null }} ref={(el) => (this.wordmarkfullRef = el)}>
				<div className="twitchwordmarkfull__inner" style={{ backgroundColor: debug ? 'red' : null }} ref={(el) => (this.innerRef = el)}>
					<div className="twitchwordmarkfull__gradholder" ref={(el) => (this.gradHolderRef = el)}>
						<div className="twitchwordmarkfull__grad" style={{ background: gradStart }} ref={(el) => (this.gradRef = el)}>
							<div
								className="twitchwordmarkfull__backfiller"
								style={{ background: gradColors[0] }}
								ref={(el) => (this.backfillerRef = el)}
							/>
							<div className="twitchwordmarkfull__beam twitchwordmarkfull__beam-left" />
							<div className="twitchwordmarkfull__beam twitchwordmarkfull__beam-mid" />
							<div className="twitchwordmarkfull__beam twitchwordmarkfull__beam-right" />
						</div>
					</div>
					{this.workmark}
				</div>
			</div>
		)
	}
}

export default TwitchWordMarkFull

TwitchWordMarkFull.defaultProps = {
	gradColors: ['#9146ff', '#00fafa'],
}
