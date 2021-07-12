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
		const mainLogoClass = AdData.headline ? 'footer__mainlogo--withsponsor' : 'footer__mainlogo'
		// let { logo, player, name, rank } = this.props.team
		return (
			<div className="footer">
				<img className="footer__bg" src={ImageManager.get('black_texture').src} alt="bg" />
				<div className="footer__mainlogo-lockup">
					<img className={mainLogoClass} src={ImageManager.get(AdData.mainLogo.imageId).src} alt="mainlogo" />
					{AdData.headline ? (
						<div className="footer__mainlogo-sponsor">
							{AdData.sponsorCopy ? <span className="footer__mainlogo-sponsorcopy">{AdData.sponsorCopy}</span> : null}
							{AdData.sponsorImage ? (
								<img className="footer__mainlogo-sponsorlogo" src={ImageManager.get(AdData.sponsorImage.imageId).src} alt="sponsorlogo" />
							) : null}
						</div>
					) : null}
				</div>
				<div className="footer__lockup">
					{AdData.headline ? (
						<div className="footer__tunein" style={{ fontFamily: AdData.fonts.reg }}>
							{AdData.headline}
						</div>
					) : null}
					<div className="footer__tunein" style={{ fontFamily: AdData.fonts.reg }} dangerouslySetInnerHTML={{ __html: AdData.dateMessage }}>
						{/* {AdData.dateMessage} */}
					</div>
					<div className="footer__networklogos">
						{AdData.networks.map((network) => (
							<img className="footer__networklogos-logo" src={network.url} alt="sponsorlogo" />
						))}
					</div>
					{!AdData.headline ? (
						<div className="footer__sponsor">
							<span className="footer__sponsor-copy">{AdData.sponsorCopy}</span>
							<img className="footer__sponsor-logo" src={ImageManager.get(AdData.sponsorImage.imageId).src} alt="sponsorlogo" />
						</div>
					) : null}
				</div>
			</div>
		)
	}
}

export default Footer
