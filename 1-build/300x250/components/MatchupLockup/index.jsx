import { h, render, Component, createRef } from 'preact'
import Matchup from '../Matchup'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

import './styles.scss'

class MatchupLockup extends Component {
	constructor(props) {
		super(props)
		this.finalFontSize = 200 //Default final font size. Needs to be high so all incoming font sizes will be smaller
	}

	getImage = (name) => {
		return ImageManager.get(name).src
	}

	// When a matchup gets resizes this function gets called via props
	// This function sets the font sizes of the matchups to be the
	// smallest font size that will allow all matchup text to fit
	resizeComplete = (fs) => {
		// If the font size getting passed in is smaller than the existing finalFontSize
		// Then we should reset finalFontSize to the new smaller number
		if (fs < this.finalFontSize) {
			this.finalFontSize = fs
		}

		// Map through each matchup ref and call its setFontSize method
		// This does the actual setting of the font sizes for the matchups
		this.props.matchups.map((matchup, idx) => {
			this[`matchup${idx}`].setFontSize(this.finalFontSize)
		})
	}

	render() {
		const { matchups } = this.props
		return (
			<div className={this.props.className} style={this.props.style}>
				{matchups.map((matchup, idx) => {
					const matchupNum = idx + 1
					return (
						<div>
							<Matchup
								ref={(el) => (this[`matchup${idx}`] = el)}
								key={`matchup${idx}`}
								matchup={matchup}
								className={this.props.matchupClassName}
								resizeComplete={this.resizeComplete}
							/>
							<div className="matchuplockup__players">
								<img src={this.getImage(adData[`matchup${matchupNum}Player1`].imageId)} width="50" />
								<img src={this.getImage(adData[`matchup${matchupNum}Player2`].imageId)} width="50" />
							</div>
						</div>
					)
				})}
			</div>
		)
	}
}

export default MatchupLockup
