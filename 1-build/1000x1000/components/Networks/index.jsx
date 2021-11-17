/*	
	////////////////////////////////////////////////////////
	////////////////////// NOTE ////////////////////////////
	////////////////////////////////////////////////////////
	Use something like the code below, which should go in AdData.js
	to add a scaleFactor to each network object
	This is used to adjust sizing of logos on a per network logo basis.
	////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////


	////////////////////////////////////////////////////////
	//////////////////////// NETWORKS //////////////////////
	////////////////////////////////////////////////////////

	const getScale = (name) => {
		let scaleFactor = 1
		switch (name) {
			case 'ESPN':
			case 'ESPN+':
			case 'ESPN Play':
				scaleFactor = 0.5
				break
			default:
				break
		}
		return scaleFactor
	}
	// Get the networks from the velvet data
	const networksRaw = Velvet.get('networks')
	networks = networksRaw.map((elem) => {
		const scaleFactor = getScale(elem.name.value)
		// Add the image request
		const imageId = ImageManager.addImageRequest({
			src: elem.brand.value.url,
			imageId: elem.brand.value.name
		})
		console.warn(imageId)
		// Return object containing the image name for use with ImageManager.get() and the image url
		return {
			name: elem.name.value,
			url: elem.brand.value.url,
			imageId,
			scaleFactor
		}
	})*/

import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

// Styles
import './styles.scss'

class Networks extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="networks">
				{this.props.networks.map((network) => (
					<img
						className="networks__logo"
						src={network.url}
						alt={network.scaleFactor}
						style={{ height: `${this.props.logoHeight * network.scaleFactor}px` }}
					/>
				))}
			</div>
		)
	}
}

Networks.defaultProps = {
	logoHeight: 20,
}

export default Networks
