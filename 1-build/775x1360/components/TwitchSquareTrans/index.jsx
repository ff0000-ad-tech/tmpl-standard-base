import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
// Images
import '@size/images/panelwipe.jpg'
// Styles
import './styles.scss'

class TwitchSquareTrans extends Component {
	constructor(props) {
		super(props)
		// Content visibile clip
		this.visibleClip = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
		// Content hidden clip
		this.hiddenClip = 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)'
		// Reverse Content hidden clip (cutout/background not visible)
		this.hiddenClipReverse = 'polygon(0% 0%, 0% 100%, 50% 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 100%, 100% 100%, 100% 0%)'
		// Reverse Content visible clip (cutout/background is visible)
		this.visibleClipReverse = 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 100% 100%, 100% 0%)'
		this.ease = 'expo.inout'
	}
	componentDidMount() {
		this.start()
	}
	restart() {
		const { containerRef } = this
		containerRef.style.clipPath = this.getInitialClip()
		this.start()
	}

	start() {
		const { type } = this.props
		switch (type) {
			case 'in':
				this.startIn()
				break
			case 'out':
				this.startOut()
				break
			case 'inout':
				this.startInOut()
				break
			default:
				break
		}
	}
	startIn() {
		const { containerRef, visibleClip, visibleClipReverse, ease } = this
		const { duration, reverse } = this.props

		if (reverse) {
			gsap.to(containerRef, { delay: 1, duration: duration, 'clip-path': visibleClipReverse, ease: ease })
			return
		}
		gsap.to(containerRef, { delay: 1, duration: duration, 'clip-path': visibleClip, ease: ease })
	}

	startOut() {
		const { containerRef, hiddenClip, hiddenClipReverse, ease } = this
		const { duration, reverse } = this.props

		if (reverse) {
			gsap.to(containerRef, { delay: 1, duration: duration, 'clip-path': hiddenClipReverse, ease: ease })
			return
		}
		gsap.to(containerRef, { delay: 1, duration: duration, 'clip-path': hiddenClip, ease: ease })
	}

	startInOut() {
		const { containerRef, visibleClip, ease, hiddenClip } = this
		const { duration, delay, reverse } = this.props

		this.startIn()
		gsap.delayedCall(delay, () => {
			this.startOut()
		})
	}

	getInitialClip() {
		const { type, reverse } = this.props
		const { visibleClip, visibleClipReverse, hiddenClip, hiddenClipReverse } = this

		if (type == 'out') {
			return reverse ? visibleClipReverse : visibleClip
		}
		return reverse ? hiddenClipReverse : hiddenClip
	}
	render() {
		const { children } = this.props

		return (
			<div className="twitchsquaretrans" style={{ clipPath: this.getInitialClip() }} ref={(el) => (this.containerRef = el)}>
				{children}
			</div>
		)
	}
}

export default TwitchSquareTrans

TwitchSquareTrans.defaultProps = {
	type: 'in',
	duration: 0.5,
	delay: 3,
}
