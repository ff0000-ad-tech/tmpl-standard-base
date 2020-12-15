import { h, render, Component } from "preact";

class Build extends Component {
	render() {
		let time = new Date().toLocaleTimeString();
		return <span>{time}</span>
	}
}

export default Build