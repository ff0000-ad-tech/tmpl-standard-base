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
		// Destructure out all the elements from the reference to the Ad component
		const { slideshow, copyblock, cta, logo } = this.adRef

		slideshow.start()
		copyblock.start()

		gsap.set(cta, { y: '-=20' })

		const del = 6
		gsap.to(logo, { delay: del, duration: 1, x: '-=40' })
		gsap.to(cta, { delay: del, duration: 1, y: '+=20', opacity: 1 })
	}

	handleClick = () => {
		// Network.exit(window.clickTag)
	}
	handleRollOver = () => {
		this.adRef.slideshow.over()
	}
	handleRollOut = () => {
		this.adRef.slideshow.out()
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
				<Ad ref={el => this.adRef = el} />
			</div>
		)
	}
}
export default Control
