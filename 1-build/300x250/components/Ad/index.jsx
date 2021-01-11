import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-control'

import BrandLogo from '../BrandLogo'
import './styles.scss'

import '@common/fonts/template_font.woff'
import '../BrandLogo'
import '@size/images/160over90-logo.png'
import '@size/images/160over90-logo-small.png'

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
				<BrandLogo ref={el => this.brandlogo = el} />
				<div ref={el => this.footer = el} className="ad__footer">
					<img ref={el => this.logo = el} className="ad__logo" src={this.getImage('160over90-logo-small')} />
					<div ref={el => this.cta = el} className="ad__cta">
						LEARN MORE
					</div>
				</div>
			</div>
		)
	}
}
export default Ad
