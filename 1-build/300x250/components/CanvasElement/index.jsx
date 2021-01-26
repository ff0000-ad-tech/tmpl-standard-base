import { h, render, Component, createRef, Fragment } from 'preact'
import useCanvasAlign from '../Hooks/useCanvasAlign'

import { ImageManager } from '@ff0000-ad-tech/ad-control'
import '@size/images/160over90-logo-small.png'
import '@size/images/canvas_mask.png'
import '@size/images/puppy.jpg'
import * as Align from '../Utils/Align.js'

class CanvasElement extends Component {
	constructor(props) {
		super(props)

		// Object values that we will tween with gsap
		this.boxTween = {
			x: Align.centerAgainst(20, 20),
			y: Align.centerAgainst(20, 20),
			// x: Align.center(0, this.props.width, 20, -40),
			// y: Align.center(0, this.props.height, 20),
			width: 20,
			height: 20,
		}

		// useCanvasAlign(this.props.width, this.props.height, this.boxTween)
		// // Object values that we will tween with gsap
		// this.boxTween = {
		// 	x: 0,
		// 	y: 0,
		// 	width: 20,
		// 	height: 20,
		// 	align: {
		// 		x: {
		// 			type: 'center',
		// 			against: 100,
		// 			outer: true,
		// 		},
		// 		y: {
		// 			type: 'center',
		// 			offset: -50,
		// 		},
		// 	},
		// }

		// useCanvasAlign(this.props.width, this.props.height, this.boxTween)
	}

	componentDidMount() {
		console.warn(adParams)
		this.ctx = this.canvasRef.getContext('2d') // Set the context var
		this.draw() // Do the inital draw of the canvas
	}

	// Draw the canvas elements
	draw = () => {
		const { x, y, width, height } = this.boxTween
		const ctx = this.ctx

		// Clear the canvas
		ctx.clearRect(0, 0, this.props.width, this.props.height)

		// // Draw Rectangle
		ctx.fillStyle = 'red'
		ctx.fillRect(x, y, width, height)
	}

	start = () => {
		// Tween the boxTween Object
		gsap.to(this.boxTween, {
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

export default CanvasElement
