import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

import './styles.scss'
import '@size/images/bg_intro.jpg'

class IntroTeamLockup extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		gsap.set(this.logo, { x: -adParams.adWidth })
		gsap.set(this.player, { x: adParams.adWidth })
		gsap.set(this.teamname, { y: '+=60' })
	}
	animateIn() {
		gsap.to(this.logo, { duration: 0.5, x: 50, ease: 'expo.out' })
		gsap.to(this.player, { duration: 0.5, x: 90, ease: 'expo.out' })
		gsap.to(this.teamname, { duration: 0.5, y: '-=60', ease: 'expo.out' })
	}

	render() {
		let { logo, player, name, rank, colorPrimary, colorSecondary, textColor } = this.props.team
		return (
			<div className="introteamlockup">
				<div className="introteamlockup__bg-container">
					<img className="introteamlockup__bg" src={ImageManager.get('bg_intro').src} alt="bg_intro" />
					<div className="endframeteam__bgcover" style={{ background: colorPrimary }} alt="ef_bgcover" />
				</div>

				<img className="introteamlockup__logo" src={ImageManager.get(logo.imageId).src} alt="logo" ref={(el) => (this.logo = el)} />
				<img className="introteamlockup__player" src={ImageManager.get(player.imageId).src} alt="player" ref={(el) => (this.player = el)} />
				<div
					className="introteamlockup__name"
					ref={(el) => (this.teamname = el)}
					style={{ fontFamily: adData.fonts.reg, color: textColor || colorSecondary }}
				>
					<span className="introteamlockup__rank">{rank}</span>
					{name}
				</div>
			</div>
		)
	}
}

export default IntroTeamLockup
