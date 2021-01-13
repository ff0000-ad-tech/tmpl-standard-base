import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-control'
import PureCanvas from '../PureCanvas'
import './styles.scss'
import '@size/images/160over90-logo.png'

class Canvas extends Component {
	constructor(props) {
		super(props)
		this.saveContext = this.saveContext.bind(this)
	}

	saveContext(ctx) {
		this.ctx = ctx
		this.width = this.ctx.canvas.width
		this.height = this.ctx.canvas.height
	}

	componentDidUpdate() {
		const { angle } = this.props
		this.ctx.save()
		this.ctx.beginPath()
		this.ctx.clearRect(0, 0, this.width, this.height)
		this.ctx.translate(this.width / 2, this.height / 2)
		this.ctx.rotate((angle * Math.PI) / 180)
		this.ctx.fillStyle = '#4397AC'
		this.ctx.fillRect(-this.width / 4, -this.height / 4, this.width / 2, this.height / 2)
		this.ctx.restore()
	}

	render() {
		return <PureCanvas style={{ position: 'absolute', top: '0', left: '0' }} contextRef={this.saveContext} />
	}
}

export default Canvas
