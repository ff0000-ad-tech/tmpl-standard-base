import { h, render, Component, createRef, Fragment } from 'preact'
import useCanvasAlign from '../Hooks/useCanvasAlign'

import { ImageManager } from '@ff0000-ad-tech/ad-control'

import '@size/images/canvas_mask.png'
import '@size/images/puppy.jpg'

class CanvasElementMask extends Component {
	constructor(props) {
		super(props)

		this.maskImage = ImageManager.get('canvas_mask')
		// Object values that we will tween with gsap
		// This also sets the objects initial position and values
		this.maskTween = {
			scale: 0,
			width: this.maskImage.width,
			height: this.maskImage.height,
			x: props.width / 2,
			y: props.height / 2,
		}
	}

	componentDidMount() {
		console.warn(adParams)
		this.ctx = this.canvasRef.getContext('2d') // Set the context var
		this.draw() // Do the inital draw of the canvas
		this.start()
	}

	// Draw the canvas elements
	draw = () => {
		const { x, y, width, height, scale } = this.maskTween
		const ctx = this.ctx

		// Clear the canvas
		ctx.clearRect(0, 0, this.props.width, this.props.height)
		ctx.globalCompositeOperation = 'source-over'

		// Draw mask image first
		const scaledWidth = width * scale
		const scaledHeight = height * scale
		ctx.drawImage(this.maskImage, x - scaledWidth / 2, y - scaledHeight / 2, scaledWidth, scaledHeight)

		// Change globalCompositeOperation
		// source-out = BLACK IN MASK PNG IMAGE IS SHOWN, ALPHA IS TRANSPARENT
		// source-in = BLACK IN MASK PNG IMAGE IS TRANSPARENT
		ctx.globalCompositeOperation = 'source-in'

		// Draw image second
		const puppyImage = ImageManager.get('puppy')
		ctx.drawImage(puppyImage, 0, 0, puppyImage.width, puppyImage.height)
	}

	start = () => {
		// Tween the maskTween Object
		gsap.to(this.maskTween, {
			duration: 1,
			scale: 1,
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

export default CanvasElementMask
