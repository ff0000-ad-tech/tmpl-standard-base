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
		const { panelLeftContent, panelRightContent } = this

		// Reset image positions
		gsap.set(panelLeftContent, { x: 0 })
		gsap.set(panelRightContent, { x: 0 })

		// Set state to null to remove classes, then when complete delay calling start
		this.setState({ transLeft: null, transRight: null }, () => {
			gsap.delayedCall(1, () => {
				this.start()
			})
		})
	}

	start() {
		const { panelLeftContent, panelRightContent } = this

		// Slide  images over
		gsap.to(panelLeftContent, { x: '-=20', duration: 0.5 })
		gsap.to(panelRightContent, { x: '-=50', duration: 0.5 })

		// Set state to add animation classes
		this.setState({ transLeft: 'twitchpanelwipe__leftout', transRight: 'twitchpanelwipe__rightout' })
	}
	render() {
		const { children } = this.props
		return (
			<div className="twitchpanelwipe">
				<div className={`twitchpanelwipe__panel-left ${this.state.transLeft}`} ref={(el) => (this.panelleft = el)}>
					<div className="twitchpanelwipe__panel-content" ref={(el) => (this.panelLeftContent = el)}>
						{children}
					</div>
				</div>
				<div className={`twitchpanelwipe__panel-right ${this.state.transRight}`} ref={(el) => (this.panelright = el)}>
					<div className="twitchpanelwipe__panel-content" ref={(el) => (this.panelRightContent = el)}>
						{children}
					</div>
				</div>
			</div>
		)
	}
}

export default TwitchPanelWipe
