import { h, render, Component, createRef } from 'preact'
import Ad from '../Ad'

class Control extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount = () => {
		window.hidePreloader()
	}

	handleClick = () => {
		Network.exit(window.clickTag)
	}
	handleRollOver = () => {
		// Do rollover animation
	}
	handleRollOut = () => {
		// Do rollout animation
	}

	render() {
		return <Ad ref={(el) => (this.adRef = el)} />
	}
}
export default Control
