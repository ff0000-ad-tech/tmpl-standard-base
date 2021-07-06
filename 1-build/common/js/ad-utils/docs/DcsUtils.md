<a name="DcsUtils"></a>

## DcsUtils
**Kind**: global class  
**Npmpackage**:   

* [DcsUtils](#DcsUtils)
    * [new DcsUtils()](#new_DcsUtils_new)
    * [.addVideoMetrics(player, message)](#DcsUtils.addVideoMetrics)
    * [.addYouTubeVideoMetrics(player)](#DcsUtils.addYouTubeVideoMetrics)

<a name="new_DcsUtils_new"></a>

### new DcsUtils()
Doubleclick Studio utilities. <br>
Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
<br>
<pre class="sunlight-highlight-javascript">
import { DscUtils } from 'ad-utils'
</pre>

<a name="DcsUtils.addVideoMetrics"></a>

### DcsUtils.addVideoMetrics(player, message)
Adds DoubleClick Tracking metrics to a video player.

**Kind**: static method of [<code>DcsUtils</code>](#DcsUtils)  

| Param | Type | Description |
| --- | --- | --- |
| player | <code>VideoPlayer</code> | The video player instance to track |
| message | <code>string</code> | The message passed as the metric, defaults to 'Video Report 1' |

**Example**  
```js
DcsUtils.addVideoMetrics(View.main.videoPlayer, 'Intro Video')
```
<a name="DcsUtils.addYouTubeVideoMetrics"></a>

### DcsUtils.addYouTubeVideoMetrics(player)
Adds DoubleClick Tracking metrics to a YouTube video player.  The Enabler counter calls are added to the
index when a YouTubePlayer is added through Ad App.<br>
If manually adding a YouTubePlayer/tracking, the required global vars are:<br>
<pre class="sunlight-highlight-javascript">
var trackVideoPlay = function() {
	Enabler.counter('YTP Video Play', true)
}
var trackVideoReplay = function() {
	Enabler.counter('YTP Video Replay', true)
}
var trackVideoPause = function() {
	Enabler.counter('YTP Video Pause', true)
}
var trackVideoComplete = function() {
	Enabler.counter('YTP Video Complete', true)
}
</pre>

**Kind**: static method of [<code>DcsUtils</code>](#DcsUtils)  

| Param | Type | Description |
| --- | --- | --- |
| player | <code>VideoPlayer</code> | The YouTubePlayer instance to track |

**Example**  
```js
DcsUtils.addYouTubeVideoMetrics(View.main.mainYouTubePlayer)
```
