import { h, render, Component, createRef } from 'preact'
import { ImageManager } from 'ad-control'

import Slideshow from './../Slideshow/Slideshow.jsx'
import CopyBlock from './../CopyBlock/CopyBlock.jsx'
import './styles.scss'

import '@common/fonts/JosefinSans-Bold.woff'
import '@common/fonts/JosefinSans-Medium.woff'
import '@common/images/logo.svg'
import '@size/images/160over90-logo.png'
import '@size/images/curve.svg'

class Ad extends Component {
	constructor(props) {
		super(props)
		this.slideshow = createRef()
		this.copyblock = createRef()
		this.cta = createRef()
		this.logo = createRef()
	}

	getImage = name => {
		return ImageManager.get(name).src
	}

	render() {
		return (
			<div className="ad">
				{/* <img id="imgRefID" src={this.getImage('160over90-logo')} width={40} height={40} /> */}
				<Slideshow ref={this.slideshow} />
				<div className="main-curve">
					<img className="main-curve__curve" src={this.getImage('curve')} />
					<div className="main-curve__fill" />
				</div>
				<img ref={this.logo} className="logo" src={this.getImage('logo')} />
				<div ref={this.cta} className="ad__cta">
					Learn More
				</div>
				<CopyBlock ref={this.copyblock} copy={adData.copy} />
			</div>
		)
	}
}
export default Ad
