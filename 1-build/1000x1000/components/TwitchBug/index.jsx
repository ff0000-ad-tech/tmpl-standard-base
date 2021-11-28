import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

import './styles.scss'
import '@size/images/LeftExt.svg'
import '@size/images/MiddleExt.svg'
import '@size/images/RightExt.svg'

class TwitchBug extends Component {
	constructor(props) {
		super(props)

		this.outline = (
			<svg viewBox="0 0 1140 290">
				<polygon
					class="st0"
					points="170 170.01 100 170.01 100 190 170 190 170 270.01 60 270.01 20 230.01 20 20 100 20 100 90 170 90 170 170.01"
				/>
				<polygon
					class="st0"
					points="470 270.01 230 270.01 190 230.01 190 90 270 90 270 190 290 190 290 90 370 90 370 190 390 190 390 90 470 90 470 270.01"
				/>
				<rect class="st0" x="490" y="90" width="80" height="180" />
				<rect class="st0" x="490" y="20" width="80" height="50" />
				<polygon
					class="st0"
					points="740 170.01 670 170.01 670 190 740 190 740 270.01 630 270.01 590 230.01 590 20 670 20 670 90 740 90 740 170.01"
				/>
				<polygon
					class="st0"
					points="920 170.01 840 170.01 840 190 920 190 920 270.01 800 270.01 760 230.01 760 130.01 800 90 920 90 920 170.01"
				/>
				<polygon
					class="st0"
					points="1120 270.01 1040 270.01 1040 170.01 1020 170.01 1020 270.01 940 270.01 940 20 1020 20 1020 90 1080 90 1120 130.01 1120 270.01"
				/>
				<path
					class="outline"
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
		// this.start()
	}

	// Only used in demo for restarting animation. You can delete if you want
	restart() {
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
		} = this
		const { scale } = this.props

		//////////////////////////////////////////////////
		// Below is only used to reset stuff for restart//
		// Bit can be deleted in production 			//
		//////////////////////////////////////////////////
		gsap.set(twitchbugRef, { opacity: 0 })
		gsap.set(triangletoprightRef, { transformOrigin: '100% 0' })
		gsap.set(triangletopleftRef, { transformOrigin: '0 0' })
		gsap.set(outlineRef, { opacity: 0 })
		gsap.set(bartopleftRef, { opacity: 0 })
		gsap.set(bartoprightRef, { opacity: 0 })
		//////////////////////////////////////////////////

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

			// Since transform scale does not affect doc flow (original size and position are still in effect)
			// we need to reposition the scaled element to remain centered
			// We need different calculations based on if scale is > or < 1
			// if (scale < 1) {
			// 	const newLeft = (300 - 300 * scale) / 2
			// 	const newTop = (100 - 100 * scale) / 2
			// 	innerRef.style.left = `-${newLeft}px`
			// 	innerRef.style.top = `-${newTop}px`
			// }
			// if (scale > 1) {
			// 	const newLeft = (300 * scale - 300) / 2
			// 	const newTop = (100 * scale - 100) / 2
			// 	innerRef.style.left = `${newLeft}px`
			// 	innerRef.style.top = `${newTop}px`
			// }
		}
		gsap.to(innerRef, { duration: 0.2, scale: `-=${0.2 * scale}` })
		// Bounce Scale down
		gsap.to(innerRef, { duration: 0.2, scale: `-=${0.1 * scale}` })
		delay += 0.2

		// Bring in logo outline
		gsap.set(bartopleftRef, { delay: delay, opacity: 1 })
		gsap.set(bartoprightRef, { delay: delay, opacity: 1 })
		gsap.set(outlineRef, { delay: delay, opacity: 1 })

		// Bounce Scale up
		gsap.to(innerRef, { delay: delay, duration: 0.2, scale: `+=${0.05 * scale}` })
		delay += 0.2

		// Jump Scale up
		gsap.to(innerRef, { delay: delay, duration: 0.2, scale: `-=${0.2 * scale}` })
		// Continuous Scale up
		gsap.to(innerRef, { delay: delay, duration: 0.3, scale: scale })
		delay += 0
		// Start Extrusion
		gsap.from(leftRef, { delay: delay, duration: dur, x: '-=40', y: '-=40', ease: e })
		gsap.from(middleRef, { delay: delay, duration: dur, y: '-=40', ease: e })
		gsap.from(rightRef, { delay: delay, duration: dur, x: '+=40', y: '-=40', ease: e })
		gsap.from(triangletopleftRef, { delay: delay + 0.1, duration: dur, scaleX: 0, ease: e })
		gsap.from(triangletoprightRef, { delay: delay + 0.1, duration: dur, scaleX: 0, ease: e })
		gsap.to(bartopleftRef, { delay: delay + 0.1, duration: dur, scaleX: 0.6, ease: e })
		gsap.to(bartoprightRef, { delay: delay + 0.1, duration: dur, scaleX: 0.6, ease: e })
		delay += 0.2
	}
	render() {
		const { outline } = this
		const { debug } = this.props
		return (
			<div style={{ background: debug ? 'green' : null }} className="twitchbug" ref={(el) => (this.twitchbugRef = el)}>
				<div style={{ background: debug ? 'red' : null }} className="twitchbug__inner" ref={(el) => (this.innerRef = el)}>
					<div className="twitchbug__extrusion-container">
						<img className="twitchbug__left" src={ImageManager.get('LeftExt').src} ref={(el) => (this.leftRef = el)} />
						<img className="twitchbug__middle" src={ImageManager.get('MiddleExt').src} ref={(el) => (this.middleRef = el)} />
						<img className="twitchbug__right" src={ImageManager.get('RightExt').src} ref={(el) => (this.rightRef = el)} />
					</div>
					{outline}
					<div className="twitchbug__triangle-topleft" ref={(el) => (this.triangletopleftRef = el)} />
					<div className="twitchbug__triangle-topright" ref={(el) => (this.triangletoprightRef = el)} />
					<div className="twitchbug__bar-topleft" ref={(el) => (this.bartopleftRef = el)} />
					<div className="twitchbug__bar-topright" ref={(el) => (this.bartoprightRef = el)} />
				</div>
			</div>
		)
	}
}

export default TwitchBug
