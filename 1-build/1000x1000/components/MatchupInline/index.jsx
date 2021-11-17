import { h, render, Component, createRef } from 'preact'

// Hooks
import useTextFit from '@common/hooks/useTextFit'

// Styles
import './styles.scss'

class Matchup extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		useTextFit([this.matchup], 250, 10)
	}

	render() {
		const { homeTeamName, homeTeamRank, vsat, awayTeamName, awayTeamRank } = this.props

		return (
			<div className="matchupinline" ref={(el) => (this.matchup = el)}>
				<span className="matchupinline__rank">{homeTeamRank}</span>
				<span>{homeTeamName}</span>
				<span className="matchupinline__vsat">{vsat}</span>
				<span className="matchupinline__rank">{awayTeamRank}</span>
				<span>{awayTeamName}</span>
			</div>
		)
	}
}

export default Matchup
