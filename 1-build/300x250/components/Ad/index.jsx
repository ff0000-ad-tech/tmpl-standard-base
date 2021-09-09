import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

// Components
import IntroTeamLockup from '../IntroTeamLockup'
import EndframeLogo from '../EndframeLogo'
import Footer from '../Footer'
import Rip from '../Rip'
import IntroTeamName from '../IntroTeamName'
import Header from '../Header'
import useAutosizeFontSizes from '@common/hooks/useAutosizeFontSizes'

// Assets
import '@size/images/texture-black.jpg'

// Styles
import './styles.scss'

class Ad extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		useAutosizeFontSizes([this.team1name.teamname, this.team2name.teamname], 250, 10)
		// useAutosizeFontSizes([this.endframeTeam1.teamname, this.endframeTeam2.teamname], 120, 10)
	}

	render() {
		const mod = !adData.hasHeadline ? 'ad__at ad__at--noheadline' : 'ad__at'
		return (
			<div className="ad" onClick={this.props.onClick}>
				<img style={{ position: 'absolute' }} src={ImageManager.get('texture-black').src} />
				<IntroTeamLockup team={adData.teams.team1} key="t2" ref={(el) => (this.introTeam1 = el)} />
				<IntroTeamLockup team={adData.teams.team2} key="t1" ref={(el) => (this.introTeam2 = el)} />
				<Rip ref={(el) => (this.rip = el)} />
				<IntroTeamName ref={(el) => (this.team1name = el)} team={adData.teams.team1} uselines />
				<IntroTeamName ref={(el) => (this.team2name = el)} team={adData.teams.team2} uselines />
				<EndframeLogo ref={(el) => (this.endframelogo1 = el)} team={adData.teams.team1} side="left" />
				<EndframeLogo ref={(el) => (this.endframelogo2 = el)} team={adData.teams.team2} side="right" />
				<Header ref={(el) => (this.header = el)} />
				<Footer ref={(el) => (this.footer = el)} />
				<img className={mod} src={ImageManager.get('bubble_image').src} />
			</div>
		)
	}
}
export default Ad
