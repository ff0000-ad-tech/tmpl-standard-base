import { h, render, Component } from 'preact'
import { ImageManager } from 'ad-control'

import './styles.scss'

import '@common/fonts/template_font.ttf'
import '@size/images/160over90-logo.png'

class Build extends Component {
	render() {
		return (
			<div className="b">
				<div className="b__brand">
					<img src={ImageManager.get('160over90-logo').src} width={150} height={150} />
					<div className="b__cta">CLICK ME</div>
				</div>
			</div>
		)
	}
}
export default Build
