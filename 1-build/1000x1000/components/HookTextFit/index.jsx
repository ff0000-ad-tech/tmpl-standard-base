import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

// Hooks
import useTextFit from '@common/hooks/useTextFit'

// Styles
import './styles.scss'

class HookTextFit extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		useTextFit([this.textRef], 200, 5)
	}

	render() {
		return (
			<div className="hooktextfit">
				<div className="hooktextfit__textfield" ref={(el) => (this.textRef = el)}>
					This text will autosize to fit this box's width
				</div>
			</div>
		)
	}
}

export default HookTextFit
