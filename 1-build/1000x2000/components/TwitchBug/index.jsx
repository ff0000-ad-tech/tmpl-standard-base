import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

import './styles.scss'
// import '@size/images/LeftExt.svg'
// import '@size/images/MiddleExt.svg'
// import '@size/images/RightExt.svg'

class TwitchBug extends Component {
	constructor(props) {
		super(props)

		// Set classes if a color is passes in
		this.color = this.props.color
		this.outlineColor = this.color ? `twitchbug__outline--${this.color}` : ''
		this.triangleColor = this.color ? `twitchbug__triangle--${this.color}` : ''
		this.extrusionColor = this.color ? `twitchbug__extrusion--${this.color}` : ''
		this.barColor = this.color ? `twitchbug__bar--${this.color}` : ''
		this.scale = this.props.scale || 1

		this.leftExtrusion = (
			<svg viewBox="0 0 1140 150.1" class={`twitchbug__extrusion ${this.extrusionColor}`} ref={(el) => (this.leftRef = el)}>
				<polygon id="Left_Extrusion" points="498,0.1 0,0.1 0,10.1 140,150.1 280,150.1 280,110.1 320,150.1 498,150.1 " />
			</svg>
		)
		this.middleExtrusion = (
			<svg viewBox="0 0 1140 150.1" class={`twitchbug__extrusion ${this.extrusionColor}`} ref={(el) => (this.middleRef = el)}>
				<polygon
					id="Middle_Extrusion"
					points="1053,0.1 398,0.1 398,150.1 590,150.1 590,110.1 630,150.1 760,150.1 760,110.1 800,150.1
			1050,150.1 1053,147.1 "
				/>
			</svg>
		)
		this.rightExtrusion = (
			<svg viewBox="0 0 1140 150.1" class={`twitchbug__extrusion ${this.extrusionColor}`} ref={(el) => (this.rightRef = el)}>
				<polygon points="963,29.1 963,150.1 1052,150.1 1140,60.1 1140,28.2 " />
			</svg>
		)
		this.outline = (
			<svg viewBox="0 0 1140 290">
				<polygon
					class="twitchbug__logofill"
					points="170 170.01 100 170.01 100 190 170 190 170 270.01 60 270.01 20 230.01 20 20 100 20 100 90 170 90 170 170.01"
				/>
				<polygon
					class="twitchbug__logofill"
					points="470 270.01 230 270.01 190 230.01 190 90 270 90 270 190 290 190 290 90 370 90 370 190 390 190 390 90 470 90 470 270.01"
				/>
				<rect class="twitchbug__logofill" x="490" y="90" width="80" height="180" />
				<rect class="twitchbug__logofill" x="490" y="20" width="80" height="50" />
				<polygon
					class="twitchbug__logofill"
					points="740 170.01 670 170.01 670 190 740 190 740 270.01 630 270.01 590 230.01 590 20 670 20 670 90 740 90 740 170.01"
				/>
				<polygon
					class="twitchbug__logofill"
					points="920 170.01 840 170.01 840 190 920 190 920 270.01 800 270.01 760 230.01 760 130.01 800 90 920 90 920 170.01"
				/>
				<polygon
					class="twitchbug__logofill"
					points="1120 270.01 1040 270.01 1040 170.01 1020 170.01 1020 270.01 940 270.01 940 20 1020 20 1020 90 1080 90 1120 130.01 1120 270.01"
				/>
				<path
					className={`twitchbug__outline ${this.outlineColor}`}
					ref={(el) => (this.outlineRef = el)}
					d="M1140,290V120l-50-50h-50V0H937.21l-.49,70H790l-30,30V70H690V0H470V70H105V0H0V240l50,50H190V260l30,30H590V260l30,30H760V260l30,30M170,170H100v20h70v80H60L20,230V20h80V90h70ZM470,270H230l-40-40V90h80V190h20V90h80V190h20V90h80Zm100,0H490V90h80Zm0-200H490V20h80ZM740,170H670v20h70v80H630l-40-40V20h80V90h70Zm180,0H840v20h80v80H800l-40-40V130l40-40H920Zm200,100h-80V170h-20V270H940V20h80V90h60l40,40Z"
				/>
			</svg>
		)
	}
	componentDidMount() {
		const { twitchbugRef, triangletoprightRef, triangletopleftRef, outlineRef, bartopleftRef, bartoprightRef } = this
		gsap.set(twitchbugRef, { opacity: 0 })
		gsap.set(triangletoprightRef, { transformOrigin: '100% 0' })
		gsap.set(triangletopleftRef, { transformOrigin: '0 0' })
		gsap.set(outlineRef, { opacity: 0 })
		gsap.set(bartopleftRef, { opacity: 0 })
		gsap.set(bartoprightRef, { opacity: 0 })
		this.start()
	}

