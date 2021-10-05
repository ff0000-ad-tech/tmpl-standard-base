import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import './styles.scss'

class TuneinCorner extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { pos } = this.props
		return (
			<div className={`tuneincorner ${pos}`}>
				<div className="tuneincorner__innerleft">
					<div className="tuneincorner__innerleft-top" />
					<div className="tuneincorner__innerleft-bottom" />
				</div>
				<div className="tuneincorner__innerright">
					<div className="tuneincorner__innerright-top" />
					<div className="tuneincorner__innerright-bottom" />
				</div>
			</div>
		)
	}
}

export default TuneinCorner
