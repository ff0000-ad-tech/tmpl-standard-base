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
		const { introTeam1, introTeam2 } = this.adRef
		introTeam1.animateIn()

		gsap.to(introTeam1.base, { duration: 0.5, delay: 3, x: adParams.adWidth })
		gsap.delayedCall(3, () => {
			introTeam2.animateIn()
		})
		gsap.from('.footer', { delay: 5, duration: 0.5, y: adParams.adHeight, ease: 'expo.out' })
		gsap.from('.endframeteam--left', { delay: 5, duration: 0.5, x: '-=180', y: '-=80', ease: 'expo.out' })
		gsap.from('.endframeteam--right', { delay: 5, duration: 0.5, x: '+=180', y: '-=80', ease: 'expo.out' })
		gsap.from('.ad__bubbleimage', { delay: 5.5, duration: 0.3, scale: 0, ease: 'expo.out' })
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