	// Only used in demo for restarting animation. You can delete if you want
	restart() {
		console.warn('RESTART')
		const { twitchbugRef, triangletoprightRef, triangletopleftRef, outlineRef, bartopleftRef, bartoprightRef } = this
		gsap.set(twitchbugRef, { opacity: 0 })
		gsap.set(triangletoprightRef, { transformOrigin: '100% 0' })
		gsap.set(triangletopleftRef, { transformOrigin: '0 0' })
		gsap.set(outlineRef, { opacity: 0 })
		gsap.set(bartopleftRef, { opacity: 0, scaleX: 1 })
		gsap.set(bartoprightRef, { opacity: 0, scaleX: 1 })
		this.start()
	}

	start() {
		const {
			twitchbugRef,
			triangletoprightRef,
			triangletopleftRef,
			outlineRef,
			bartopleftRef,
			bartoprightRef,
			innerRef,
			leftRef,
			middleRef,
			rightRef,
			scale,
		} = this

		//////////////////////////////////////////////////
		// Below is only used to reset stuff for restart//
		// Bit can be deleted in production 			//
		//////////////////////////////////////////////////
		gsap.set(twitchbugRef, { opacity: 0 })
		gsap.set(triangletoprightRef, { transformOrigin: '100% 0' })
		gsap.set(triangletopleftRef, { transformOrigin: '0 0' })
		gsap.set(outlineRef, { opacity: 0 })
		gsap.set(bartopleftRef, { opacity: 0, scaleX: 1 })
		gsap.set(bartoprightRef, { opacity: 0, scaleX: 1 })
		//////////////////////////////////////////////////

		//Extrusion duration
		const dur = 0.8
		const e = 'expo.out'
		let delay = 0

		// Show the component
		gsap.set(twitchbugRef, { opacity: 1 })
		// Set initial scale
		if (scale) {
			gsap.set(innerRef, { scale: scale })
			// Since transform scale does not affect doc flow (original size and position are still in effect)
			// we need to resize the parent to the new dimensions
			twitchbugRef.style.width = 300 * scale + 'px'
			twitchbugRef.style.height = 100 * scale + 'px'
		}

		// Bounce Scale down
		gsap.to(innerRef, { duration: 0.2, scale: `-=${0.2 * scale}`, ease: 'expo.in' })
		delay += 0.2

		// Bring in logo outline
		gsap.set(bartopleftRef, { delay: delay, opacity: 1 })
		gsap.set(bartoprightRef, { delay: delay, opacity: 1 })
		gsap.set(outlineRef, { delay: delay, opacity: 1 })

		// Bounce Scale up
		gsap.to(innerRef, { delay: delay, duration: 0.15, scale: `+=${0.08 * scale}` })

		// Start Extrusion
		gsap.from(leftRef, { delay: delay, duration: dur, x: '-=40', y: '-=40', ease: e })
		gsap.from(middleRef, { delay: delay, duration: dur, y: '-=40', ease: e })
		gsap.from(rightRef, { delay: delay, duration: dur, x: '+=40', y: '-=40', ease: e })
		gsap.from(triangletopleftRef, { delay: delay + 0.1, duration: dur, scaleX: 0, ease: e })
		gsap.from(triangletoprightRef, { delay: delay + 0.1, duration: dur, scaleX: 0, ease: e })
		gsap.to(bartopleftRef, { delay: delay + 0.1, duration: dur, scaleX: 0.6, ease: e })
		gsap.to(bartoprightRef, { delay: delay + 0.1, duration: dur, scaleX: 0.6, ease: e })
		delay += 0.2
		// Jump Scale up
		gsap.set(innerRef, { delay: delay, scale: `+=${0.2 * scale}` })
		// // Continuous Scale up
		gsap.to(innerRef, { delay: delay + 0.02, duration: 0.3, scale: `+=${0.1 * scale}`, ease: 'sine.out' })
	}
	render() {
		const { outline, triangleColor, barColor, leftExtrusion, middleExtrusion, rightExtrusion } = this
		const { debug } = this.props
		return (
			<div style={{ background: debug ? 'green' : null }} className="twitchbug" ref={(el) => (this.twitchbugRef = el)}>
				<div style={{ background: debug ? 'red' : null }} className="twitchbug__inner" ref={(el) => (this.innerRef = el)}>
					<div className="twitchbug__extrusion-container">
						{leftExtrusion}
						{middleExtrusion}
						{rightExtrusion}
					</div>
					{outline}
					<div className={`twitchbug__triangle-topleft ${triangleColor}`} ref={(el) => (this.triangletopleftRef = el)} />
					<div className={`twitchbug__triangle-topright ${triangleColor}`} ref={(el) => (this.triangletoprightRef = el)} />
					<div className={`twitchbug__bar-topleft ${barColor}`} ref={(el) => (this.bartopleftRef = el)} />
					<div className={`twitchbug__bar-topright ${barColor}`} ref={(el) => (this.bartoprightRef = el)} />
				</div>
			</div>
		)
	}
}

export default TwitchBug
