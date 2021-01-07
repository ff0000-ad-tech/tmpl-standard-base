import { h, render, Component, createRef } from 'preact'
import { useRef, useEffect, useMemo, useState } from 'preact/hooks'
import { ImageManager } from 'ad-control'
// import { gsap } from 'gsap'

import Box from './../Box/Box.jsx'
import Square from './../Square/Square.jsx'
import Circle, { start } from './../Circle/Circle.jsx'
import ClassBox from './../ClassBox/ClassBox.jsx'
import './styles.scss'

import '@common/fonts/template_font.ttf'
import '@size/images/160over90-logo.png'

class Ad extends Component {
	constructor(props) {
		super(props)
		this.cbref = createRef()
	}

	componentDidMount() {
		// this.cbref.current.start()
	}

	start() {
		// console.warn(this.cbref.current)
		gsap.to(this.cbref.current.base, { duration: 5, y: 150 })
	}

	render() {
		return (
			<div className="ad">
				<button
					onClick={() => {
						this.cbref.current.start()
					}}
				>
					START INTERNAL
				</button>
				<button
					onClick={() => {
						this.start()
					}}
				>
					START EXTERNAL
				</button>
				<ClassBox ref={this.cbref} />
			</div>
		)
	}
}
export default Ad
