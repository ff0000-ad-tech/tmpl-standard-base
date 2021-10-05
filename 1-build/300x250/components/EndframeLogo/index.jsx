import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import '@size/images/rankchip.png'
import './styles.scss'

class EndframeLogo extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		let { team, side } = this.props
		return (
			<div className="endframelogo">
				<div className="endframelogo__side left">
					<div className="endframelogo__corner-container">
						<div className="endframelogo__corner-inner"></div>
					</div>
					<div className="endframelogo__teamname-container">
						{side == 'left' ? <div className="endframelogo__name">{team.abbreviation}</div> : null}
					</div>
					<div className="endframelogo__corner-container bl">
						<div className="endframelogo__corner-inner"></div>
					</div>
				</div>
				<div className="endframelogo__middle">
					<div className="endframelogo__middle-top"></div>
					<img className="endframelogo__logo" src={ImageManager.get(team.logo).src} />
					<div className="endframelogo__middle-bottom"></div>
				</div>
				<div className="endframelogo__side right">
					<div className="endframelogo__corner-container tr">
						<div className="endframelogo__corner-inner"></div>
					</div>
					<div className="endframelogo__teamname-container">
						{side == 'right' ? <div className="endframelogo__name">{team.abbreviation}</div> : null}
					</div>
					<div className="endframelogo__corner-container br">
						<div className="endframelogo__corner-inner"></div>
					</div>
				</div>
				{team.rank ? (
					<div className="endframelogo__rankchip">
						<img className="endframelogo__rankchip-img" src={ImageManager.get('rankchip').src} />
						<div className="endframelogo__rankchip-rank">{team.rank}</div>
					</div>
				) : null}
			</div>
		)
	}
}

export default EndframeLogo
