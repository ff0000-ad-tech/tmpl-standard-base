import { h, render, Component, createRef } from 'preact'

// Styles
import './styles.scss'

class TwitchAnimatedGrad extends Component {
	constructor(props) {
		super(props)
	}

	restart() {
		this.start()
	}

	start() {
		const { duration } = this.props
		gsap.from('#covergrad', { ease: 'none', duration, opacity: 0 })
	}
	render() {
		const { startClass, endClass } = this.props
		return (
			<div className={`twitchanimatedgrad ${startClass}`}>
				<div id="covergrad" className={`twitchanimatedgrad ${endClass}`}></div>
			</div>
		)
	}
}

export default TwitchAnimatedGrad
