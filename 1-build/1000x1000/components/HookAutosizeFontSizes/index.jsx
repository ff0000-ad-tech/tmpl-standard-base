import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

// Hooks
import useAutosizeFontSizes from '@common/hooks/useAutosizeFontSizes'

// Styles
import './styles.scss'

class HookAutosizeFontSizes extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		useAutosizeFontSizes([this.textRef], 200, 5)
	}

	render() {
		return (
			<div className="hookautosizefontsizes">
				<div className="hookautosizefontsizes__textfield" ref={(el) => (this.textRef = el)}>
					This text will autosize to fit this box's width
				</div>
			</div>
		)
	}
}

export default HookAutosizeFontSizes
