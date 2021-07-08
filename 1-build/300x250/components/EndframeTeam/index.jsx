import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import * as AdData from '@common/js/AdData.js'
import './styles.scss'
import '@size/images/bg_intro.jpg'
import '@size/images/black_texture.jpg'
import '@size/images/bg_left.png'
import '@size/images/bg_right.png'

class EndframeTeam extends Component {
	constructor(props) {
		super(props)
		console.warn('PROPS======', props)
	}

	render() {
		let { team, side } = this.props
		return (
			<div className={`endframeteam--${side}`} style={{ width: ImageManager.get(`bg_${side}`).width }}>
				<div className="endframeteam__bg-container">
					<img className="endframeteam__bg" src={ImageManager.get(`bg_${side}`).src} alt="ef_bg" />
					<div className="endframeteam__bgcover" style={{ background: team.colorPrimary }} alt="ef_bgcover" />
				</div>

				<img className="endframeteam__logo" src={ImageManager.get(team.logo.imageId).src} alt="ef_logo" />
				<div className="endframeteam__name">
					<span className="endframeteam__rank">{team.rank}</span>
					{team.name}
				</div>
			</div>
		)
	}
}

export default EndframeTeam
