import { h, render, Component, createRef } from 'preact'
import Ad from '../Ad'

class Control extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount = () => {
		window.hidePreloader()
		this.startAnimation()
	}

	startAnimation = () => {
		// const { brandlogo } = this.adRef

		// brandlogo.start()

		gsap.set('ad__cta', { y: '-=20' })

		gsap.to('.ad__logo', { delay: 1, duration: 0.5, x: '-=60', ease: 'expo.out' })
		gsap.to('.ad__cta', { delay: 1, duration: 0.5, y: '+=20', opacity: 1, ease: 'expo.out' })
	}

	handleClick = () => {
		Network.exit(window.clickTag)
	}
	// handleRollOver = () => {
	// 	this.adRef.brandlogo.over()
	// }
	// handleRollOut = () => {
	// 	this.adRef.brandlogo.out()
	// }

	render() {
		return (
			<div
				id={`control-${adParams.adWidth}x${adParams.adHeight}`}
				style={{
					width: `${adParams.adWidth}px`,
					height: `${adParams.adHeight}px`,
				}}
				onClick={this.handleClick}
				onMouseOver={this.handleRollOver}
				onMouseLeave={this.handleRollOut}
			>
				<Ad ref={(el) => (this.adRef = el)} />
			</div>
		)
	}
}
export default Control
