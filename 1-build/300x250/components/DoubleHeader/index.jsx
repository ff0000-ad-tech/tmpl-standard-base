import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-control'

import './styles.scss'
import '@size/images/160over90-logo.png'

class DoubleHeader extends Component {
	constructor(props) {
		super(props)
	}

	getImage = (name) => {
		return ImageManager.get(name).src
	}

	render() {
		return <div className="doubleheader">THIS IS A DOUBLE HEADER</div>
	}
}

export default DoubleHeader
