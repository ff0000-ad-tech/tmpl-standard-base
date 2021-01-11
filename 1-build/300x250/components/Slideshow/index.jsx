import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-control'

import './index.scss'
import '@size/images/160over90-logo.png'
import '@size/images/frame1photo.jpg'
import '@size/images/frame2photo.jpg'
import '@size/images/frame3photo.jpg'

class Slideshow extends Component {
	constructor(props) {
		super(props)
	}

	getImage = name => {
		return ImageManager.get(name).src
	}

	start() {
		gsap.to('#photo3', { duration: 3, x: 300 })
		gsap.to('#photo2', { delay: 3, duration: 2, x: 300 })
	}

	over() {
		gsap.to('#photo1', { duration: 0.5, scale: 1.2 })
	}
	out() {
		gsap.to('#photo1', { duration: 0.5, scale: 1 })
	}

	render() {
		return (
			<div className="slideshow">
				<img id="photo1" src={this.getImage('frame1photo')} alt="1" />
				<img id="photo2" src={this.getImage('frame2photo')} alt="2" />
				<img id="photo3" src={this.getImage('frame3photo')} alt="3" />
			</div>
		)
	}
}

export default Slideshow
