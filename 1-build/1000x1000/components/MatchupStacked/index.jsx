import { h, render, Component, createRef } from 'preact'

// Hooks
import useTextFit from '@common/hooks/useTextFit'

// Styles
import './styles.scss'

class MatchupStacked extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		useTextFit([this.matchup], 200, 10)
	}

	render() {
		const { homeTeamName, homeTeamRank, vsat, awayTeamName, awayTeamRank } = this.props

		return (
			<div className="matchupstacked" ref={(el) => (this.matchup = el)}>
				<div>
					{homeTeamRank ? <span className="matchupstacked__rank">{homeTeamRank}</span> : null}
					<span>{homeTeamName}</span>
				</div>
				<span className="matchupstacked__vsat">{vsat}</span>
				<div>
					{awayTeamRank ? <span className="matchupstacked__rank">{awayTeamRank}</span> : null}
					<span>{awayTeamName}</span>
				</div>
			</div>
		)
	}
}

export default MatchupStacked
