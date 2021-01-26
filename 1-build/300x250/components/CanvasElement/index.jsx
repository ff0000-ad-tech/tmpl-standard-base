import { h, render, Component, Fragment } from 'preact'

import * as Align from '@common/js/utils/Align.js'

class CanvasElement extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		console.warn(adParams)
		this.ctx = this.canvasRef.getContext('2d') // Set the context var
		this.draw() // Do the inital draw of the canvas
	}

	// Draw the canvas elements
	draw = () => {
		const ctx = this.ctx
		const boxWidth = 100
		const boxHeight = 150

		const x = Align.center(0, this.props.width, boxWidth)
		const y = Align.center(0, this.props.height, boxHeight)

		// Clear the canvas
		ctx.clearRect(0, 0, this.props.width, this.props.height)

		// // Draw Rectangle
		ctx.fillStyle = 'black'
		ctx.fillRect(x, y, boxWidth, boxHeight)
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
