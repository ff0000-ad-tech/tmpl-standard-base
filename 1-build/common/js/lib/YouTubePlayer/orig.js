import { h, render, Component, createRef } from 'preact'
// import isEqual from 'fast-deep-equal'
import youTubePlayer from 'youtube-player'

/**
 * Check whether a `props` change should result in the video being updated.
 *
 * @param {Object} prevProps
 * @param {Object} props
 */
function shouldUpdateVideo(prevProps, props) {
	// A changing video should always trigger an update
	if (prevProps.videoId !== props.videoId) {
		return true
	}

	// Otherwise, a change in the start/end time playerVars also requires a player
	// update.
	const prevVars = prevProps.opts.playerVars || {}
	const vars = props.opts.playerVars || {}

	return prevVars.start !== vars.start || prevVars.end !== vars.end
}

/**
 * Neutralize API options that only require a video update, leaving only options
 * that require a player reset. The results can then be compared to see if a
 * player reset is necessary.
 *
 * @param {Object} opts
 */
function filterResetOptions(opts) {
	return {
		...opts,
		height: 0,
		width: 0,
		playerVars: {
			controls: false,
			...opts.playerVars,
			autoplay: 0,
			start: 0,
			end: 0,
		},
	}
}

/**
 * Check whether a `props` change should result in the player being reset.
 * The player is reset when the `props.opts` change, except if the only change
 * is in the `start` and `end` playerVars, because a video update can deal with
 * those.
 *
 * @param {Object} prevProps
 * @param {Object} props
 */
function shouldResetPlayer(prevProps, props) {
	return false //prevProps.videoId !== props.videoId || !isEqual(filterResetOptions(prevProps.opts), filterResetOptions(props.opts))
}

/**
 * Check whether a props change should result in an id or className update.
 *
 * @param {Object} prevProps
 * @param {Object} props
 */
function shouldUpdatePlayer(prevProps, props) {
	return (
		prevProps.id !== props.id ||
		prevProps.className !== props.className ||
		prevProps.opts.width !== props.opts.width ||
		prevProps.opts.height !== props.opts.height
	)
}

class YouTube extends Component {
	/**
	 * Expose PlayerState constants for convenience. These constants can also be
	 * accessed through the global YT object after the YouTube IFrame API is instantiated.
	 * https://developers.google.com/youtube/iframe_api_reference#onStateChange
	 */
	static PlayerState = {
		UNSTARTED: -1,
		ENDED: 0,
		PLAYING: 1,
		PAUSED: 2,
		BUFFERING: 3,
		CUED: 5,
	}

	constructor(props) {
		super(props)

		this.container = null
		this.internalPlayer = null
	}

	componentDidMount() {
		this.createPlayer()
	}

	componentDidUpdate(prevProps) {
		if (shouldUpdatePlayer(prevProps, this.props)) {
			this.updatePlayer()
		}

		if (shouldResetPlayer(prevProps, this.props)) {
			this.resetPlayer()
		}

		if (shouldUpdateVideo(prevProps, this.props)) {
			this.updateVideo()
		}
	}

	componentWillUnmount() {
		/**
		 * Note: The `youtube-player` package that is used promisifies all YouTube
		 * Player API calls, which introduces a delay of a tick before it actually
		 * gets destroyed. Since React attempts to remove the element instantly
		 * this method isn't quick enough to reset the container element.
		 */
		this.internalPlayer.destroy()
	}

	/**
	 * https://developers.google.com/youtube/iframe_api_reference#onReady
	 *
	 * @param {Object} event
	 *   @param {Object} target - player object
	 */
	onPlayerReady = (event) => this.props.onReady(event)

	/**
	 * https://developers.google.com/youtube/iframe_api_reference#onError
	 *
	 * @param {Object} event
	 *   @param {Integer} data  - error type
	 *   @param {Object} target - player object
	 */
	onPlayerError = (event) => this.props.onError(event)

	/**
	 * https://developers.google.com/youtube/iframe_api_reference#onStateChange
	 *
	 * @param {Object} event
	 *   @param {Integer} data  - status change type
	 *   @param {Object} target - actual YT player
	 */
	onPlayerStateChange = (event) => {
		this.props.onStateChange(event)
		switch (event.data) {
			case YouTube.PlayerState.ENDED:
				this.props.onEnd(event)
				break

			case YouTube.PlayerState.PLAYING:
				this.props.onPlay(event)
				break

			case YouTube.PlayerState.PAUSED:
				this.props.onPause(event)
				break

			default:
		}
	}

