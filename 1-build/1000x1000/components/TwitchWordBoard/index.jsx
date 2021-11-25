import { h, Component } from 'preact'

import { SplitText as _SplitText } from '@common/js/SplitText.min.js'
// import useConvertLineBreaks from '@common/hooks/useConvertLineBreaks'
import useTextFit from '@common/hooks/useTextFit'
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
		gsap.set('.twitchwordboard__line', { animation: '' })
		gsap.set('.twitchwordboard__textfield', { scale: 1 })
		this.start()
	}

	start() {
		// Starts the text animation
		gsap.from(this.lines, {
			duration: 0.4,
			paddingTop: 30,
			paddingBottom: 30,
			onComplete: () => {},
		})
		gsap.set('.twitchwordboard__line', { animation: 'in .4s forwards' })
		gsap.to('.twitchwordboard__textfield', { delay: 0.36, scale: 1.25, duration: 0.4, ease: 'sine.out' })
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
		const { width, height, debug } = this.props

		return (
			<div className="twitchwordboard" style={{ width: `${width}px`, height: `${height}px`, background: debug ? 'green' : null }}>
				<div
					className="twitchwordboard__textfield"
					ref={(el) => (this.textRef = el)}
					dangerouslySetInnerHTML={{ __html: this.getText() }}
				></div>
			</div>
		)
	}
}

export default TwitchWordBoard
