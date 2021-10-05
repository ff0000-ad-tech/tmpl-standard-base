import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

import './styles.scss'
import '@size/images/texture-white.jpg'
import '@size/images/rip.png'

class Rip extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {}
	animateIn() {
		gsap.to('.rip__back', {
			duration: 0.5,
			x: adParams.adWidth,
			ease: 'expo.in'
		})
		gsap.to('.rip__gradient', { delay: 0.3, duration: 0.3, opacity: 1 })
	}

	render() {
		return (
			<div className="rip">
				<div className="rip__gradient" />
				<img className="rip__back" src={ImageManager.get('texture-white').src} />
				<img className="rip__front" src={ImageManager.get('rip').src} />
			</div>
		)
	}
}

export default Rip
