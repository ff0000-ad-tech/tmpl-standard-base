import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

import './styles.scss'

class NetworkLogos extends Component {
	constructor(props) {
		super(props)
		this.networks = this.props.networks || []
	}

	getImage = (name) => {
		return ImageManager.get(name).src
	}

	render() {
		return (
			<div className="networklogos" className={this.props.className}>
				<div className="networklogos">
					{this.networks.map((network) => {
						return (
							<div key={network} className="networklogos__logo">
								{network}
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default NetworkLogos
