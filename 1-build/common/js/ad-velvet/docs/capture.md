<a name="Velvet.capture"></a>

## Velvet.capture
**Kind**: static class of [<code>Velvet</code>](#Velvet)  

* [.capture](#Velvet.capture)
    * [new capture()](#new_Velvet.capture_new)
    * [.schedule(schedule)](#Velvet.capture.schedule)
    * [.addCustomData(obj)](#Velvet.capture.addCustomData)
    * [.dispatchData()](#Velvet.capture.dispatchData)
    * [.dispatchSchedule()](#Velvet.capture.dispatchSchedule)
    * [.dispatchStart()](#Velvet.capture.dispatchStart) ⇒ <code>Promise</code>

<a name="new_Velvet.capture_new"></a>

### new capture()
This class controls the communication with the backend to enable static snap shots of the ad's endframe,
including the ability to take a shot of every date for a unit with a DateSchedule determining its messaging.
<pre class="sunlight-highlight-javascript">
import * as Velvet from 'ad-velvet'
</pre>
Adding a Schedule:
<pre class="sunlight-highlight-javascript">
// within AdData.js

// create a schedule
var schedule = new DateSchedule({
	target: new TzDate({
		datetime: Velvet.get('tune_in.datetime'),
		outputTimezone: Velvet.get('tune_in.timezone')
	}),
	isStandard: true
})

// add the schedule to Capture
Velvet.capture.addSchedule(schedule)
// make a call that will be heard by Velvet
Velvet.capture.dispatchData()
</pre>
Adding custom data to be passed into the ad:
<pre class="sunlight-highlight-javascript">
Velvet.capture.addCustomData({ type:'yellow' })
Velvet.capture.dispatchData()
</pre>
Calling the snap shot at the end of the ad:
<pre class="sunlight-highlight-javascript">
// When loading is complete and the ad begins
Velvet.capture.adStart()

// within Control
this.animationComplete = function() {
	console.log('Control.animationComplete()')
	Velvet.capture.adComplete()
}

// then from the end of the animation, call
Control.animationComplete()
</pre>

<a name="Velvet.capture.schedule"></a>

### capture.schedule(schedule)
Add a DateSchedule to the class to be dispatched back to the server.  A screen snap shot will be generated for each
		date in the schedule. This method can be called as many times as necessary such as with an ESPN double header. However,
		this should correspond to any DateSchedule that affects the endframe's layout/messaging only.

**Kind**: static method of [<code>capture</code>](#Velvet.capture)  

| Param | Type | Description |
| --- | --- | --- |
| schedule | <code>DateSchedule</code> | A DateSchedule instance that determines different endframe messaging/layout |

<a name="Velvet.capture.addCustomData"></a>

### capture.addCustomData(obj)
Add an Object to the class to be dispatched back to the server.  A screen snap shot will be generated for each
		data object. This method can be called as many times as necessary.

**Kind**: static method of [<code>capture</code>](#Velvet.capture)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | An object with key/value pairs |

<a name="Velvet.capture.dispatchData"></a>

### capture.dispatchData()
Passes all schedule dates or data objets back to the server.  If it is dates, this is the list of dates that the ad will
		be set to inorder to get each different end frame messaging. If it is other data, it will be passed through the query string
		and can be consumed by the ad to indicate which state to shoot inThis should be called from AdData after all DateSchedules
		are defined and passed in.

**Kind**: static method of [<code>capture</code>](#Velvet.capture)  
<a name="Velvet.capture.dispatchSchedule"></a>

### capture.dispatchSchedule()
Calls back to the server to take a screen snap shot. This must be called after all animation is complete.

**Kind**: static method of [<code>capture</code>](#Velvet.capture)  
<a name="Velvet.capture.dispatchStart"></a>

### capture.dispatchStart() ⇒ <code>Promise</code>
Calls back to the server to start video capture. This must be called at the start of the ad and all animation must be in the .then() handler

**Kind**: static method of [<code>capture</code>](#Velvet.capture)  
**Example**  
```js
Velvet.capture.adStart().then(() => {
	// do ad animation
})
```
