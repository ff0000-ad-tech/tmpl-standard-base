import { h, render, Component, createRef } from 'preact'
import { useRef, useEffect } from 'preact/hooks'

import './CopyBlock.scss'
import '@size/images/160over90-logo.png'
import '@size/images/frame1photo.jpg'
import '@size/images/frame2photo.jpg'
import '@size/images/frame3photo.jpg'

class CopyBlock extends Component {
	constructor(props) {
		super(props)
		this.copyblock = createRef()
		for (let i = 0; i < props.copy.length; i++) {
			this[`line_${i}_ref`] = createRef()
		}
	}

	componentDidMount() {}

	start() {
		for (let i = 0; i < this.props.copy.length; i++) {
			const el = this[`line_${i}_ref`].current
			const delay = i * 2

			gsap.to(el, { delay: delay, opacity: 1, duration: 1 })
			if (i === this.props.copy.length - 1) return
			gsap.to(el, { delay: 1 + delay, duration: 2, y: '+=50' })
		}
	}

	generateCopyLine = line => {
		return line.split('\n').map(line => <p>{line}</p>)
	}

	render() {
		return (
			<div ref={this.copyblock} className="copyblock">
				{this.props.copy.map((line, i) => (
					<div ref={this[`line_${i}_ref`]} className="copyblock__copyline" style={{ opacity: 0 }}>
						{this.generateCopyLine(line)}
					</div>
				))}
			</div>
		)
	}
}

export default CopyBlock
