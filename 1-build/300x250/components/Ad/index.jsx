import { h, render, Component } from 'preact'
import Build from '../Build'

class Ad extends Component {
	componentDidMount = () => {
		window.removePreloader()
	}
	handleClick = () => {
		Network.exit(window.clickTag)
	}

	render() {
		const bid = `build-${adParams.adWidth}x${adParams.adHeight}`
		return (
			<div
				id={bid}
				style={{
					width: `${adParams.adWidth}px`,
					height: `${adParams.adHeight}px`
				}}
				onClick={this.handleClick}
			>
				<Build />
			</div>
		)
	}
}
export default Ad
