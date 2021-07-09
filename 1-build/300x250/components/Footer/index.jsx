import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import * as AdData from '@common/js/AdData.js'
import './styles.scss'
import '@size/images/bg_intro.jpg'
import '@size/images/black_texture.jpg'

class Footer extends Component {
	constructor(props) {
		super(props)
		console.warn('PROPS======', props)
	}

	render() {
		// let { logo, player, name, rank } = this.props.team
		return (
			<div className="footer">
				<img className="footer__bg" src={ImageManager.get('black_texture').src} alt="bg" />
				<img className="footer__mainlogo" src={ImageManager.get(AdData.mainLogo.imageId).src} alt="mainlogo" />
				<div className="footer__lockup">
					<div className="footer__tunein" style={{ fontFamily: AdData.fonts.reg }}>
						{AdData.dateMessage}
					</div>
					<div className="footer__networklogos">
						{AdData.networks.map((network) => (
							<img className="footer__networklogos-logo" src={network.url} alt="sponsorlogo" />
						))}
					</div>
					<div className="footer__sponsor">
						<span className="footer__sponsor-copy">{AdData.sponsorCopy}</span>
						<img className="footer__sponsor-logo" src={ImageManager.get(AdData.sponsorImage.imageId).src} alt="sponsorlogo" />
					</div>
				</div>
			</div>
		)
	}
}

export default Footer
