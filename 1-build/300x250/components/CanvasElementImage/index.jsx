import { h, render, Component, createRef, Fragment } from 'preact'
import useCanvasAlign from '../Hooks/useCanvasAlign'

import { ImageManager } from '@ff0000-ad-tech/ad-control'
import '@size/images/160over90-logo-small.png'

class CanvasElementImage extends Component {
	constructor(props) {
		super(props)

		// Object values that we will tween with gsap
		// This also sets the objects initial position and values
		this.imgTween = {
			x: 0,
			y: 0,
			width: 20,
			height: 20,
			align: {
				x: {
					type: 'center',
				},
				y: {
					type: 'center',
				},
			},
		}

		useCanvasAlign(this.props.width, this.props.height, this.imgTween)
	}

	componentDidMount() {
		console.warn(adParams)
		this.ctx = this.canvasRef.getContext('2d') // Set the context var
		this.draw() // Do the inital draw of the canvas
	}

	// Draw the canvas elements
	draw = () => {
		const { x, y, width, height } = this.imgTween
		const ctx = this.ctx

		// Clear the canvas
		ctx.clearRect(0, 0, this.props.width, this.props.height)

		// Draw image
		const logoImage = ImageManager.get('160over90-logo-small')
		ctx.drawImage(logoImage, 50, 50, logoImage.width, logoImage.height)
	}

	start = () => {
		// Tween the imgTween Object
		gsap.to(this.imgTween, {
			duration: 1,
			x: '+=100',
			y: '+=100',
			width: '+=50',
			height: '+=20',
			onUpdate: () => {
				this.draw()
			},
		})
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
