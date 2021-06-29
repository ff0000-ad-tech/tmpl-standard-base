import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import { YouTube } from '@ff0000-ad-tech/ad-control'

import './styles.scss'

import '@common/fonts/template_font.woff'
import '@size/images/expanded_bg.jpg'
import '@size/images/expanded_cta.png'
import '@size/images/expanded_cta_hover.png'
import '@size/images/collapse_btn.svg'

class Expanded extends Component {
	constructor(props) {
		super(props)

		// isCollapsing: Is a flag to know if the ad is in the process of collapsing
		// We need to know this because we do NOT want to trigger another collapse
		// when the intro video is finished and the ad auto collapses on complete.
		// If the users mouse is on the ad and it auto collapses, then the onMouseLeave
		// would trigger another collapse.
		this.state = {
			isCollapsing: false,
			rolloutFunction: this.handleRolloutCollapse,
		}
	}

	getImage = (name) => {
		return ImageManager.get(name).src
	}

	handleClickThrough = () => {
		Network.exit(expandedExit)
		if (this.state.isCollapsing === true) {
			return
		}
		this.handleCollapse()
	}

	handleCollapse = () => {
		// Set the isCollapsing flag to true since we are starting a collapse
		// We also set rolloutFunction to null because we do not want anything
		// to happen when we roll out of the ad while it is collapsing
		this.setState({ isCollapsing: true, rolloutFunction: null })

		if (this.introPlayer) {
			this.introPlayer.stopVideo()
			gsap.set(this.introPlayerRef.base, { delay: 1, display: 'none' })
		}
		if (this.mainPlayer) {
			this.mainPlayer.stopVideo()
		}
		this.props.handleCollapse()
	}

	// Gets called from the Ad component when expansion is complete so we can
	// activate the rollout function again
	handleExpand = () => {
		this.setState({ rolloutFunction: this.handleRolloutCollapse })
	}

	// Gets calls from the Ad component once the collapse animation is complete.
	// Here we need to reset the flag to false so the onMouseLeave will close
	// the ad while in the regular expanded state (meaning, not playing the intro)
	handleCollapseComplete = () => {
		this.setState({ isCollapsing: false })
	}

	// When the user rolls off the ad we need to collapse it, but we do not want to
	// trigger another collapse if the ad is already collapsing. So, we need to
	// check the isCollapsing flag
	handleRolloutCollapse = () => {
		if (this.state.isCollapsing === true) {
			return
		} else {
			this.handleCollapse()
		}
	}

	// When the use clicks to collapse the ad we need to collapse it, but we do not want to
	// trigger another collapse if the ad is already collapsing. So, we need to
	// check the isCollapsing flag
	handleCollapseBtnClick = () => {
		if (this.state.isCollapsing === true) {
			return
		}
		this.handleCollapse()
	}

	handleCTARollOver = (e) => {
		gsap.to('.expanded__cta-hover', { duration: 0.2, opacity: 1, ease: 'power2.out' })
	}

	handleCTARollOut = () => {
		gsap.to('.expanded__cta-hover', { duration: 0.2, opacity: 0, ease: 'power2.out' })
	}

	onIntroPlayerEnd = () => {
		gsap.set(this.introPlayerRef.base, { delay: 1, display: 'none' })
		Enabler.counter('YTP Intro Video Complete', true)
		this.handleCollapse()
	}

	onIntroPlayerReady = (e) => {
		this.introPlayer = e.target
		this.props.onIntroPlayerReady(e.target)
	}

	onIntroPlayerPlay = () => {
		this.props.onIntroPlayerPlay()
		Enabler.counter('YTP Intro Video Play', true)
	}

	onMainPlayerPlay = () => {
		Enabler.counter('YTP Main Video Play', true)
	}

	onMainPlayerReady = (e) => {
		this.mainPlayer = e.target
		this.props.onMainPlayerReady(e.target)
	}

	onMainPlayerPause = (e) => {
		Enabler.counter('YTP Main Video Pause', true)
	}

	onMainPlayerEnd = (e) => {
		Enabler.counter('YTP Main Video Complete', true)
	}

	render() {
		const introYoutubePlayerConfig = {
			videoId: adParams.expandable.introVideoID,
			height: adParams.adHeight,
			width: adParams.adWidth,
			playerVars: {
				autoplay: 1,
				controls: 0,
				mute: 0,
			},
		}
		const mainYoutubePlayerConfig = {
			videoId: adParams.expandable.mainVideoID,
			height: 200,
			width: 400,
			playerVars: {
				autoplay: 0,
				controls: 1,
				mute: 0,
			},
		}

		return (
			<div className="expanded" onClick={this.handleClick} onMouseLeave={this.state.rolloutFunction}>
				<div className="expanded__container">
					<img className="expanded__bg" src={this.getImage('expanded_bg')} alt="bg" />
					<div className="expanded__clickthrough" onClick={this.handleClickThrough} />
					{adParams.expandable.hasMainVideo ? (
						<YouTube
							className="expanded__mainyoutubeplayer"
							config={mainYoutubePlayerConfig}
							onReady={this.onMainPlayerReady}
							onPlay={this.onMainPlayerPlay}
							onPause={this.onMainPlayerPause}
							onEnd={this.onMainPlayerEnd}
						/>
					) : null}

					<img
						className="expanded__cta"
						src={this.getImage('expanded_cta')}
						alt="cta"
						onMouseEnter={this.handleCTARollOver}
						onMouseLeave={this.handleCTARollOut}
						onClick={this.handleClickThrough}
					/>
					<img
						className="expanded__cta-hover"
						src={this.getImage('expanded_cta_hover')}
						alt="hover"
						onMouseEnter={this.handleCTARollOver}
						onMouseLeave={this.handleCTARollOut}
						onClick={this.handleClickThrough}
					/>
					{adParams.expandable.hasIntroVideo ? (
						<YouTube
							ref={(el) => (this.introPlayerRef = el)}
							className="expanded__introyoutubeplayer"
							config={introYoutubePlayerConfig}
							onEnd={this.onIntroPlayerEnd}
							onPlay={this.onIntroPlayerPlay}
							onReady={this.onIntroPlayerReady}
						/>
					) : null}
					<div className="expanded__collapse-btn" onClick={this.handleCollapseBtnClick}>
						<img className="expanded__collapse-btn-img" src={this.getImage('collapse_btn')} alt="collapse" />
					</div>
				</div>
			</div>
		)
	}
}
export default Expanded
