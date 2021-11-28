import { h, Component } from 'preact'

import TwitchBug from '../TwitchBug'
import '@common/fonts/RoobertTW-SemiBold.woff'
import './styles.scss'

class TwitchNameScrollBug extends Component {
	constructor(props) {
		super(props)
		// Holds ref to timeline
		this.nameText = `/${this.props.name} `
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
		const { ref, twitchBugRef } = this
		// Starts the text animation
		// gsap.set(this.ref, { scale: 1 })
		gsap.to(this.textRef, { x: '-=200', duration: 3, ease: 'none' })
		twitchBugRef.start()
	}

	render() {
		const { width, name, debug, scale } = this.props
		const bugStyles = { position: 'relative', top: '0' }
		return (
			<div className="twitchnamescrollbug">
				<TwitchBug style={bugStyles} scale={scale} ref={(el) => (this.twitchBugRef = el)} />
				<div className="twitchnamescrollbug__namecontainer" ref={(el) => (this.ref = el)}>
					<div className="twitchnamescrollbug__namecontainer-text" ref={(el) => (this.textRef = el)}>
						{this.nameText}
					</div>
				</div>
			</div>
		)
	}
}

export default TwitchNameScrollBug
