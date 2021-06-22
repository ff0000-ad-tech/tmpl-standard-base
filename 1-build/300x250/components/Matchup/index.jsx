import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-control'

import './styles.scss'

class Matchup extends Component {
	constructor(props) {
		super(props)
	}

	getImage = (name) => {
		return ImageManager.get(name).src
	}

	componentDidMount = () => {
		const c = this.container
		const w = c.getBoundingClientRect().width

		while (this.getTheWidth() > 300) {
			this.checkFontSize()
		}
	}

	getStyle = (el, style) => {
		return getComputedStyle(el).getPropertyValue(style)
	}

	getTheWidth = () => {
		const c = this.container
		const w = c.getBoundingClientRect().width
		console.warn('GET THE WIDTH() ', w)
		return w
	}

	checkFontSize = () => {
		const c = this.container
		const fsString = this.getStyle(c, 'font-size')
		const fs = Number(fsString.substring(0, fsString.length - 2))
		const newFs = fs - 1
		c.style.fontSize = `${newFs}px`
		console.warn('CheckFontSizeStyle===', this.getStyle(c, 'font-size'))
	}

	getCurrentFontSize = () => {
		const c = this.container
		const styles = c.styles
		console.error('Styles======', styles)
	}

	render() {
		return (
			<div className="matchup">
				<div className="matchup__container" ref={(el) => (this.container = el)} styles={{ fontSize: '33px' }}>
					<span className="ranking">1</span>
					<span>Player 1 Here</span>
					<span className="vs">VS</span>
					<span className="ranking">5</span>
					<span>Player 2 OK YAP</span>
				</div>
			</div>
		)
	}
}

export default Matchup
