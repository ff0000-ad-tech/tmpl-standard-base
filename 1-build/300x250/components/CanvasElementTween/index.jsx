import { h, render, Component, Fragment } from 'preact'

import useCanvasScale from '@common/js/hooks/useCanvasScale'

class CanvasElementTween extends Component {
	constructor(props) {
		super(props)

		// Object values that we will tween with gsap
		this.boxTween = {
			width: 100,
			height: 150,
			scale: 0,
		}
	}

	componentDidMount() {
		console.warn(adParams)
		this.ctx = this.canvasRef.getContext('2d') // Set the context var

		// Adjust canvas for retina
		useCanvasScale(this.canvasRef, this.ctx, this.props.width, this.props.height)

		this.draw() // Do the inital draw of the canvas
		this.start() // Start the animation
	}

	// Draw the canvas elements
	draw = () => {
		const ctx = this.ctx
		const { width, height, scale } = this.boxTween

		// Clear the canvas
		ctx.clearRect(0, 0, this.props.width, this.props.height)

		// Do math for scaling and positioning
		const scaledWidth = width * scale
		const scaledHeight = height * scale
		const x = (this.props.width - scaledWidth) / 2
		const y = (this.props.height - scaledHeight) / 2

		// // Draw Rectangle
		ctx.fillStyle = 'black'
		ctx.fillRect(x, y, scaledWidth, scaledHeight)
	}

	start = () => {
		// Tween the boxTween Object
		gsap.to(this.boxTween, {
			duration: 3,
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

export default CanvasElementTween
