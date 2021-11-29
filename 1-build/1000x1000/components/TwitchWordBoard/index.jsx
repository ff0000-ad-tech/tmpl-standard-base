import { h, Component } from 'preact'

import { SplitText as _SplitText } from '@common/js/SplitText.min.js'
import '@common/fonts/RoobertTW-SemiBold.woff'
import './styles.scss'
class TwitchWordBoard extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const { textRef } = this

		const split = new _SplitText(textRef, { type: 'lines', linesClass: 'twitchwordboard__line' })
		this.lines = split.lines
		this.start()
	}

	// Only used in demo for restarting animation. You can delete if you want
	restart() {
		const { textRef, singlewordRef } = this
		gsap.set(textRef, { opacity: 0 })
		gsap.set(singlewordRef, { opacity: 0, scale: 1 })
		gsap.set('.twitchwordboard__line', { animation: '' })
		gsap.set(textRef, { scale: 1 })
		this.start()
	}

	start() {
		const { zoomScale } = this.props
		const { textRef, singlewordRef } = this
		gsap.set(textRef, { opacity: 1 })
		// Starts the text animation
		gsap.from(textRef, { y: 60, duration: 0.4 })
		gsap.from(this.lines, {
			duration: 0.4,
			paddingTop: 30,
			paddingBottom: 30,
			onComplete: () => {},
		})
		gsap.set('.twitchwordboard__line', { animation: 'in .4s forwards' })
		gsap.to(textRef, { delay: 0.36, scale: zoomScale, duration: 0.4, ease: 'sine.out' })
		gsap.to(textRef, { delay: 0.7, scale: zoomScale - 0.5, duration: 0.3 })
		gsap.set(textRef, { delay: 0.95, opacity: 0 })
		gsap.set(singlewordRef, { delay: 0.95, opacity: 1 })
		gsap.from(singlewordRef, { delay: 0.95, scale: zoomScale, duration: 0.3, ease: 'sine.out' })
	}

	getText() {
		let { children } = this.props
		const copies = 10
		children += ' '
		let newText = children.repeat(copies)
		newText += '<br>'
		return newText.repeat(30)
	}

	render() {
		const { width, height, debug, children } = this.props

		return (
			<div className="twitchwordboard" style={{ width: `${width}px`, height: `${height}px`, background: debug ? 'green' : null }}>
				<div
					className="twitchwordboard__textfield"
					ref={(el) => (this.textRef = el)}
					dangerouslySetInnerHTML={{ __html: this.getText() }}
				></div>
				<div
					className="twitchwordboard__singleword"
					ref={(el) => (this.singlewordRef = el)}
					dangerouslySetInnerHTML={{ __html: children }}
				></div>
			</div>
		)
	}
}

export default TwitchWordBoard
