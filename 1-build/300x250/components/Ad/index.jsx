import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-control'

// Components
import BrandLogo from '../BrandLogo'
import SingleHeader from '../SingleHeader'
import DoubleHeader from '../DoubleHeader'
import NetworkLogos from '../NetworkLogos'
import Matchup from '../Matchup'

// Assets
import '@common/fonts/template_font.woff'
import '@size/images/160over90-logo.png'
import '@size/images/160over90-logo-small.png'

// Styles
import './styles.scss'

class Ad extends Component {
	constructor(props) {
		super(props)
		this.networklogos = ['espn', 'espn app', 'espn go']
	}

	getImage = (name) => {
		return ImageManager.get(name).src
	}

	render() {
		return (
			<div className="ad">
				<BrandLogo ref={(el) => (this.brandlogo = el)} />
				<div className="ad__footer">
					<img className="ad__logo" src={this.getImage('160over90-logo-small')} />
					<div className="ad__cta">LEARN MORE</div>
				</div>
				{/*<SingleHeader ref={(el) => (this.singleheader = el)} />
				<DoubleHeader ref={(el) => (this.doubleheader = el)} />
				<NetworkLogos networks={this.networklogos} ref={(el) => (this.networklogos = el)} />
				*/}
				<Matchup />
			</div>
		)
	}
}
export default Ad
