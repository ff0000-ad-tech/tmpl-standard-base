import { h, render, Component, createRef } from 'preact'
import Ad from '../Ad'

class Control extends Component {
	constructor(props) {
		super(props)
		this.adRef = createRef()
		this.slideshowRef = createRef()
		this.ctaRef = createRef()
	}

	componentDidMount = () => {
		window.removePreloader()
		this.startAnimation()
	}

	startAnimation = () => {
		// Reference to the Ad component ref
		const ad = this.adRef.current
		// Get reference to the slideshow ref from the ad
		this.slideshowRef = ad.slideshow.current
		this.copyblockRef = ad.copyblock.current
		this.ctaRef = ad.cta.current
		this.logoRef = ad.logo.current

		this.slideshowRef.start()
		this.copyblockRef.start()

		gsap.set(this.ctaRef, { y: '-=20' })

		const del = 6
		gsap.to(this.logoRef, { delay: del, duration: 1, x: '-=40' })
		gsap.to(this.ctaRef, { delay: del, duration: 1, y: '+=20', opacity: 1 })
		// Get reference to the classbox ref from the ad
		// const classBox = ad.cbref.current

		// Animate the Classbox externally.
		// We need to use .base here
		// gsap.to(classBox.base, { duration: 5, y: 150 })

		// Run the internal Classbox start method
		// .base is not needed when calling a method
		// classBox.start()
		// gsap.to('#imgRefID', { duration: 2, css: { x: 100 } })
	}

	handleClick = () => {
		// Network.exit(window.clickTag)
	}
	handleRollOver = () => {
		this.slideshowRef.over()
	}
	handleRollOut = () => {
		this.slideshowRef.out()
	}

	render() {
		return (
			<div
				id={`control-${adParams.adWidth}x${adParams.adHeight}`}
				style={{
					width: `${adParams.adWidth}px`,
					height: `${adParams.adHeight}px`
				}}
				onClick={this.handleClick}
				onMouseOver={this.handleRollOver}
				onMouseLeave={this.handleRollOut}
			>
				<Ad ref={this.adRef} />
			</div>
		)
	}
}
export default Control
