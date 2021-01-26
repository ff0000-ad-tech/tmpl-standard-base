import { h, render, Component, createRef } from 'preact'

class TextFit extends Component {
	constructor(props) {
		super(props)

		this.state = {
			fontSizeNum: props.defaultFontSize,
		}
	}

	componentDidUpdate(prevProps, prevState) {
		console.warn('COMPONENT DID UPDATE CALLED')
		if (prevState.fontSizeNum !== this.state.fontSizeNum) {
			this.resize()
		}
	}

	componentDidMount() {
		console.warn('COMPONENT DID MOUNT CALLED')
		this.resize()
	}

	resize() {
		console.warn('RESIZE CALLED')
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
		console.warn('RENDER HAPPENED')
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
