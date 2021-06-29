import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import MatchupLockup from '../MatchupLockup'
import useConvertLineBreaks from '@common/hooks/useConvertLineBreaks'

import './styles.scss'

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
				<MatchupLockup
					className="singleheader__matchuplockup"
					matchupClassName="matchup__single"
					matchups={adData.dpsdata.matchups}
					resizeComplete={this.resizeComplete}
				/>
				<div className="singleheader__tunein">{useConvertLineBreaks(adData.dateMessage)}</div>
			</div>
		)
	}
}

export default SingleHeader
