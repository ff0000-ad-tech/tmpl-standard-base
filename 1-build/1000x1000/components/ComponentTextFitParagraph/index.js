import { h, render, Component } from 'preact'

import './styles.scss'

class ComponentTextFitParagraph extends Component {
	constructor(props) {
		super(props)

		this.state = {
			fontSizeNum: props.defaultFontSize,
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.fontSizeNum !== this.state.fontSizeNum) {
			this.resize()
		}
	}

	componentDidMount() {
		this.resize()
	}

	resize() {
		const props = this.props

		if (this.element.scrollHeight > this.element.clientHeight) {
			if (this.state.fontSizeNum >= props.minFontSize) {
				this.setState((prevState, props) => ({
					fontSizeNum: prevState.fontSizeNum - 1,
				}))
			}
		}

		if (this.element.scrollWidth > this.element.clientWidth) {
			if (this.state.fontSizeNum >= props.minFontSize) {
				this.setState((prevState, props) => ({
					fontSizeNum: prevState.fontSizeNum - 1,
				}))
			}
		}
	}

	render() {
		return (
			<div
				className="textfitparagraph__box"
				style={{
					boxSizing: 'border-box',
					fontSize: `${this.state.fontSizeNum}px`,
				}}
			>
				<div
					ref={(el) => (this.element = el)}
					style={{
						width: '100%',
						height: '100%',
					}}
				>
					{this.props.children}
				</div>
			</div>
		)
	}
}

ComponentTextFitParagraph.defaultProps = {
	defaultFontSize: 60,
	minFontSize: 5,
	maxFontSize: Number.POSITIVE_INFINITY,
}

export default ComponentTextFitParagraph