	/**
	 * https://developers.google.com/youtube/iframe_api_reference#onPlaybackRateChange
	 *
	 * @param {Object} event
	 *   @param {Float} data    - playback rate
	 *   @param {Object} target - actual YT player
	 */
	onPlayerPlaybackRateChange = (event) => this.props.onPlaybackRateChange(event)

	/**
	 * https://developers.google.com/youtube/iframe_api_reference#onPlaybackQualityChange
	 *
	 * @param {Object} event
	 *   @param {String} data   - playback quality
	 *   @param {Object} target - actual YT player
	 */
	onPlayerPlaybackQualityChange = (event) => this.props.onPlaybackQualityChange(event)

	/**
	 * Initialize the YouTube Player API on the container and attach event handlers
	 */
	createPlayer = () => {
		// do not attempt to create a player server-side, it won't work
		if (typeof document === 'undefined') return
		// create player
		const playerOpts = {
			...this.props.opts,
			// preload the `videoId` video if one is already given
			videoId: this.props.videoId,
		}
		this.internalPlayer = youTubePlayer(this.container, playerOpts)
		// attach event handlers
		this.internalPlayer.on('ready', this.onPlayerReady)
		this.internalPlayer.on('error', this.onPlayerError)
		this.internalPlayer.on('stateChange', this.onPlayerStateChange)
		this.internalPlayer.on('playbackRateChange', this.onPlayerPlaybackRateChange)
		this.internalPlayer.on('playbackQualityChange', this.onPlayerPlaybackQualityChange)
	}

	/**
	 * Shorthand for destroying and then re-creating the YouTube Player
	 */
	resetPlayer = () => this.internalPlayer.destroy().then(this.createPlayer)

	/**
	 * Method to update the id and class of the YouTube Player iframe.
	 * React should update this automatically but since the YouTube Player API
	 * replaced the DIV that is mounted by React we need to do this manually.
	 */
	updatePlayer = () => {
		this.internalPlayer.getIframe().then((iframe) => {
			if (this.props.id) iframe.setAttribute('id', this.props.id)
			else iframe.removeAttribute('id')
			if (this.props.className) iframe.setAttribute('class', this.props.className)
			else iframe.removeAttribute('class')
			if (this.props.opts && this.props.opts.width) iframe.setAttribute('width', this.props.opts.width)
			else iframe.removeAttribute('width')
			if (this.props.opts && this.props.opts.height) iframe.setAttribute('height', this.props.opts.height)
			else iframe.removeAttribute('height')
		})
	}

	/**
	 *  Method to return the internalPlayer object.
	 */
	getInternalPlayer = () => {
		return this.internalPlayer
	}

	/**
	 * Call YouTube Player API methods to update the currently playing video.
	 * Depending on the `opts.playerVars.autoplay` this function uses one of two
	 * YouTube Player API methods to update the video.
	 */
	updateVideo = () => {
		if (typeof this.props.videoId === 'undefined' || this.props.videoId === null) {
			this.internalPlayer.stopVideo()
			return
		}

		// set queueing options
		let autoplay = false
		const opts = {
			videoId: this.props.videoId,
		}
		if ('playerVars' in this.props.opts) {
			autoplay = this.props.opts.playerVars.autoplay === 1
			if ('start' in this.props.opts.playerVars) {
				opts.startSeconds = this.props.opts.playerVars.start
			}
			if ('end' in this.props.opts.playerVars) {
				opts.endSeconds = this.props.opts.playerVars.end
			}
		}

		// if autoplay is enabled loadVideoById
		if (autoplay) {
			this.internalPlayer.loadVideoById(opts)
			return
		}
		// default behaviour just cues the video
		this.internalPlayer.cueVideoById(opts)
	}

	refContainer = (container) => {
		this.container = container
	}

	render() {
		return (
			<div className={this.props.containerClassName}>
				<div id={this.props.id} className={this.props.className} ref={this.refContainer} />
			</div>
		)
	}
}

// YouTube.defaultProps = {
// 	videoId: null,
// 	id: null,
// 	className: null,
// 	opts: {},
// 	containerClassName: '',
// 	onReady: () => {},
// 	onError: () => {},
// 	onPlay: () => {},
// 	onPause: () => {},
// 	onEnd: () => {},
// 	onStateChange: () => {},
// 	onPlaybackRateChange: () => {},
// 	onPlaybackQualityChange: () => {},
// }

export default YouTube
