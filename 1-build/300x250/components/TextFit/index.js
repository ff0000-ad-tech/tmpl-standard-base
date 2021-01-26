import { h, render, Component } from 'preact'

import './styles.scss'

class TextFit extends Component {
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

		if (this.element.scrollHeight > this.element.offsetHeight) {
			if (this.state.fontSizeNum >= props.minFontSize) {
				this.setState((prevState, props) => ({
					fontSizeNum: prevState.fontSizeNum - 1,
				}))
			}
		}

		if (this.element.scrollWidth > this.element.offsetWidth) {
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
				ref={(el) => (this.element = el)}
				className={this.props.className}
				style={{
					fontSize: `${this.state.fontSizeNum}px`,
				}}
			>
				{this.props.children}
			</div>
		)
	}
}

TextFit.defaultProps = {
	defaultFontSize: 60,
	minFontSize: 5,
	maxFontSize: Number.POSITIVE_INFINITY,
}

export default TextFit
