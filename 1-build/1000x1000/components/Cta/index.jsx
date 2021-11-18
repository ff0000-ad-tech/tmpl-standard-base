import { h, render, Component, createRef } from 'preact'

// Hooks
import useTextFit from '@common/hooks/useTextFit'

// Styles
import './styles.scss'

class Cta extends Component {
	constructor(props) {
		super(props)
	}

	stripPx(str) {
		return parseInt(str.substring(0, str.length - 2))
	}

	componentDidMount() {
		const { width, minFont, fit } = this.props

		if (fit) {
			useTextFit([this.ctaRef], this.stripPx(width), parseInt(minFont))
			this.ctaRef.style.width = width
		}
	}

	over = () => {
		gsap.to(this.ctaRef, { duration: 0.3, scale: 1.1, ease: 'expo.out' })
	}

	out = () => {
		gsap.to(this.ctaRef, { duration: 0.3, scale: 1, ease: 'expo.out' })
	}

	click = () => {
		alert('You Clicked')
	}

	render() {
		const { text } = this.props
		return (
			<div className="cta" id="cta1" onMouseOver={this.over} onMouseLeave={this.out} onClick={this.click} ref={(el) => (this.ctaRef = el)}>
				{text}
			</div>
		)
	}
}

export default Cta
