import { h, render, Component, createRef } from 'preact'

// Styles
import './styles.scss'

class TwitchAnimatedGrad extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		gsap.set(this.coverRef, { opacity: 0 })
		this.start()
	}
	restart() {
		gsap.set(this.coverRef, { opacity: 0 })
		this.start()
	}

	start() {
		const { duration } = this.props
		gsap.to(this.coverRef, { ease: 'none', duration, opacity: 1 })
	}
	render() {
		const { startClass, endClass } = this.props
		return (
			<div className={`twitchanimatedgrad ${startClass}`}>
				<div className={`twitchanimatedgrad ${endClass}`} ref={(el) => (this.coverRef = el)}></div>
			</div>
		)
	}
}

export default TwitchAnimatedGrad
