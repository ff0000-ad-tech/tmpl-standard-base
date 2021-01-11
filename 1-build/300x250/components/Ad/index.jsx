import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-control'

import Slideshow from './../Slideshow'
import CopyBlock from './../CopyBlock'
import './styles.scss'

import '@common/fonts/JosefinSans-Bold.woff'
import '@common/fonts/JosefinSans-Medium.woff'
import '@common/images/logo.svg'
import '@size/images/160over90-logo.png'
import '@size/images/curve.svg'

class Ad extends Component {
	constructor(props) {
		super(props)
	}

	getImage = name => {
		return ImageManager.get(name).src
	}

	render() {
		return (
			<div className="ad">
				{/* <img id="imgRefID" src={this.getImage('160over90-logo')} width={40} height={40} /> */}
				<Slideshow ref={el => this.slideshow = el} />
				<div className="main-curve">
					<img className="main-curve__curve" src={this.getImage('curve')} />
					<div className="main-curve__fill" />
				</div>
				<img ref={el => this.logo = el} className="logo" src={this.getImage('logo')} />
				<div ref={el => this.cta = el} className="ad__cta">
					Learn More
				</div>
				<CopyBlock ref={el => this.copyblock = el} copy={adData.copy} />
			</div>
		)
	}
}
export default Ad
