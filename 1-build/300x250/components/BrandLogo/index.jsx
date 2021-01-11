import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-control'

import './styles.scss'
import '@size/images/160over90-logo.png'

class BrandLogo extends Component {
	constructor(props) {
		super(props)
	}

	getImage = name => {
		return ImageManager.get(name).src
	}

	start() {
		gsap.fromTo('#logo', {scale: 0}, { duration: 1, scale: 1 })
	}

	over() {
		gsap.to('#logo', { duration: 0.5, scale: 1.1 })
	}
	out() {
		gsap.to('#logo', { duration: 0.5, scale: 1 })
	}

	render() {
		return (
			<div className="slideshow">
				<img id="logo" src={this.getImage('160over90-logo')} alt="logo" />
			</div>
		)
	}
}

export default BrandLogo
