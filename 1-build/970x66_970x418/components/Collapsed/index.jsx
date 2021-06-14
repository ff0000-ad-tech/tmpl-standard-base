import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-control'

import './styles.scss'
import * as Control from '../Control'

import '@common/fonts/template_font.woff'
import '@size/images/collapsed_bg.jpg'
import '@size/images/collapsed_cta_hover.jpg'
import '@size/images/expand_btn.svg'

class Collapsed extends Component {
	constructor(props) {
		super(props)
	}

	getImage = (name) => {
		return ImageManager.get(name).src
	}

	handleClickThrough = () => {
		Network.exit(collapsedExit)
	}

	handleRollOver = () => {
		console.warn('OVER')
		gsap.to('.collapsed_cta-hover', { duration: 0.2, opacity: 1, ease: 'power2.out' })
	}
	handleRollOut = () => {
		console.warn('OUT')
		gsap.to('.collapsed_cta-hover', { duration: 0.2, opacity: 0, ease: 'power2.out' })
	}
	render() {
		return (
			<div className="collapsed">
				<div className="collapsed__container">
					<img className="collapsed_bg" src={this.getImage('collapsed_bg')} alt="bg" />
					<img className="collapsed_cta-hover" src={this.getImage('collapsed_cta_hover')} alt="bg" />
					<div
						className="collapsed__clickthrough"
						onClick={this.handleClickThrough}
						onMouseOver={this.handleRollOver}
						onMouseLeave={this.handleRollOut}
					/>
					<div className="expanded__collapse-btn" onClick={this.props.handleExpand}>
						<img className="expanded__collapse-btn-img" src={this.getImage('expand_btn')} alt="collapse" />
					</div>
				</div>
			</div>
		)
	}
}
export default Collapsed
