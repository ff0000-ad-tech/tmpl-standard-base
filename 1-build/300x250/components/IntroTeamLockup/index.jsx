import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

import './styles.scss'

class IntroTeamLockup extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const { player } = this.props.team
		gsap.set(this.logo, { x: -adParams.adWidth })
		gsap.set(this.player, { x: adParams.adWidth })
		if (!player) {
			gsap.set(this.logo, { duration: 0.5, y: 20 })
		}
	}

	animateIn() {
		const { player } = this.props.team
		//Animates into place
		gsap.to(this.logo, { duration: 0.5, x: player ? 50 : 75 })
		gsap.to(this.player, { duration: 0.5, x: 90 })

		// Slow motion slide
		gsap.to(this.logo, { duration: 2, delay: 0.5, x: '+=7', ease: 'none' })
		gsap.to(this.player, { duration: 2, delay: 0.5, x: '-=7', ease: 'none' })

		//Animates out
		gsap.to(this.logo, {
			duration: 0.5,
			delay: 2.5,
			x: adParams.adWidth,
			ease: 'expo.in'
		})
		gsap.to(this.player, {
			duration: 0.5,
			delay: 2.5,
			x: -adParams.adWidth,
			ease: 'expo.in'
		})
	}

	render() {
		let { logo, player } = this.props.team
		return (
			<div className="introteamlockup">
				<img className="introteamlockup__logo" src={ImageManager.get(logo).src} alt="logo" ref={(el) => (this.logo = el)} />
				{player ? (
					<img className="introteamlockup__player" src={ImageManager.get(player).src} alt="player" ref={(el) => (this.player = el)} />
				) : null}
			</div>
		)
	}
}

export default IntroTeamLockup
