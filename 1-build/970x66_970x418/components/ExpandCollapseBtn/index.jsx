import 'preact/debug'
import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-control'

import './styles.scss'

import '@size/images/expand_btn.svg'
import '@size/images/collapse_btn.svg'

class Ad extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isExpanded: props.isExpanded,
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.isExpanded !== this.props.isExpanded) {
			this.setState({ isExpanded: this.props.isExpanded })
		}
	}

	handleClick = () => {
		const val = !this.state.isExpanded
		this.setState({ isExpanded: val })
		this.props.onClick()
	}

	getImage = (name) => {
		return ImageManager.get(name).src
	}

	render() {
		const expand_btn = <img className="expandcollapsebtn__expand" src={this.getImage('expand_btn')} alt="expand" />
		const collapse_btn = <img className="expandcollapsebtn__collapse" src={this.getImage('collapse_btn')} alt="collapse" />

		return (
			<div className="expandcollapsebtn" onClick={this.handleClick}>
				{this.state.isExpanded ? collapse_btn : expand_btn}
			</div>
		)
	}
}
export default Ad
