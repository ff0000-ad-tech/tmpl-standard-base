import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import TuneinCorner from '../TuneinCorner'
import './styles.scss'

class IntroTeamName extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		gsap.set(this.teamname, { y: '+=60' })
	}
	animateIn() {
		//Animates into place
		gsap.to(this.teamname, { duration: 0.5, y: 0, ease: 'expo.out' })
	}
	animateOut() {
		//Animates out
		gsap.to(this.teamname, { duration: 0.4, y: '+=60', ease: 'expo.in' })
	}

	render() {
		const { name, rank } = this.props.team
		return (
			<div className="introteamname">
				<div className="introteamname__inner" ref={(el) => (this.teamname = el)}>
					{this.props.uselines ? (
						<div className="introteamname__topbottom">
							<TuneinCorner pos="tl" />
							<TuneinCorner pos="tr" />
						</div>
					) : null}

					<div className="introteamname__name" style={{ fontFamily: adData.fonts.reg }}>
						<span className="introteamname__rank">{rank}</span>
						{name}
					</div>
					{this.props.uselines ? (
						<div className="introteamname__topbottom">
							<TuneinCorner pos="bl" />
							<TuneinCorner pos="br" />
						</div>
					) : null}
				</div>
			</div>
		)
	}
}

export default IntroTeamName

// <div
// 	className="introteamlockup__name"
// 	ref={(el) => (this.teamname = el)}
// 	style={{ fontFamily: adData.fonts.reg, color: textColor || colorSecondary }}
// >
// 	<span className="introteamlockup__rank">{rank}</span>
// 	{name}
// </div>
