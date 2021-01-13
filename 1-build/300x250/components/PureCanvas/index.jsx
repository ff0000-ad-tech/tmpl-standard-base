import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-control'

class PureCanvas extends Component {
	shouldComponentUpdate() {
		return false
	}

	render() {
		return (
			<canvas
				width="300"
				height="250"
				style={{ position: 'absolute', top: '0', left: '0' }}
				ref={(node) => (node ? this.props.contextRef(node.getContext('2d')) : null)}
			/>
		)
	}
}

export default PureCanvas
