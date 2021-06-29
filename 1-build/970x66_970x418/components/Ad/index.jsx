import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

import Collapsed from '../Collapsed'
import Expanded from '../Expanded'

import './styles.scss'

import { ExpandableDcs } from '@ff0000-ad-tech/ad-control'
import { Expandable } from '@ff0000-ad-tech/ad-control'

class Ad extends Component {
	constructor(props) {
		super(props)

		console.warn(ExpandableDcs, Expandable)
		this.state = {
			isExpanded: adParams.expandable.startExpanded, // If the ad is currently expanded or not
			startExpanded: adParams.expandable.startExpanded, // Should the ad start in the expanded state
			introPlayerReady: false, // Is the intro player ready to start playing
			introHasPlayed: false, // Has the intro already played. If so, then only show regular expanded state
		}

		// Assign functions to each state of the expandcollapse process
		Expandable.init({
			target: this,
			extend: ExpandableDcs,
			expandStart: this.handleExpandStart,
			expandComplete: this.handleExpandComplete,
			collapseStart: this.handleCollapseStart,
			collapseComplete: this.handleCollapseFinish,
		})

		// If ad should start expanded then expand the ad
		if (this.state.startExpanded) {
			this.doExpand()
		}
	}

	onIntroPlayerReady = (player) => {
		// The intro player is ready so we can now get a reference to it
		this.introPlayer = player
	}

	onIntroPlayerPlay = () => {
		// The intro player is ready to play, so we can now do the initial expansion
		// console.warn('INTRO PLAYER READY SO EXPAND')
		// Expandable.expand()
	}

	onMainPlayerReady = (player) => {
		// The main player is ready so we can now get a reference to it
		// Used to start/stop the main player on expand/collapse
		this.mainPlayer = player
	}

	getImage = (name) => {
		return ImageManager.get(name).src
	}

	handleExpandStart = () => {
		const expandTime = this.state.startExpanded ? 0 : 0.5

		gsap.set('.expanded', { visibility: 'visible' })
		gsap.to('.expanded', { duration: expandTime, height: adParams.adHeight, ease: 'expo.out' })

		if (this.state.startExpanded) {
			this.setState({ startExpanded: false })
		}
		this.setState({ isExpanded: true })
	}

	handleExpandComplete = () => {
		this.expanded.handleExpand()
		// Autoplays the main video player if it exists and the intro player has already played
		if (this.mainPlayer && this.state.introHasPlayed) {
			this.mainPlayer.playVideo()
		}
	}

	handleCollapseStart = () => {
		gsap.to('.expanded', {
			duration: 0.5,
			height: adParams.expandable.collapsedHeight,
			ease: 'expo.out',
			onComplete: () => {
				gsap.set('.expanded', { visibility: 'hidden' })
				// Expandable.collapse
			},
		})
		this.setState({ isExpanded: false, introHasPlayed: true })
	}

	// When the collapse has complete we need to notify the Expanded component
	handleCollapseFinish = () => {
		this.expanded.handleCollapseComplete()
	}

	doCollapse = () => {
		console.warn('DO COLLAPSE')
		Expandable.collapse()
		this.setState({ isExpanded: false })
	}

	doExpand = () => {
		console.warn('DO EXPAND')
		Expandable.expand()
		this.setState({ isExpanded: true })
	}

	render() {
		return (
			<div className="a">
				<Collapsed handleExpand={this.doExpand} />
				<Expanded
					className="expanded"
					ref={(el) => (this.expanded = el)}
					isExpanded={this.state.isExpanded}
					handleCollapse={this.doCollapse}
					onIntroPlayerReady={this.onIntroPlayerReady}
					onIntroPlayerPlay={this.onIntroPlayerPlay}
					onMainPlayerReady={this.onMainPlayerReady}
				/>
			</div>
		)
	}
}
export default Ad
