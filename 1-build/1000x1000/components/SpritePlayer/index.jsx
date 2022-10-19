import { h, render, Component, createRef } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'

import './styles.scss'

class SpritePlayer extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.spritesheetWidth = ImageManager.get(this.props.spritesheet).width
		this.frameWidth = this.spritesheetWidth / this.props.frames
		this.playerRef.style.width = `${this.frameWidth}px`

		this.tl = gsap.timeline()
		if (this.props.autoStart) {
			this.start()
		}
	}

	start() {
		const { duration, frames, loopCount, speed } = this.props
		const { spritesheetWidth } = this
		this.tl
			.to(this.spritesheetRef, {
				x: -spritesheetWidth + this.frameWidth,
				duration: duration,
				ease: `steps(${frames - 1})`,
				repeat: loopCount,
			})
			.timeScale(speed)
	}

	stop() {
		this.tl.kill()
	}

	pause() {
		this.tl.pause()
	}

	resume() {
		this.tl.resume()
	}

	render() {
		const { spritesheet } = this.props

		return (
			<div className={`spriteplayer ${this.props.className}`} ref={(el) => (this.playerRef = el)}>
				<img id="yap" src={ImageManager.get(spritesheet).src} ref={(el) => (this.spritesheetRef = el)} />
			</div>
		)
	}
}

export default SpritePlayer

SpritePlayer.defaultProps = {
	loopCount: 0,
	duration: 1,
	frames: 24,
	speed: 1,
	autoStart: false,
}
