import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import MatchupLockup from '../MatchupLockup'
import useConvertLineBreaks from '@common/hooks/useConvertLineBreaks'
import './styles.scss'

class DoubleHeader extends Component {
	constructor(props) {
		super(props)
	}

	getImage = (name) => {
		return ImageManager.get(name).src
	}

	resizeComplete = (finalFontSize) => {
		alert('Final Font Sizze==', finalFontSize)
	}

	render() {
		return (
			<div className="doubleheader">
				<div style={{ position: 'relative' }}>THIS IS A DOUBLE HEADER</div>
				<MatchupLockup
					className="doubleheader__matchuplockup"
					matchupClassName="matchup__double"
					resizeComplete={this.resizeComplete}
					matchups={[adData.timeblock['Matchup 1'], adData.timeblock['Matchup 2']]}
				/>
				<div className="doubleheader__tunein">{useConvertLineBreaks(adData.dateMessage)}</div>
			</div>
		)
	}
}

export default DoubleHeader
