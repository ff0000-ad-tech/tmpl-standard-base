import { h, render, Component, createRef } from 'preact'

// Styles
import './styles.scss'

class Cta extends Component {
	constructor(props) {
		super(props)
	}

	over() {
		gsap.to('#cta1', { duration: 0.3, scale: 1.1, ease: 'expo.out' })
	}

	out() {
		gsap.to('#cta1', { duration: 0.3, scale: 1, ease: 'expo.out' })
	}

	click() {
		alert('You Clicked')
	}

	render() {
		return (
			<div className="cta" id="cta1" onMouseOver={this.over} onMouseLeave={this.out} onClick={this.click}>
				CTA TEXT
			</div>
		)
	}
}

export default Cta
