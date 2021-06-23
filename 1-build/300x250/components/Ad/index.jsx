import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-control'

// Components
import SingleHeader from '@common/js/components/SingleHeader'
import DoubleHeader from '@common/js/components/DoubleHeader'
import NetworkLogos from '@common/js/components/NetworkLogos'

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
		const isDoubleHeader = adData.dpsdata.matchups.length > 1
		return (
			<div className="ad">
				<div className="ad__footer">
					<img className="ad__logo" src={this.getImage('160over90-logo-small')} />
					<div className="ad__cta">LEARN MORE</div>
				</div>
				<NetworkLogos networks={this.networklogos} ref={(el) => (this.networklogos = el)} className="ad__networklogos" />
				{/*<SingleHeader ref={(el) => (this.singleheader = el)} />
				<DoubleHeader ref={(el) => (this.doubleheader = el)} />
				{adData.dpsdata.matchups.map((matchup, idx) => {
					console.error('IDX=', idx)
					return <Matchup key={`matchup${idx}`} data={matchup} style={{ position: 'absolute', left: '0px', top: idx * 40 + 'px' }} />
				})}
				*/}
				{isDoubleHeader ? (
					<DoubleHeader matchups={adData.dpsdata.matchups} className="ad__matchuplockup" />
				) : (
					<SingleHeader matchups={adData.dpsdata.matchups} className="ad__matchuplockup" />
				)}
			</div>
		)
	}
}
export default Ad
