import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

import './styles.scss'
import '@size/images/LeftExt.svg'
import '@size/images/MiddleExt.svg'
import '@size/images/RightExt.svg'
import '@size/images/wmref.png'

class TwitchWordMark extends Component {
	constructor(props) {
		super(props)

		this.outline = (
			<svg viewBox="0 0 365.1 83">
				<g>
					<g id="Layer_1-2">
						<polygon
							class="wm-white"
							points="26.6,23.2 26.6,0 0,0 0,69.7 13.3,83 49.8,83 49.8,56.4 26.6,56.4 26.6,49.8 49.8,49.8 49.8,23.2 		
			"
						/>
						<polygon
							class="wm-white"
							points="122.8,23.2 122.8,56.4 116.1,56.4 116.1,23.2 89.6,23.2 89.6,56.4 83,56.4 83,23.2 56.4,23.2 
			56.4,69.7 69.7,83 149.3,83 149.3,23.2 		"
						/>
						<polygon class="wm-white" points="156,23.2 182.5,23.2 182.5,83 156,83 		" />
						<polygon class="wm-white" points="156,0 182.5,0 182.5,16.6 156,16.6 		" />
						<polygon
							class="wm-white"
							points="258.9,23.2 245.6,36.5 245.6,69.7 258.9,83 298.7,83 298.7,56.4 272.2,56.4 272.2,49.8 298.7,49.8 
			298.7,23.2 		"
						/>
						<polygon
							class="wm-white"
							points="351.8,23.2 331.9,23.2 331.9,0 305.4,0 305.4,83 331.9,83 331.9,49.8 338.5,49.8 338.5,83 365.1,83 
			365.1,36.5 		"
						/>
						<polygon
							class="wm-white"
							points="215.8,23.2 215.7,0 189.2,0 189.2,69.7 202.5,83 239,83 239,56.4 215.8,56.4 215.8,49.8 239,49.8 
			239,23.2 		"
						/>
					</g>
				</g>
			</svg>
		)
	}
	componentDidMount() {}

	start() {}
	render() {
		const { debug } = this.props
		return (
			<div className="twitchwordmark">
				<div className="twitchwordmark__inner" style={{ backgroundColor: debug ? 'green' : null }}>
					<div className="twitchwordmark__grad" />
					<div className="twitchwordmark__beam-left" />
					<div className="twitchwordmark__beam-mid" />
					<div className="twitchwordmark__beam-right" />
					<img className="twitchwordmark__ref" src={ImageManager.get('wmref').src} />
					{this.outline}
				</div>
			</div>
		)
	}
}

export default TwitchWordMark
