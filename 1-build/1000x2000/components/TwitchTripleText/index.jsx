import { h, Component } from 'preact'

import { SplitText as _SplitText } from '@common/js/SplitText.min.js'

import useTextFit from '@common/hooks/useTextFit'
import '@common/fonts/RoobertTW-SemiBold.woff'
import './styles.scss'

class TwitchTripleText extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const { offsetFactor, offset, fit } = this.props
		const { outline1Ref, outline2Ref } = this

		// Get the current font size for the text
		// This finalFontSize var is use in calculating the line offsets
		let finalFontSize = getComputedStyle(this.fullTextRef).getPropertyValue('font-size')

		// If we are using fit then we will end up with a different font size
		if (fit) {
			// fitFontSize called useTextFit which WILL already resize the font of our fullText element
			finalFontSize = this.fitFontSize()
			// Set the remaining outline texts to the same font size as fullText
			outline1Ref.style.fontSize = `${finalFontSize}px`
			outline2Ref.style.fontSize = `${finalFontSize}px`
		}

		///////////////////////////////////
		// Setup our offset for the lines
		// By default we use fontSize and multiply by a factor of .4(default) so we only use a percentage of font size of the offset.
		// If we pass in an offsetFactor than we will use that instead of the .4 default

		// Set offset factor. If we pass one in then use that, if not use default .4
		const _offsetFactor = offsetFactor || 0.4

		// we multiple by offset factor here to use a percentage of fontsize
		let lineOffset = finalFontSize * _offsetFactor

		// If we pass in offset then it will override everything
		if (offset) {
			lineOffset = offset
		}

		// Set out outlines to the proper offset positions
		gsap.set(outline1Ref, { x: `-=${lineOffset * 2}`, y: `-=${lineOffset * 2}` })
		gsap.set(outline2Ref, { x: `-=${lineOffset}`, y: `-=${lineOffset}` })

		this.start()
	}

	fitFontSize() {
		const { fullTextRef } = this
		const { width, minFontSize, maxFontSize } = this.props
		return useTextFit([fullTextRef], width, minFontSize, maxFontSize)
	}
	// Only used in demo for restarting animation. You can delete if you want
	restart() {
		const { fullTextRef } = this
		gsap.set(fullTextRef, { opacity: 0 })
		this.start()
	}

	start() {
		const { outline1Ref, outline2Ref, fullTextRef } = this
		// Starts the text animation
		let showHideDelay = 0.1

		// Show text
		gsap.set(outline1Ref, { opacity: 1, delay: 0 })
		gsap.set(outline2Ref, { opacity: 1, delay: showHideDelay })
		gsap.set(fullTextRef, { opacity: 1, delay: showHideDelay * 2 })

		const delayBeforeHide = 0.1
		const hideDelay = delayBeforeHide + showHideDelay * 2
		// Hide text
		gsap.set(outline1Ref, { opacity: 0, delay: hideDelay })
		gsap.set(outline2Ref, { opacity: 0, delay: hideDelay + showHideDelay })
	}

	render() {
		const { fontSize, width, children } = this.props

		// We need to pass in a font size for the text so we can set its css font-size
		// if we don't pass a fontSize in then use 16
		const fs = fontSize || 16
		return (
			<div className="twitchtripletext" style={{ width: `${width}px` }}>
				<div
					id="twitchtripletext__outline1"
					className="twitchtripletext__textfield twitchtripletext__textfield--outline"
					style={{ fontSize: `${fs}px` }}
					ref={(el) => (this.outline1Ref = el)}
					dangerouslySetInnerHTML={{ __html: children }}
				/>
				<div
					id="twitchtripletext__outline2"
					className="twitchtripletext__textfield twitchtripletext__textfield--outline"
					style={{ fontSize: `${fs}px` }}
					ref={(el) => (this.outline2Ref = el)}
					dangerouslySetInnerHTML={{ __html: children }}
				/>
				<div
					id="twitchtripletext__fulltext"
					className="twitchtripletext__textfield"
					style={{ fontSize: `${fs}px` }}
					ref={(el) => (this.fullTextRef = el)}
					dangerouslySetInnerHTML={{ __html: children }}
				/>
			</div>
		)
	}
}

export default TwitchTripleText
