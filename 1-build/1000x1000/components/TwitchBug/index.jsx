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
					d="M1140,290V120l-50-50h-50V0H937.21l-.49,70H790l-30,30V70H690V0H470V70H105V0H0V240l50,50H190V260l30,30H590V260l30,30H760V260l30,30M170,170H100v20h70v80H60L20,230V20h80V90h70ZM470,270H230l-40-40V90h80V190h20V90h80V190h20V90h80Zm100,0H490V90h80Zm0-200H490V20h80ZM740,170H670v20h70v80H630l-40-40V20h80V90h70Zm180,0H840v20h80v80H800l-40-40V130l40-40H920Zm200,100h-80V170h-20V270H940V20h80V90h60l40,40Z"
				/>
			</svg>
		)
	}
	componentDidMount() {
		gsap.set('.twitchbug', { opacity: 0 })
		gsap.set('.twitchbug__triangle-topright', { transformOrigin: '100% 0' })
		gsap.set('.twitchbug__triangle-topleft', { transformOrigin: '0 0' })
		gsap.set('.outline', { opacity: 0 })
		gsap.set('.twitchbug__bar-topleft', { opacity: 0 })
		gsap.set('.twitchbug__bar-topright', { opacity: 0 })
	}

	start() {
		const { scale } = this.props
		console.warn('STARTED')
		const dur = 0.8
		const e = 'expo.out'
		let delay = 0

		// Show the component
		gsap.set('.twitchbug', { opacity: 1 })
		// Set initial scale
		if (scale) {
			gsap.set('.twitchbug', { scale: scale })
		}
		gsap.to('.twitchbug__inner', { duration: 0.2, scale: '-=.2' })
		// Bounce Scale down
		gsap.to('.twitchbug__inner', { duration: 0.2, scale: '-=.1' })
		delay += 0.2

		// Bring in logo outline
		gsap.set('.twitchbug__bar-topleft', { delay: delay, opacity: 1 })
		gsap.set('.twitchbug__bar-topright', { delay: delay, opacity: 1 })
		gsap.set('.outline', { delay: delay, opacity: 1 })

		// Bounce Scale up
		gsap.to('.twitchbug__inner', { delay: delay, duration: 0.2, scale: '+=.05' })
		delay += 0.2

		// Jump Scale up
		gsap.to('.twitchbug__inner', { delay: delay, duration: 0.2, scale: '+=.1' })
		delay += 0
		// Start Extrusion
		gsap.from('.twitchbug__left', { delay: delay, duration: dur, x: '-=40', y: '-=40', ease: e })
		gsap.from('.twitchbug__middle', { delay: delay, duration: dur, y: '-=40', ease: e })
		gsap.from('.twitchbug__right', { delay: delay, duration: dur, x: '+=40', y: '-=40', ease: e })
		gsap.from('.twitchbug__triangle-topleft', { delay: delay + 0.1, duration: dur, scaleX: 0, ease: e })
		gsap.from('.twitchbug__triangle-topright', { delay: delay + 0.1, duration: dur, scaleX: 0, ease: e })
		gsap.to('.twitchbug__bar-topleft', { delay: delay + 0.1, duration: dur, scaleX: 0.6, ease: e })
		gsap.to('.twitchbug__bar-topright', { delay: delay + 0.1, duration: dur, scaleX: 0.6, ease: e })
		delay += 0.2

		// Continuous Scale up
		gsap.to('.twitchbug__inner', { delay: delay, duration: 0.5, scale: 1 })
	}
	render() {
		const { debug } = this.props
		return (
			<div className="twitchbug">
				<div className="twitchbug__inner" style={{ backgroundColor: debug ? 'green' : null }}>
					<div className="twitchbug__extrusion-container">
						<img className="twitchbug__left" src={ImageManager.get('LeftExt').src} />
						<img className="twitchbug__middle" src={ImageManager.get('MiddleExt').src} />
						<img className="twitchbug__right" src={ImageManager.get('RightExt').src} />
					</div>
					{this.outline}
					<div className="twitchbug__triangle-topleft" />
					<div className="twitchbug__triangle-topright" />
					<div className="twitchbug__bar-topleft" />
					<div className="twitchbug__bar-topright" />
				</div>
			</div>
		)
	}
}

export default TwitchBug
