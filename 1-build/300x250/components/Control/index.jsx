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
