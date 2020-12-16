import { h, render, Component } from 'preact'
import { ImageManager } from 'ad-control'

import './styles.scss'

import '@common/fonts/template_font.ttf'
import '@size/images/160over90-logo.png'

class Ad extends Component {
	render() {
		return (
			<div className="ad">
				<div className="ad__brand">
					<img src={ImageManager.get('160over90-logo').src} width={150} height={150} />
					<div className="ad__cta">CLICK ME</div>
				</div>
			</div>
		)
	}
}
export default Ad
