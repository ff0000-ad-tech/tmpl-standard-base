import { h, render, Component, createRef } from 'preact'
import Ad from '../Ad'

class Control extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount = () => {
		window.hidePreloader()
	}

	render() {
		return <Ad ref={(el) => (this.adRef = el)} />
	}
}
export default Control
