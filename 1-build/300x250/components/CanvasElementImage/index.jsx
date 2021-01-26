import { h, render, Component, Fragment } from 'preact'

import { ImageManager } from '@ff0000-ad-tech/ad-control'
import '@size/images/160over90-logo-small.png'

class CanvasElementImage extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.ctx = this.canvasRef.getContext('2d') // Set the context var
		this.draw() // Do the inital draw of the canvas
	}

	// Draw the canvas elements
	draw = () => {
		const ctx = this.ctx

		// Clear the canvas
		ctx.clearRect(0, 0, this.props.width, this.props.height)

		// Draw image
		const logoImage = ImageManager.get('160over90-logo-small')
		ctx.drawImage(logoImage, 0, 0, logoImage.width, logoImage.height)
	}

	render() {
		return (
			<>
				<canvas
					id="canvas_element"
					style={{ position: 'absolute', top: '0', left: '0' }}
					ref={(el) => (this.canvasRef = el)}
					width={this.props.width}
					height={this.props.height}
				/>
			</>
		)
	}
}

export default CanvasElementImage
