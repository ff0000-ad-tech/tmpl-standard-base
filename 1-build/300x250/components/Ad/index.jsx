import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-control'

import SplitText from '../SplitText'

import './styles.scss'
import '@common/fonts/template_font.woff'

class Ad extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="a">
				<SplitText>This is some cool text</SplitText>
			</div>
		)
	}
}
export default Ad
