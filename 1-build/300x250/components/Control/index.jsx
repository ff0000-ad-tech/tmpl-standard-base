import { h, render, Component } from 'preact'
import Ad from '../Ad'

class Control extends Component {
	componentDidMount = () => {
		window.removePreloader()
	}
	handleClick = () => {
		Network.exit(window.clickTag)
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
				<Ad />
			</div>
		)
	}
}
export default Control
