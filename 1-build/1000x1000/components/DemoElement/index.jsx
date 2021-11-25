import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

// Components
import '@common/images/replay.svg'

// Assets
import '@size/images/160over90-logo.png'

// Styles
import './styles.scss'

class DemoElement extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="demoelement" style={{ width: this.props.width, height: this.props.height }} onClick={this.props.onClick}>
				<div className="demoelement__contentcontainer">{this.props.children}</div>
				{this.props.onClick ? <img class="demoelement__replay" src={ImageManager.get('replay').src} /> : null}
				<div className="demoelement__header">{this.props.name}</div>
			</div>
		)
	}
}

export default DemoElement
