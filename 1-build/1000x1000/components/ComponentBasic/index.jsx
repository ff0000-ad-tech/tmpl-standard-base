import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

// Assets
import '@size/images/160over90-logo.png'

// Styles
import './styles.scss'

class ComponentBasic extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="component__basic">
				<div className="component__basic-header">Component Basic</div>
				<img src={ImageManager.get('160over90-logo').src} alt="logo" />
			</div>
		)
	}
}

export default ComponentBasic
