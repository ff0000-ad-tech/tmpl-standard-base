import { h, render, Component, createRef } from 'preact'

class CanvasElement extends Component {
	constructor() {
		super()
		this.canvasRef = createRef() // Get ref to canvas
		this.ctx // Var to store canvas context

		// Object values that we will tween with gsap
		this.boxTween = {
			x: 0,
			y: 0,
			width: 20,
			height: 20,
		}
	}

	componentDidMount() {
		this.ctx = this.canvasRef.current.getContext('2d') // Set the context var
		this.draw() // Do the inital draw of the canvas
	}

	// Draw the canvas elements
	draw = () => {
		const { x, y, width, height } = this.boxTween

		console.warn('drawing')
		this.ctx.clearRect(0, 0, 300, 250)
		this.ctx.fillRect(x, y, width, height)
	}

	// Removed the ticker after animation is complete
	removeTicker = () => {
		gsap.ticker.remove(this.draw)
		console.warn('ticker removed')
	}

	start = () => {
		// Start a gsap ticker and call the draw method on every tick
		gsap.ticker.add(this.draw)

		// Tween the boxTween Object
		gsap.to(this.boxTween, {
			duration: 1,
			x: '+=100',
			y: '+=100',
			width: '+=50',
			height: '+=20',
			onComplete: () => {
				// Remove the ticker when the tween is complete
				this.removeTicker()
			},
		})
	}

	render() {
		return <canvas id="CANVAS_THING" style={{ position: 'absolute', top: '0', left: '0' }} ref={this.canvasRef} width="300" height="250" />
	}
}

export default CanvasElement
