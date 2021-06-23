import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-control'
import Matchup from '../Matchup'
import './styles.scss'

class MatchupLockup extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="matchuplockup" style={this.props.style}>
				{this.props.matchups.map((matchup, idx) => {
					console.error('IDX=', idx)
					return <Matchup key={`matchup${idx}`} data={matchup} style={{ top: idx * 40 + 'px' }} />
				})}
			</div>
		)
	}
}

export default MatchupLockup
