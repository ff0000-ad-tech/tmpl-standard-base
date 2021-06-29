import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

import './styles.scss'

class Matchup extends Component {
	constructor(props) {
		super(props)
		this.finalFontSize = 10
	}

	getImage = (name) => {
		return ImageManager.get(name).src
	}

	componentDidMount = () => {
		this.autoSizeMatchup(this.matchup)
	}

	autoSizeMatchup = (el) => {
		const w = el.getBoundingClientRect().width

		while (this.getTheWidth(el) > 300) {
			this.checkFontSize(el)
		}

		this.props.resizeComplete(this.finalFontSize)
	}

	getStyle = (el, style) => {
		return getComputedStyle(el).getPropertyValue(style)
	}

	getTheWidth = (el) => {
		return el.getBoundingClientRect().width
	}

	checkFontSize = (el) => {
		const fsString = this.getStyle(el, 'font-size')
		const fs = Number(fsString.substring(0, fsString.length - 2))
		const newFs = fs - 1
		el.style.fontSize = `${newFs}px`
		this.finalFontSize = newFs
	}

	setFontSize = (fs) => {
		this.matchup.style.fontSize = `${fs}px`
		this.finalFontSize = fs
	}

	getFontSize = (fs) => {
		return this.finalFontSize
	}

	getCurrentFontSize = () => {
		const c = this.container
		const styles = c.styles
		console.error('Styles======', styles)
	}

	render() {
		const { player1, player1ranking, player2, player2ranking, vs } = this.props.data

		return (
			<div className={this.props.className} ref={(el) => (this.matchup = el)}>
				<span className="ranking">{player1ranking}</span>
				<span>{player1}</span>
				<span className="vs">{vs}</span>
				<span className="ranking">{player2ranking}</span>
				<span>{player2}</span>
			</div>
		)
	}
}

export default Matchup
