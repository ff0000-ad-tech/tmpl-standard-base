import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

import './styles.scss'

class Header extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		let { team, side } = this.props
		return (
			<div className="header">
				{adData.headline ? <div className="header__headline">{adData.headline}</div> : null}
				<div className="header__sponsor-container">
					{adData.sponsorCopy ? <div className="header__sponsor-copy">{adData.sponsorCopy}</div> : null}
					<div>
						{adData.sponsorImage ? <img className="header__sponsor-image" src={ImageManager.get(adData.sponsorImage).src} /> : null}
					</div>
				</div>
			</div>
		)
	}
}

export default Header
