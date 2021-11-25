import { h, Component } from 'preact'

import { SplitText as _SplitText } from '@common/js/SplitText.min.js'
// import useConvertLineBreaks from '@common/hooks/useConvertLineBreaks'
import useTextFit from '@common/hooks/useTextFit'
import '@common/fonts/RoobertTW-SemiBold.woff'
import './styles.scss'
class TwitchWordBoard extends Component {
	constructor(props) {
		super(props)
		// Holds ref to timeline
		this.tl = null
	}

	componentDidMount() {
		const { textRef } = this
		let { children } = this.props
		const { width } = this.props

		const split = new _SplitText(textRef, { type: 'lines', linesClass: 'line' })
		this.lines = split.lines
		this.start()
	}

	// Only used in demo for restarting animation. You can delete if you want
	restart() {
		this.tl.seek(0)
		this.start()
	}

	getText() {
		let { children } = this.props
		const copies = 10
		children += ' '
		let newText = children.repeat(copies)
		newText += '<br>'
		return newText.repeat(30)
	}

	start() {
		// Starts the text animation
		gsap.from(this.lines, { duration: 0.8, paddingTop: 20, paddingBottom: 20, stagger: 0.05 })
		// gsap.from('.twitchwordboard__textfield', { scale: 2, duration: 0.8, ease: 'expo.out' })
		gsap.set('.line', { animation: 'in .8s ease-out forwards' })
	}

	render() {
		const { width, height, debug } = this.props

		return (
			<div className="twitchwordboard" style={{ width: `${width}px`, height: `${height}px` }}>
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
