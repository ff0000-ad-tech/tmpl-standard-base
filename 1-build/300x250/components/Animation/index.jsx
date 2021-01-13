import { h, render, Component, createRef } from 'preact'

export default class Animation extends Component {
	constructor(props) {
		super(props)
		this.state = { angle: 0 }
	}

	componentDidMount() {
		this.rAF = requestAnimationFrame(this.updateAnimationState)
	}

	updateAnimationState = () => {
		this.setState((prevState) => ({ angle: prevState.angle + 1 }))
		this.rAF = requestAnimationFrame(this.updateAnimationState)
	}

	componentWillUnmount() {
		cancelAnimationFrame(this.rAF)
	}

	render() {
		return <Canvas angle={this.state.angle} />
	}
}

class Canvas extends Component {
	constructor(props) {
		super(props)
	}

	saveContext = (ctx) => {
		this.ctx = ctx
	}

	componentDidUpdate() {
		this.drawCanvasElements()
	}

	drawCanvasElements() {
		const { angle } = this.props
		const width = this.ctx.canvas.width
		const height = this.ctx.canvas.height
		this.ctx.save()
		this.ctx.beginPath()
		this.ctx.clearRect(0, 0, width, height)
		this.ctx.translate(width / 2, height / 2)
		this.ctx.rotate((angle * Math.PI) / 180)
		this.ctx.fillStyle = '#4397AC'
		this.ctx.fillRect(-width / 4, -height / 4, width / 2, height / 2)
		this.ctx.restore()
	}

	render() {
		return <PureCanvas contextRef={this.saveContext}></PureCanvas>
	}
}

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
				ref={(el) => (el ? this.props.contextRef(el.getContext('2d')) : null)}
			/>
		)
	}
}
