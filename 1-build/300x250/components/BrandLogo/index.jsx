import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

import './styles.scss'
import '@size/images/LeftExt.svg'
import '@size/images/MiddleExt.svg'
import '@size/images/RightExt.svg'

class BrandLogo extends Component {
	constructor(props) {
		super(props)

		this.outline = (
			<svg id="Layer_1" viewBox="0 0 1140 290">
				<polygon class="st0" points="170,170 100,170 100,190 170,190 170,270 60,270 20,230 20,20 100,20 100,90 170,90 " />
				<polygon class="st0" points="470,270 230,270 190,230 190,90 270,90 270,190 290,190 290,90 370,90 370,190 390,190 390,90 470,90 " />
				<rect x="490" y="90" class="st0" width="80" height="180" />
				<rect x="490" y="20" class="st0" width="80" height="50" />
				<polygon class="st0" points="740,170 670,170 670,190 740,190 740,270 630,270 590,230 590,20 670,20 670,90 740,90 " />
				<polygon class="st0" points="920,170 840,170 840,190 920,190 920,270 800,270 760,230 760,130 800,90 920,90 " />
				<polygon class="st0" points="1120,270 1040,270 1040,170 1020,170 1020,270 940,270 940,20 1020,20 1020,90 1080,90 1120,130 " />
				<path
					class="outline"
					d="M1140,290V120l-50-50h-50V0H937.2l-0.5,70H790l-30,30V70h-70V0H470v70H103V0H0v240l50,50h140v-30l30,30h370
	v-30l30,30h140v-30l30,30 M170,170h-70v20h70v80H60l-40-40V20h80v70h70V170z M470,270H230l-40-40V90h80v100h20V90h80v100h20V90h80
	V270z M570,270h-80V90h80V270z M570,70h-80V20h80V70z M740,170h-70v20h70v80H630l-40-40V20h80v70h70V170z M920,170h-80v20h80v80H800
	l-40-40V130l40-40h120V170z M1120,270h-80V170h-20v100h-80V20h80v70h60l40,40V270z"
				/>
			</svg>
		)
	}
	componentDidMount() {
		gsap.set('.twitchlogo', { opacity: 0 })
		gsap.set('.twitchlogo__triangle-topright', { transformOrigin: '100% 0' })
		gsap.set('.twitchlogo__triangle-topleft', { transformOrigin: '0 0' })
		gsap.set('.outline', { opacity: 0 })
		gsap.set('.twitchlogo__bar-topleft', { opacity: 0 })
		gsap.set('.twitchlogo__bar-topright', { opacity: 0 })
	}

	start() {
		console.warn('STARTED')
		const dur = 0.8
		const e = 'expo.out'
		let delay = 0

		// Show the component
		gsap.set('.twitchlogo', { opacity: 1 })

		// Bounce Scale down
		gsap.to('.twitchlogo', { duration: 0.2, scale: '-=.1' })
		delay += 0.2

		// Bring in logo outline
		gsap.set('.twitchlogo__bar-topleft', { delay: delay, opacity: 1 })
		gsap.set('.twitchlogo__bar-topright', { delay: delay, opacity: 1 })
		gsap.set('.outline', { delay: delay, opacity: 1 })

		// Bounce Scale up
		gsap.to('.twitchlogo', { delay: delay, duration: 0.2, scale: '+=.05' })
		delay += 0.2

		// Jump Scale up
		gsap.to('.twitchlogo', { delay: delay, duration: 0.2, scale: '+=.1' })
		delay += 0
		// Start Extrusion
		gsap.from('.twitchlogo__left', { delay: delay, duration: dur, x: '-=40', y: '-=40', ease: e })
		gsap.from('.twitchlogo__middle', { delay: delay, duration: dur, y: '-=40', ease: e })
		gsap.from('.twitchlogo__right', { delay: delay, duration: dur, x: '+=40', y: '-=40', ease: e })
		gsap.from('.twitchlogo__triangle-topleft', { delay: delay + 0.1, duration: dur, scaleX: 0, ease: e })
		gsap.from('.twitchlogo__triangle-topright', { delay: delay + 0.1, duration: dur, scaleX: 0, ease: e })
		gsap.to('.twitchlogo__bar-topleft', { delay: delay + 0.1, duration: dur, scaleX: 0.6, ease: e })
		gsap.to('.twitchlogo__bar-topright', { delay: delay + 0.1, duration: dur, scaleX: 0.6, ease: e })
		delay += 0.2

		// Continuous Scale up
		gsap.to('.twitchlogo', { delay: delay, duration: 0.5, scale: '+=.1' })
	}
	render() {
		return (
			<div className="twitchlogo">
				<div className="twitchlogo__extrusion-container">
					<img className="twitchlogo__left" src={ImageManager.get('LeftExt').src} />
					<img className="twitchlogo__middle" src={ImageManager.get('MiddleExt').src} />
					<img className="twitchlogo__right" src={ImageManager.get('RightExt').src} />
				</div>
				{this.outline}
				<div className="twitchlogo__triangle-topleft" />
				<div className="twitchlogo__triangle-topright" />
				<div className="twitchlogo__bar-topleft" />
				<div className="twitchlogo__bar-topright" />
			</div>
		)
	}
}

export default BrandLogo
