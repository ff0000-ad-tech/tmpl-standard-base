import { h, Component } from 'preact'

import TwitchBug from '../TwitchBug'
import '@common/fonts/RoobertTW-SemiBold.woff'
import './styles.scss'
class TwitchNameScrollBug extends Component {
	constructor(props) {
		super(props)
		// Holds ref to timeline
		this.nameText = this.props.name + ''
		this.nameText = this.nameText.repeat(20)
	}

	componentDidMount() {
		const { textRef } = this
		const { width, animateOut, outDelay, fit } = this.props
		this.start()
	}

	// Only used in demo for restarting animation. You can delete if you want
	restart() {
		this.start()
	}

	start() {
		// Starts the text animation
		gsap.set(this.ref, { scale: 1 })
		gsap.to(this.ref, { scale: 2, duration: 1 })
	}

	render() {
		const { width, name, debug, scale } = this.props

		return (
			<div className="twitchnamescrollbug">
				<div className="twitchnamescrollbug__namecontainer" ref={(el) => (this.ref = el)}>
					<span className="twitchnamescrollbug__namecontainer-text">{this.nameText}</span>
				</div>
			</div>
		)
	}
}

export default TwitchNameScrollBug
