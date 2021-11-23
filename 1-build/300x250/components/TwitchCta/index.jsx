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

	componentDidMount() {
		const { ctaRef } = this
		const { width, minFont, maxFont, fit } = this.props

		gsap.set('.twitchcta', { opacity: 0 })

		let finalFontSize = getComputedStyle(ctaRef).getPropertyValue('font-size')
		if (fit) {
			finalFontSize = useTextFit([this.ctaRef], width, minFont, maxFont)
			ctaRef.style.width = width
		}

		// Used to offset the text on Y because of extra space in the font face
		const textYOffset = finalFontSize * 0.15
		gsap.set('#twitchcta__text-container', { y: `-=${textYOffset}` })

		// Word animation timeline
		let tl = gsap.timeline(),
			mySplitText = new _SplitText(ctaRef, { type: 'words' }),
			words = mySplitText.words //an array of all the divs that wrap each character
		// Pause timeline so we can start it later
		tl.pause()
		// Animate in each word
		tl.from(words, { duration: 0.5, y: `+=30`, ease: 'expo.out', stagger: 0.08 })
		// Set the tl class var to our timeline here for ref throughout class
		this.tl = tl
	}

	start() {
		// Scale down the cta on X and Y, we can also now set its opacity to be visible
		gsap.set('.twitchcta', { scaleX: 0.1, scaleY: 0.1, opacity: 1 })
		// Scale cta y
		gsap.to('.twitchcta', { duration: 0.2, scaleY: 1 })
		// Scale cta x, when complete then animate cta text in
		gsap.to('.twitchcta', {
			duration: 0.2,
			delay: 0.2,
			scaleX: 1,
			onComplete: () => {
				this.tl.play()
			},
		})
	}
	render() {
		const { text, arrow, maxFont } = this.props
		return (
			<div className="twitchcta" style={{ fontSize: maxFont }} ref={(el) => (this.ctaRef = el)}>
				<div id="twitchcta__text-container">
					{text}
					{arrow ? <span className="twitchcta__arrow">&nbsp↗</span> : null}
				</div>
			</div>
		)
	}
}

export default TwitchCta
