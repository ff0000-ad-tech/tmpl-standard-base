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

		// let finalFontSize = getComputedStyle(textRef).getPropertyValue('font-size')
		// // Autosize text
		// if (fit) {
		// 	finalFontSize = useTextFit([textRef], width, 5)
		// }
		// console.warn(`Font size = ${finalFontSize}`)

		// Distance words will move
		// const yDistance = 0.5
		const copies = 100
		children += ' '
		this.newText = children.repeat(copies)

		const stagger = 0.08
		const duration = 0.5

		let split = new _SplitText(textRef, { type: 'chars,lines' })
		const lines = split.lines
		const chars = split.chars

		gsap.from(lines, { duration: 1, y: 50, stagger: 0.05 })
		gsap.from(chars, { duration: 1, paddingRight: 5 })
	}

	// Only used in demo for restarting animation. You can delete if you want
	restart() {
		this.tl.seek(0)
		this.start()
	}

	getNewText() {
		const copies = 100
		let { children } = this.props
		children += ' '
		return children.repeat(copies)
	}
	start() {
		// Starts the text animation
		this.tl.play()
	}

	render() {
		const { width, children, debug } = this.props

		return (
			<div className="twitchwordboard">
				<div
					className="twitchwordboard__textfield"
					style={{ width: `${width}px`, backgroundColor: debug ? 'green' : null }}
					ref={(el) => (this.textRef = el)}
					dangerouslySetInnerHTML={{ __html: this.getNewText() }}
				></div>
			</div>
		)
	}
}

export default TwitchWordBoard
