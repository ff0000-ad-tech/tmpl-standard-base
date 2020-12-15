import { h, render, Component } from "preact";

class Build extends Component {
	componentDidMount = () => {
		setInterval(() => {
			this.setState({
				time: new Date().toLocaleTimeString()
			})
		}, 1000)
	}
	render() {
		return <span>{this.state.time}</span>
	}
}

export default Build