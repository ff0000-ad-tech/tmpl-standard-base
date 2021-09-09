import { h, render, Component, createRef } from 'preact'
import Ad from '../Ad'

class Control extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount = () => {
		setTimeout(() => {
			window.hidePreloader()
		}, 100)

		this.startAnimation()
	}

	startAnimation = () => {
		const { introTeam1, introTeam2, team1name, team2name, endframelogo1, endframelogo2, header, footer, rip } = this.adRef

		if (adData.hasHeadline) {
			gsap.set(endframelogo1.base, { y: 47, x: -adParams.adWidth })
			gsap.set(endframelogo2.base, { y: 47, x: adParams.adWidth })
		} else {
			gsap.set(endframelogo1.base, { y: 29, x: -adParams.adWidth })
			gsap.set(endframelogo2.base, { y: 29, x: adParams.adWidth })
		}

		rip.animateIn()
		gsap.delayedCall(0.3, () => {
			introTeam1.animateIn()
			team1name.animateIn()
		})

		gsap.delayedCall(2.8, () => {
			team1name.animateOut()
		})
		gsap.delayedCall(3.5, () => {
			introTeam2.animateIn()
			team2name.animateIn()
		})

		gsap.delayedCall(6, () => {
			team2name.animateOut()
		})

		gsap.to(endframelogo1.base, {
			delay: 7,
			duration: 0.5,
			x: 5,
			ease: 'expo.out'
		})
		gsap.to(endframelogo2.base, {
			delay: 7,
			duration: 0.5,
			x: adParams.adWidth - endframelogo2.base.getBoundingClientRect().width - 7,
			ease: 'expo.out'
		})

		gsap.from(header.base, {
			delay: 7,
			duration: 0.5,
			y: -header.base.getBoundingClientRect().height - 5,
			ease: 'expo.out'
		})
		gsap.from(footer.base, {
			delay: 7,
			duration: 0.5,
			y: adParams.adHeight + 20,
			ease: 'expo.out'
		})
		gsap.from('.ad__at', {
			delay: 7.3,
			duration: 0.2,
			scale: 0,
			ease: 'expo.out'
		})
	}

	handleClick = () => {
		Network.exit(adData.clickTag)
	}
	handleRollOver = () => {}
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
