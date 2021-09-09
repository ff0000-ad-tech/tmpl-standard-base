import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import './styles.scss'

import Tunein from '../Tunein'
class Footer extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const mainLogoClass = adData.headline ? 'footer__mainlogo--withsponsor' : 'footer__mainlogo'
		const cssHeight = 20

		return (
			<div className="footer">
				<img className="footer__mainlogo" src={ImageManager.get('main_logo').src} />
				<div className="footer__lockup">
					<Tunein />
					<div className="footer__networklogos">
						{adData.networks.map((network) => (
							<img
								className="footer__networklogos-logo"
								src={network.url}
								alt="sponsorlogo"
								style={{ height: `${cssHeight * network.scaleFactor}px` }}
							/>
						))}
					</div>
				</div>
			</div>
		)
	}
}

export default Footer
