import { h, render, Component } from 'preact'

import './styles.scss'

class TextFit extends Component {
	constructor(props) {
		super(props)
		// fontSizeNum: If you don't pass in a maxFontSize then the font's initial size will be
		// 				what is passed in via props for initialFontSize
		// finalHeight: store the final height of the text after resize in state
		this.state = {
			fontSizeNum: props.maxFontSize ? props.maxFontSize : props.initialFontSize,
			finalHeight: null,
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.fontSizeNum !== this.state.fontSizeNum) {
			this.resize()
		}
	}

	componentDidMount() {
		this.setState({ finalHeight: this.element.clientHeight })
		this.resize()
	}

	resize() {
		const props = this.props
		let tooBig = false
		if (this.element.scrollHeight > this.element.clientHeight) {
			if (this.state.fontSizeNum >= props.minFontSize) {
				tooBig = true
			}
		}
		if (this.element.scrollWidth > this.element.clientWidth) {
			if (this.state.fontSizeNum >= props.minFontSize) {
				tooBig = true
			}
		}
		if (tooBig) {
			this.setState((prevState, props) => ({
				fontSizeNum: prevState.fontSizeNum - 1,
			}))
		}
		// set width/height to auto so that the dimensions clamp to the final text-fit
		else {
			this.element.style = 'width: auto; height: auto;'
			const fh = this.element.clientHeight
			this.setState({ finalHeight: fh })
		}
	}

	render() {
		return (
			<div
				className={this.props.className}
				ref={(el) => (this.container = el)}
				style={{
					boxSizing: 'border-box',
					fontSize: `${this.state.fontSizeNum}px`,
					height: this.state.finalHeight,
				}}
			>
				<div
					ref={(el) => (this.element = el)}
					style={{
						width: '100%',
						height: '100%'
					}}
					dangerouslySetInnerHTML={{ __html: this.props.children }}
				></div>
			</div>
		)
	}
}

TextFit.defaultProps = {
	initialFontSize: 80,
	minFontSize: 5,
}

export default TextFit