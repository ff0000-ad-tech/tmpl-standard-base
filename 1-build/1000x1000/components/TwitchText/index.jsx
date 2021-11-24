import { h, Component } from 'preact'

import { SplitText as _SplitText } from '@common/js/SplitText.min.js'
// import useConvertLineBreaks from '@common/hooks/useConvertLineBreaks'
import useTextFit from '@common/hooks/useTextFit'
import '@common/fonts/RoobertTW-SemiBold.woff'
import './styles.scss'
class TwitchText extends Component {
	constructor(props) {
		super(props)
		// Holds ref to timeline
		this.tl = null
	}

	componentDidMount() {
		const { textRef } = this
		const { width, animateOut, outDelay, fit } = this.props

		let finalFontSize = getComputedStyle(textRef).getPropertyValue('font-size')
		// Autosize text
		if (fit) {
			finalFontSize = useTextFit([textRef], width, 5)
		}
		console.warn(`Font size = ${finalFontSize}`)

		// Distance words will move
		const yDistance = finalFontSize * 1.3

		const stagger = 0.08
		const duration = 0.5
		// Word animation timeline
		let tl = gsap.timeline(),
			mySplitText = new _SplitText(textRef, { type: 'words' }),
			words = mySplitText.words //an array of all the divs that wrap each character
		// Pause timeline so we can start it later
		tl.pause()
		// Make words visible
		tl.from(words, { duration: 0.001, opacity: 0, stagger: stagger })
		// Animate y position for each word
		tl.from(words, { duration: duration, y: `+=${yDistance}`, ease: 'expo.inOut', stagger: stagger }, '-=.6')
		if (animateOut) {
			tl.to(words, { delay: outDelay, duration: duration, y: `-=${yDistance}`, ease: 'expo.inOut', stagger: stagger })
			tl.to(words, { duration: 0, opacity: 0, stagger: stagger }, '-=.85')
		}
		this.tl = tl
	}

	// Only used in demo for restarting animation. You can delete if you want
	restart() {
		this.tl.seek(0)
		this.start()
	}

	start() {
		// Starts the text animation
		this.tl.play()
	}

	render() {
		const { width, children, debug } = this.props

		return (
			<div className="twitchtext">
				<div
					className="twitchtext__textfield"
					style={{ width: `${width}px`, backgroundColor: debug ? 'green' : null }}
					ref={(el) => (this.textRef = el)}
					dangerouslySetInnerHTML={{ __html: children }}
				></div>
			</div>
		)
	}
}

export default TwitchText