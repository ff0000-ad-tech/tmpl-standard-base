import { h, render, Component } from 'preact'
import { useRef, useEffect } from 'preact/hooks'

import './Square.scss'

class Square extends Component {
	render() {
		return <div className="square">SQUARE</div>
	}
}
export default Square
