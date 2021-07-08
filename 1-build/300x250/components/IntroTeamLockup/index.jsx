import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import * as AdData from '@common/js/AdData.js'
import './styles.scss'
import '@size/images/bg_intro.jpg'

class IntroTeamLockup extends Component {
	constructor(props) {
		super(props)
		console.warn('PROPS======', props)
	}

	animateIn() {
		gsap.fromTo('.introteamlockup__logo', { x: -adParams.adWidth }, { delay: 0.3, duration: 0.5, x: 50, ease: 'expo.out' })
		gsap.fromTo('.introteamlockup__player', { x: adParams.adWidth }, { delay: 0.3, duration: 0.5, x: 90, ease: 'expo.out' })
	}
	animateOut() {
		gsap.fromTo('#logo', { scale: 0 }, { delay: 0.3, duration: 0.5, scale: 1.2, ease: 'expo.out' })
	}
	// over() {
	// 	gsap.to('#logo', { duration: 0.3, scale: 1.4, ease: 'expo.out' })
	// }
	// out() {
	// 	gsap.to('#logo', { duration: 0.3, scale: 1.2, ease: 'expo.out' })
	// }

	render() {
		let { logo, player, name, rank, colorPrimary } = this.props.team
		return (
			<div className="introteamlockup">
				<div className="introteamlockup__bg-container">
					<img className="introteamlockup__bg" src={ImageManager.get('bg_intro').src} alt="bg_intro" />
					<div className="endframeteam__bgcover" style={{ background: colorPrimary }} alt="ef_bgcover" />
				</div>

				<img className="introteamlockup__logo" src={ImageManager.get(logo.imageId).src} alt="logo" />
				<img className="introteamlockup__player" src={ImageManager.get(player.imageId).src} alt="player" />
				<div className="introteamlockup__name">
					<span className="introteamlockup__rank">{rank}</span>
					{name}
				</div>
			</div>
		)
	}
}

export default IntroTeamLockup
