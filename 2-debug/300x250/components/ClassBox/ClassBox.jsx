import { h, render, Component, createRef } from 'preact'
import { useRef, useEffect } from 'preact/hooks'

import './ClassBox.scss'
// import { gsap } from 'gsap'

class ClassBox extends Component {
	constructor(props) {
		super(props)
		this.mybox = createRef()
	}

	start() {
		gsap.to(this.mybox.current, { duration: 5, rotation: 360 })
	}

	render() {
		return (
			<div ref={this.mybox} className="classbox">
				CLASS BOX
			</div>
		)
	}
}

export default ClassBox
