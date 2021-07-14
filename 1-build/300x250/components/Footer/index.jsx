import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import './styles.scss'
import '@size/images/bg_intro.jpg'
import '@size/images/black_texture.jpg'

class Footer extends Component {
	constructor(props) {
		super(props)
		console.warn('PROPS======', props)
	}

	render() {
		const mainLogoClass = adData.headline ? 'footer__mainlogo--withsponsor' : 'footer__mainlogo'

		return (
			<div className="footer">
				<img className="footer__bg" src={ImageManager.get('black_texture').src} alt="bg" />
				<div className="footer__content">
					<div className="footer__mainlogo-lockup">
						<img className={mainLogoClass} src={ImageManager.get(adData.mainLogo.imageId).src} alt="mainlogo" />
						{adData.headline ? (
							<div className="footer__mainlogo-sponsor">
								{adData.sponsorCopy ? <span className="footer__mainlogo-sponsorcopy">{adData.sponsorCopy}</span> : null}
								{adData.sponsorImage ? (
									<img className="footer__mainlogo-sponsorlogo" src={ImageManager.get(adData.sponsorImage.imageId).src} alt="sponsorlogo" />
								) : null}
							</div>
						) : null}
					</div>
					<div className="footer__lockup">
						{adData.headline ? (
							<div className="footer__tunein" style={{ fontFamily: adData.fonts.reg }}>
								{adData.headline}
							</div>
						) : null}
						<div
							className="footer__tunein"
							style={{ fontFamily: adData.fonts.reg }}
							dangerouslySetInnerHTML={{ __html: adData.dateMessage }}
						>
							{/* {adData.dateMessage} */}
						</div>
						<div className="footer__networklogos">
							{adData.networks.map((network) => (
								<img className="footer__networklogos-logo" src={network.url} alt="sponsorlogo" />
							))}
						</div>
						{!adData.headline ? (
							<div className="footer__sponsor">
								<span className="footer__sponsor-copy">{adData.sponsorCopy}</span>
								<img className="footer__sponsor-logo" src={ImageManager.get(adData.sponsorImage.imageId).src} alt="sponsorlogo" />
							</div>
						) : null}
					</div>
				</div>
			</div>
		)
	}
}

export default Footer
