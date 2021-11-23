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
		const { brandlogo } = this.adRef
		// brandlogo.start()
		// gsap.set('.ad__cta', { opacity: 1 })
		// gsap.from('.ad__logo', { delay: 1, duration: 0.5, x: -adParams.adWidth, ease: 'expo.out' })
		// gsap.from('.ad__cta', { delay: 1, duration: 0.5, x: adParams.adWidth, ease: 'expo.out' })
	}

	handleClick = () => {
		Network.exit(window.clickTag)
	}
	handleRollOver = () => {
		// this.adRef.brandlogo.over()
	}
	handleRollOut = () => {
		// this.adRef.brandlogo.out()
	}

	render() {
		return (
			<Ad ref={(el) => (this.adRef = el)} onClick={this.handleClick} onMouseOver={this.handleRollOver} onMouseLeave={this.handleRollOut} />
		)
	}
}
export default Control
