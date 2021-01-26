import { h, render, Component, createRef, Fragment } from 'preact'
import useCanvasAlign from '@common/js/hooks/useCanvasAlign'

import { ImageManager } from '@ff0000-ad-tech/ad-control'

class CanvasElementText extends Component {
	constructor(props) {
		super(props)

		// Object values that we will tween with gsap
		// This also sets the objects initial position and values
		this.textTween = {
			x: this.props.width / 2,
			y: this.props.height / 4,
			opacity: 0,
		}
	}

	getImage = (name) => {
		return ImageManager.get(name).src
	}

	componentDidMount() {
		console.warn(adParams)
		this.ctx = this.canvasRef.getContext('2d') // Set the context var
		this.draw() // Do the inital draw of the canvas
		this.start()
	}

	// Draw the canvas elements
	draw = () => {
		const { x, y, opacity } = this.textTween
		const ctx = this.ctx

		// Clear the canvas
		ctx.clearRect(0, 0, this.props.width, this.props.height)

		// Draw Text
		ctx.font = '30px Arial'

		// Fill with gradient
		let gradient = ctx.createLinearGradient(0, 0, this.canvasRef.width, 0)
		gradient.addColorStop('0', `rgba(255, 0, 174, ${opacity})`)
		gradient.addColorStop('1.0', `rgba(0, 255, 250, ${opacity})`)
		ctx.textAlign = 'center'
		ctx.fillStyle = gradient

		ctx.fillText('Hello 160over90', x, y)
	}

	start = () => {
		// Tween the textTween Object
		gsap.to(this.textTween, {
			duration: 1,
			y: this.props.height / 2,
			opacity: 1,
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

export default CanvasElementText
