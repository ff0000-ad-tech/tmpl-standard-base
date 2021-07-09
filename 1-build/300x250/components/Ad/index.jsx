import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import * as AdData from '@common/js/AdData.js'
// Components
import BrandLogo from '../BrandLogo'
import IntroTeamLockup from '../IntroTeamLockup'
import EndframeTeam from '../EndframeTeam'
import Footer from '../Footer'
import useAutosizeFontSizes from '@common/hooks/useAutosizeFontSizes'
// Assets
import '@common/fonts/template_font.woff'
import '@size/images/160over90-logo.png'
import '@size/images/160over90-logo-small.png'

// Styles
import './styles.scss'

class Ad extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		useAutosizeFontSizes([this.introTeam1.teamname, this.introTeam2.teamname], 250, 10)
		useAutosizeFontSizes([this.endframeTeam1.teamname, this.endframeTeam2.teamname], 120, 10)
	}

	render() {
		return (
			<div className="ad">
				<div className="ad__footer">
					<img className="ad__logo" src={ImageManager.get('160over90-logo-small').src} />
					<div className="ad__cta">{AdData.teams.team1.name}</div>
				</div>
				<img style={{ position: 'absolute', top: '0', left: '0' }} src={ImageManager.get(AdData.networks[0].name).src} />
				<IntroTeamLockup team={AdData.teams.team2} key="t1" ref={(el) => (this.introTeam2 = el)} />
				<IntroTeamLockup team={AdData.teams.team1} key="t2" ref={(el) => (this.introTeam1 = el)} />
				<Footer ref={(el) => (this.footer = el)} />
				<EndframeTeam team={AdData.teams.team1} side="left" ref={(el) => (this.endframeTeam1 = el)} />
				<EndframeTeam team={AdData.teams.team2} side="right" ref={(el) => (this.endframeTeam2 = el)} />
				<img className="ad__bubbleimage" src={ImageManager.get(AdData.bubbleImage.imageId).src} />
			</div>
		)
	}
}
export default Ad
