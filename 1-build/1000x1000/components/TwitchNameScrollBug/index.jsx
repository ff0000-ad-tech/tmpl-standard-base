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
		const { textRef, twitchBugRef } = this
		// Starts the text animation
		gsap.fromTo(textRef, { x: '0' }, { x: '-=200', duration: 3, ease: 'none' })
		twitchBugRef.start()
	}

	render() {
		const { twitchBugRef, textRef, scale } = this.props
		const bugStyles = { position: 'relative', top: '-34px', left: '-114px' }
		return (
			<div className="twitchnamescrollbug">
				<TwitchBug style={bugStyles} scale={scale} ref={(el) => (this.twitchBugRef = el)} />
				<div className="twitchnamescrollbug__namecontainer">
					<div className="twitchnamescrollbug__namecontainer-text" ref={(el) => (this.textRef = el)}>
						{this.nameText}
					</div>
				</div>
			</div>
		)
	}
}

export default TwitchNameScrollBug
