import { h, Component } from 'preact'

import { SplitText as _SplitText } from '@common/js/SplitText.min.js'
import useConvertLineBreaks from '@common/hooks/useConvertLineBreaks'
import useTextFit from '@common/hooks/useTextFit'
import '@common/fonts/RoobertTW-SemiBold.woff'
import './styles.scss'
class TwitchText extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		useTextFit([this.textRef], this.props.width, 5)
		let tl = gsap.timeline(),
			mySplitText = new _SplitText(this.textRef, { type: 'words' }),
			words = mySplitText.words //an array of all the divs that wrap each character

		tl.from(words, { duration: 0.001, opacity: 0, stagger: 0.08 })
		tl.from(words, { duration: 0.5, y: '+=40', ease: 'expo.inOut', stagger: 0.08 }, '-=.6')
		tl.restart()
	}

	render() {
		return (
			<div className="twitchtext">
				<div className="twitchtext__textfield" style={{ width: `${this.props.width}px` }} ref={(el) => (this.textRef = el)}>
					{useConvertLineBreaks(this.props.children)}
				</div>
			</div>
		)
	}
}

export default TwitchText
