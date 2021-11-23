import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

import './styles.scss'
import '@common/fonts/RoobertTW-SemiBold.woff'

class TwitchCta extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {}

	start() {}
	render() {
		const { height, text } = this.props
		return (
			<div className="twitchcta" style={{ height: `${height}px` }}>
				<div className="twitchcta__bg" />
				<div className="twitchcta__text">{text}</div>
			</div>
		)
	}
}

export default TwitchCta
