import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-control'
import MatchupLockup from '../MatchupLockup'

import './styles.scss'
import '@size/images/160over90-logo.png'

class SingleHeader extends Component {
	constructor(props) {
		super(props)
	}

	getImage = (name) => {
		return ImageManager.get(name).src
	}

	render() {
		return (
			<div className="singleheader">
				THIS IS A SINGLE HEADER
				<MatchupLockup matchups={adData.dpsdata.matchups} />
			</div>
		)
	}
}

export default SingleHeader
