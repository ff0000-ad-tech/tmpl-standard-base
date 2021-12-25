import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
// Images
import '@size/images/panelwipe.jpg'
// Styles
import './styles.scss'

class TwitchPanelWipe extends Component {
	constructor(props) {
		super(props)
		this.state = {
			transLeft: null,
		}
	}

	restart() {
		// Reset image positions
		gsap.set(this.imgLeft, { x: 0 })
		gsap.set(this.imgRight, { x: 0 })
		// Set state to null to remove classes, then when complete delay calling start
		this.setState({ transLeft: null, transRight: null }, () => {
			gsap.delayedCall(1, () => {
				this.start()
			})
		})
	}

	start() {
		// Slide  images over
		gsap.to(this.imgLeft, { x: '-=20', duration: 0.5 })
		gsap.to(this.imgRight, { x: '-=50', duration: 0.5 })
		// Set state to add animation classes
		this.setState({ transLeft: 'twitchpanelwipe__leftout', transRight: 'twitchpanelwipe__rightout' })
	}
	render() {
		const { startClass, endClass } = this.props
		return (
			<div className="twitchpanelwipe">
				<div className={`twitchpanelwipe__panel-left ${this.state.transLeft}`} ref={(el) => (this.panelleft = el)}>
					<img className="twitchpanelwipe__img-left" src={ImageManager.get('panelwipe').src} ref={(el) => (this.imgLeft = el)} />
				</div>
				<div className={`twitchpanelwipe__panel-right ${this.state.transRight}`} ref={(el) => (this.panelright = el)}>
					<img className="twitchpanelwipe__img-right" src={ImageManager.get('panelwipe').src} ref={(el) => (this.imgRight = el)} />
				</div>
			</div>
		)
	}
}

export default TwitchPanelWipe
