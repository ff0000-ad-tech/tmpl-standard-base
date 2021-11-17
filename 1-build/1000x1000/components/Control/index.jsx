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
		// Destructure out component refs from the ad ref so that we can reference them
		// or call methods on them
		const { componentBasic, componentMethods } = this.adRef

		// Call components start() method
		componentMethods.start()
	}

	handleClick = () => {
		//Network.exit(window.clickTag)
	}
	handleRollOver = () => {
		// Call over() on any components you want to animate on ad rollover
		// example: this.adRef.cta.over()
	}
	handleRollOut = () => {
		// Call over() on any components you want to animate on ad rollout
		// example: this.adRef.cta.out()
	}

	render() {
		return (
			<Ad ref={(el) => (this.adRef = el)} onClick={this.handleClick} onMouseOver={this.handleRollOver} onMouseLeave={this.handleRollOut} />
		)
	}
}
export default Control
