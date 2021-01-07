import { h, render, Component, createRef } from 'preact'
import Ad from '../Ad'

class Control extends Component {
	constructor(props) {
		super(props)
		this.adRef = createRef()
	}

	componentDidMount = () => {
		window.removePreloader()
		this.startAnimation()
	}

	startAnimation = () => {
		// Reference to the Ad component ref
		const ad = this.adRef.current

		// Get reference to the classbox ref from the ad
		const classBox = ad.cbref.current

		// Animate the Classbox externally.
		// We need to use .base here
		gsap.to(classBox.base, { duration: 5, y: 150 })

		// Run the internal Classbox start method
		// .base is not needed when calling a method
		classBox.start()
	}

	handleClick = () => {
		// Network.exit(window.clickTag)
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
			>
				<Ad ref={this.adRef} />
			</div>
		)
	}
}
export default Control
