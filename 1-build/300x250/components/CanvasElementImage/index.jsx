import { h, render, Component, Fragment } from 'preact'

import { ImageManager } from '@ff0000-ad-tech/ad-control'
import useCanvasScale from '@common/js/hooks/useCanvasScale'
import * as Align from '@common/js/utils/Align.js'

import '@size/images/160over90-logo.png'

class CanvasElementImage extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.ctx = this.canvasRef.getContext('2d') // Set the context var

		// Adjust canvas for retina
		useCanvasScale(this.canvasRef, this.ctx, this.props.width, this.props.height)

		this.draw() // Do the inital draw of the canvas
	}

	// Draw the canvas elements
	draw = () => {
		const ctx = this.ctx

		// Clear the canvas
		ctx.clearRect(0, 0, this.props.width, this.props.height)

		// Draw image
		const logoImage = ImageManager.get('160over90-logo')

		// Use Align to get x,y for centering
		const x = Align.center(0, this.props.width, logoImage.width)
		const y = Align.center(0, this.props.height, logoImage.height)

		ctx.drawImage(logoImage, x, y, logoImage.width, logoImage.height)
	}

	render() {
		return (
			<>
				<canvas
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
