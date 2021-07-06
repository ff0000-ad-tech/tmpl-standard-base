/**
 * @npmpackage
 * @class DcsUtils
 * @desc
 * Doubleclick Studio utilities. <br>
 * Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
 * <br>
 * <codeblock>
 * import { DscUtils } from 'ad-utils'
 * </codeblock>
 */

export function counterWithVars(str, impression) {
	if (impression) Enabler.reportCustomVariableCount1(str)
	else Enabler.reportCustomVariableCount2(str)
}

/**
 * @memberOf DcsUtils
 * @method addVideoMetrics
 * @param {VideoPlayer} player
 * 	The video player instance to track
 * @param {string} message
 * 	The message passed as the metric, defaults to 'Video Report 1'
 * @desc
 * 	Adds DoubleClick Tracking metrics to a video player.
 * @example
 * DcsUtils.addVideoMetrics(View.main.videoPlayer, 'Intro Video')
 */
export function addVideoMetrics(player, message) {
	Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
		studio.video.Reporter.attach(message || 'Video Report 1', player.screen != undefined ? player.screen : player)
	})
}

/**
 * @memberOf DcsUtils
 * @method addYouTubeVideoMetrics
 * @param {VideoPlayer} player
 * The YouTubePlayer instance to track
 * @desc
 * Adds DoubleClick Tracking metrics to a YouTube video player.  The Enabler counter calls are added to the
 * index when a YouTubePlayer is added through Ad App.<br>
 * If manually adding a YouTubePlayer/tracking, the required global vars are:<br>
 * <codeblock>
 * var trackVideoPlay = function() {
 * 	Enabler.counter('YTP Video Play', true)
 * }
 * var trackVideoReplay = function() {
 * 	Enabler.counter('YTP Video Replay', true)
 * }
 * var trackVideoPause = function() {
 * 	Enabler.counter('YTP Video Pause', true)
 * }
 * var trackVideoComplete = function() {
 * 	Enabler.counter('YTP Video Complete', true)
 * }
 * </codeblock>
 * @example
 * DcsUtils.addYouTubeVideoMetrics(View.main.mainYouTubePlayer)
 */
export function addYouTubeVideoMetrics(player) {
	var p = player.screen

	p.addEventListener('play', function() {
		player.isReplay ? trackVideoReplay.call() : trackVideoPlay.call()
	})

	p.addEventListener('pause', function() {
		if (!player.complete) {
			trackVideoPause.call()
		}
	})

	p.addEventListener('complete', function() {
		trackVideoComplete.call()
	})
}
