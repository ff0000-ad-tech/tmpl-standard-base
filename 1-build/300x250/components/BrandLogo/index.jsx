import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

import './styles.scss'
import '@size/images/160over90-logo.png'

class BrandLogo extends Component {
	constructor(props) {
		super(props)
	}

	start() {
		gsap.fromTo('#logo', { scale: 0 }, { delay: 0.3, duration: 0.5, scale: 1.2, ease: 'expo.out' })
	}
	over() {
		gsap.to('#logo', { duration: 0.3, scale: 1.4, ease: 'expo.out' })
	}
	out() {
		gsap.to('#logo', { duration: 0.3, scale: 1.2, ease: 'expo.out' })
	}

	render() {
		return (
			<div className="bl">
				<img id="logo" src={ImageManager.get('160over90-logo').src} alt="logo" />
			</div>
		)
	}
}

export default BrandLogo
