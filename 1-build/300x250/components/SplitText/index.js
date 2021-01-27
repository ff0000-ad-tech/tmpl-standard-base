import { h, Component } from 'preact'

import { SplitText as _SplitText } from '@common/js/utils/SplitText.min.js'
import useConvertLineBreaks from '@common/js/hooks/useConvertLineBreaks'

class SplitText extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		let tl = gsap.timeline(),
			mySplitText = new _SplitText(this.textRef, { type: 'words' }),
			words = mySplitText.words //an array of all the divs that wrap each character

		tl.from(words, { duration: 0.8, opacity: 0, y: '-=5', ease: 'sine.out', stagger: 0.3 })
		tl.restart()
	}

	render() {
		return (
			<div ref={(el) => (this.textRef = el)} className={this.props.className}>
				{useConvertLineBreaks(this.props.children)}
			</div>
		)
	}
}

export default SplitText
