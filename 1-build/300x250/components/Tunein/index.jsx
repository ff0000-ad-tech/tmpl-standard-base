import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import './styles.scss'
import TuneinCorner from '../TuneinCorner'
class Tunein extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="tunein">
				{this.props.uselines ? (
					<div className="tunein__topbottom">
						<TuneinCorner pos="tl" />
						<TuneinCorner pos="tr" />
					</div>
				) : null}

				<div className="tunein__copy-container">
					<div className="tunein__copy" style={{ fontFamily: adData.fonts.reg }} dangerouslySetInnerHTML={{ __html: adData.dateMessage }} />
				</div>
				{this.props.uselines ? (
					<div className="tunein__topbottom">
						<TuneinCorner pos="bl" />
						<TuneinCorner pos="br" />
					</div>
				) : null}
			</div>
		)
	}
}

export default Tunein
