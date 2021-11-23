import { h, render, Component, createRef } from 'preact'

import { SplitText as _SplitText } from '@common/js/SplitText.min.js'

// Hooks
import useTextFit from '@common/hooks/useTextFit'

// Styles
import './styles.scss'

class TwitchCta extends Component {
	constructor(props) {
		super(props)
		// Holds ref to timeline
		this.tl = null
	}

	// stripPx(str) {
	// 	return parseInt(str.substring(0, str.length - 2))
	// }

	componentDidMount() {
		const { textRef } = this
		const { width, minFont, fit } = this.props

		gsap.set('.twitchcta__inner', { opacity: 0 })

		if (fit) {
			alert('fit')
			useTextFit([this.ctaRef], 100, 5)
			this.ctaRef.style.width = 100
		}

		// Word animation timeline
		let tl = gsap.timeline(),
			mySplitText = new _SplitText(textRef, { type: 'words' }),
			words = mySplitText.words //an array of all the divs that wrap each character
		// Pause timeline so we can start it later
		tl.pause()
		tl.from(words, { duration: 0.5, y: `+=30`, ease: 'expo.out', stagger: 0.08 })
		// tl.from(words, { duration: duration, y: `+=${yDistance}`, ease: 'expo.inOut', stagger: stagger }, '-=.6')
		this.tl = tl
	}
	start() {
		gsap.set('.twitchcta__inner', { scaleX: 0.1, scaleY: 0.1, opacity: 1 })
		gsap.to('.twitchcta__inner', { duration: 0.2, scaleY: 1 })
		gsap.to('.twitchcta__inner', {
			duration: 0.2,
			delay: 0.2,
			scaleX: 1,
			onComplete: () => {
				this.tl.play()
			},
		})
	}
	render() {
		const { text } = this.props
		return (
			<div className="twitchcta" ref={(el) => (this.ctaRef = el)}>
				<div className="twitchcta__inner" ref={(el) => (this.textRef = el)}>
					{text}
				</div>
			</div>
		)
	}
}

export default TwitchCta
