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

	// start() {
	// 	gsap.fromTo('#logo', { scale: 0 }, { delay: 0.3, duration: 0.5, scale: 1.2, ease: 'expo.out' })
	// }
	// over() {
	// 	gsap.to('#logo', { duration: 0.3, scale: 1.4, ease: 'expo.out' })
	// }
	// out() {
	// 	gsap.to('#logo', { duration: 0.3, scale: 1.2, ease: 'expo.out' })
	// }

	render() {
		const { logo, player } = this.props.data
		return (
			<div className="introteamlockup">
				<img className="introteamlockup__bg" src={ImageManager.get('bg_intro').src} alt="bg_intro" />
				<img className="introteamlockup__logo" src={ImageManager.get(logo.imageId).src} alt="logo" />
				<img className="introteamlockup__player" src={ImageManager.get(AdData.players[0].player.imageId).src} alt="player" />
			</div>
		)
	}
}

export default IntroTeamLockup
