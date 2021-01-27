import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-control'

import TextFit from '../TextFit'

import './styles.scss'
import '@common/fonts/template_font.woff'

class Ad extends Component {
	constructor(props) {
		super(props)
	}

	getImage = (name) => {
		return ImageManager.get(name).src
	}

	render() {
		return (
			<div className="a">
				<TextFit minFontSize={1} maxFontSize={50} className="tf__box">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</TextFit>
			</div>
		)
	}
}
export default Ad
