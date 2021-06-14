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
	if (prevProps.config.videoId !== props.config.videoId) {
		return true
	}

	// Otherwise, a change in the start/end time playerVars also requires a player
	// update.
	const prevVars = prevProps.config.playerVars || {}
	const vars = props.config.playerVars || {}

	return prevVars.start !== vars.start || prevVars.end !== vars.end
}

/**
 * Neutralize API options that only require a video update, leaving only options
 * that require a player reset. The results can then be compared to see if a
 * player reset is necessary.
 *
 * @param {Object} config
 */
function filterResetOptions(config) {
	return {
		...config,
		height: 0,
		width: 0,
		playerVars: {
			controls: false,
			...config.playerVars,
			autoplay: 0,
			start: 0,
			end: 0,
		},
	}
}

/**
 * Check whether a `props` change should result in the player being reset.
 * The player is reset when the `props.config` change, except if the only change
 * is in the `start` and `end` playerVars, because a video update can deal with
 * those.
 *
 * @param {Object} prevProps
 * @param {Object} props
 */
function shouldResetPlayer(prevProps, props) {
	return false //prevProps.videoId !== props.videoId || !isEqual(filterResetOptions(prevProps.config), filterResetOptions(props.config))
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
		prevProps.config.width !== props.config.width ||
		prevProps.config.height !== props.config.height
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
		 * gets destroyed. Since Preact attempts to remove the element instantly
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
		// https://developers.google.com/youtube/player_parameters

		const config = this.props.config

		const playerConfig = {
			modestbranding: config.modestbranding || 1, // Show YouTube logo in control bar 1=do not show
			fs: config.fs || 0, // Show fullscreen button
			rel: config.rel || 0, // Show related videos
			iv_load_policy: config.iv_load_policy || 3, // Show video annotations 1=show, 3=do not show
			vq: config.vq || 'medium', // Video quality (Depricated?)
			enablejsapi: config.enablejsapi || 1, // Player to be controlled via IFrame Player API calls
			autoplay: config.autoplay || 1,
			controls: config.controls || 1,
			mute: config.mute || 0,
			...this.props.config,
		}

		this.internalPlayer = youTubePlayer(this.container, playerConfig)
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
	 * Preact should update this automatically but since the YouTube Player API
	 * replaced the DIV that is mounted by Preact we need to do this manually.
	 */
	updatePlayer = () => {
		this.internalPlayer.getIframe().then((iframe) => {
			if (this.props.id) iframe.setAttribute('id', this.props.id)
			else iframe.removeAttribute('id')
			if (this.props.className) iframe.setAttribute('class', this.props.className)
			else iframe.removeAttribute('class')
			if (this.props.config && this.props.config.width) iframe.setAttribute('width', this.props.config.width)
			else iframe.removeAttribute('width')
			if (this.props.config && this.props.config.height) iframe.setAttribute('height', this.props.config.height)
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
	 * Depending on the `config.playerVars.autoplay` this function uses one of two
	 * YouTube Player API methods to update the video.
	 */
	updateVideo = () => {
		if (typeof this.props.config.videoId === 'undefined' || this.props.config.videoId === null) {
			this.internalPlayer.stopVideo()
			return
		}

		// set queueing options
		let autoplay = false
		const config = {
			videoId: this.props.config.videoId,
		}
		if ('playerVars' in this.props.config) {
			autoplay = this.props.config.playerVars.autoplay === 1
			if ('start' in this.props.config.playerVars) {
				config.startSeconds = this.props.config.playerVars.start
			}
			if ('end' in this.props.config.playerVars) {
				config.endSeconds = this.props.config.playerVars.end
			}
		}

		// if autoplay is enabled loadVideoById
		if (autoplay) {
			this.internalPlayer.loadVideoById(config)
			return
		}
		// default behaviour just cues the video
		this.internalPlayer.cueVideoById(config)
	}

	refContainer = (container) => {
		this.container = container
	}

	render() {
		return (
			<div className={this.props.className}>
				<div id={this.props.id} className={this.props.playerClassName} ref={this.refContainer} />
			</div>
		)
	}
}

YouTube.defaultProps = {
	videoId: null,
	id: null,
	className: null,
	config: {},
	containerClassName: '',
	onReady: () => {},
	onError: () => {},
	onPlay: () => {},
	onPause: () => {},
	onEnd: () => {},
	onStateChange: () => {},
	onPlaybackRateChange: () => {},
	onPlaybackQualityChange: () => {},
}

export default YouTube
