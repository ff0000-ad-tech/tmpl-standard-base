import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import { DpsManager } from '@ff0000-ad-tech/ad-dps'

// Components
import SingleHeader from '@size/components/SingleHeader'
import DoubleHeader from '@size/components/DoubleHeader'
import NetworkLogos from '@size/components/NetworkLogos'

// Assets
import '@common/fonts/template_font.woff'
import '@size/images/160over90-logo-small.png'

// Styles
import './styles.scss'

class Ad extends Component {
	constructor(props) {
		super(props)
		this.networklogos = ['espn', 'espn app', 'espn go']
	}

	render() {
		return (
			<div className="ad">
				<div className="ad__footer">
					<img className="ad__logo" src={ImageManager.get('160over90-logo-small').src} />
					<div className="ad__cta">TODO: CTA</div>
				</div>
				<NetworkLogos networks={this.networklogos} ref={(el) => (this.networklogos = el)} className="ad__networklogos" />
				{/*<SingleHeader ref={(el) => (this.singleheader = el)} />
				<DoubleHeader ref={(el) => (this.doubleheader = el)} />
				{adData.dpsdata.matchups.map((matchup, idx) => {
					console.error('IDX=', idx)
					return <Matchup key={`matchup${idx}`} data={matchup} style={{ position: 'absolute', left: '0px', top: idx * 40 + 'px' }} />
				})}
				*/}
				{adData.hasDoubleHeader ? <DoubleHeader className="ad__doubleheader" /> : <SingleHeader className="ad__singleheader" />}
			</div>
		)
	}
}
export default Ad
