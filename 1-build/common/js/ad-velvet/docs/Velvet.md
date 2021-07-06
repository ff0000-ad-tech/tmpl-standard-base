<a name="Velvet"></a>

## .Velvet
**Kind**: static class  
**Npmpackage**:   

* [.Velvet](#Velvet)
    * [new Velvet()](#new_Velvet_new)
    * [.events](#Velvet.events)
        * [new events()](#new_Velvet.events_new)
        * [.INIT](#Velvet.events.INIT) : <code>string</code>
        * [.FAIL](#Velvet.events.FAIL) : <code>string</code>
        * [.STATIC](#Velvet.events.STATIC) : <code>string</code>
    * [.capture](#Velvet.capture)
        * [.schedule(schedule)](#Velvet.capture.schedule)
        * [.addCustomData(obj)](#Velvet.capture.addCustomData)
        * [.dispatchData()](#Velvet.capture.dispatchData)
        * [.dispatchSchedule()](#Velvet.capture.dispatchSchedule)
        * [.dispatchStart()](#Velvet.capture.dispatchStart) ⇒ <code>Promise</code>
    * [.init(slugs, dateSettings, adDimensions, adElement)](#Velvet.init)
    * [.isPreviewLocation()](#Velvet.isPreviewLocation)
    * [.convertBreaks(str)](#Velvet.convertBreaks)
    * [.get(arguments)](#Velvet.get)

<a name="new_Velvet_new"></a>

### new Velvet()
Import from <a href="https://github.com/ff0000-ad-tech/ad-velvet">ad-velvet</a>
<br>
<pre class="sunlight-highlight-javascript">
import { Velvet } from 'ad-velvet'
</pre>
<br><br>
This object is meant to handle all of our json loading and parsing from the Velvet platform.
<br><br>
When testing, changing the date can be a crucial testing step. see [DateManager](DateManager) for more information.
<br><br>
Available query params:
<pre class="sunlight-highlight-javascript">
addata=[slug]			// force the ad to show specific addata by passing in its slug
velvet=production 		// force live JSON
velvet=preview    		// force preview JSON
velvetCaptureRotate=1	// rotates the top level DOM -90 degrees to allow for larger video captures
velvetCaptureSlates=1	// shows color slates for accuracy with Capture video
</pre>

<a name="Velvet.events"></a>

### Velvet.events
**Kind**: static class of [<code>Velvet</code>](#Velvet)  

* [.events](#Velvet.events)
    * [new events()](#new_Velvet.events_new)
    * [.INIT](#Velvet.events.INIT) : <code>string</code>
    * [.FAIL](#Velvet.events.FAIL) : <code>string</code>
    * [.STATIC](#Velvet.events.STATIC) : <code>string</code>

<a name="new_Velvet.events_new"></a>

#### new events()
<a href="https://github.com/ff0000-ad-tech/ad-velvet">Github repo</a>
	<br><br>
	This module has custom events to be used with [Velvet](#Velvet)

<a name="Velvet.events.INIT"></a>

#### events.INIT : <code>string</code>
Represents a 'velvetInit', fired when Velvet has completed its data load.

**Kind**: static constant of [<code>events</code>](#Velvet.events)  
**Example**  
```js
Velvet.events.INIT
```
<a name="Velvet.events.FAIL"></a>

#### events.FAIL : <code>string</code>
Represents a 'velvetFail', fired if Velvet has a fail during its load.

**Kind**: static constant of [<code>events</code>](#Velvet.events)  
**Example**  
```js
Velvet.events.FAIL
```
<a name="Velvet.events.STATIC"></a>

#### events.STATIC : <code>string</code>
Represents a 'velvetStatic', fired when the ad_rotation in the loaded segment JSON has USE_STATIC rather than an addata slug.

**Kind**: static constant of [<code>events</code>](#Velvet.events)  
**Example**  
```js
Velvet.events.STATIC
```
<a name="Velvet.capture"></a>

### Velvet.capture
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

**Kind**: static property of [<code>Velvet</code>](#Velvet)  

* [.capture](#Velvet.capture)
    * [.schedule(schedule)](#Velvet.capture.schedule)
    * [.addCustomData(obj)](#Velvet.capture.addCustomData)
    * [.dispatchData()](#Velvet.capture.dispatchData)
    * [.dispatchSchedule()](#Velvet.capture.dispatchSchedule)
    * [.dispatchStart()](#Velvet.capture.dispatchStart) ⇒ <code>Promise</code>

<a name="Velvet.capture.schedule"></a>

#### capture.schedule(schedule)
Add a DateSchedule to the class to be dispatched back to the server.  A screen snap shot will be generated for each
		date in the schedule. This method can be called as many times as necessary such as with an ESPN double header. However,
		this should correspond to any DateSchedule that affects the endframe's layout/messaging only.

**Kind**: static method of [<code>capture</code>](#Velvet.capture)  

| Param | Type | Description |
| --- | --- | --- |
| schedule | <code>DateSchedule</code> | A DateSchedule instance that determines different endframe messaging/layout |

<a name="Velvet.capture.addCustomData"></a>

#### capture.addCustomData(obj)
Add an Object to the class to be dispatched back to the server.  A screen snap shot will be generated for each
		data object. This method can be called as many times as necessary.

**Kind**: static method of [<code>capture</code>](#Velvet.capture)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | An object with key/value pairs |

<a name="Velvet.capture.dispatchData"></a>

#### capture.dispatchData()
Passes all schedule dates or data objets back to the server.  If it is dates, this is the list of dates that the ad will
		be set to inorder to get each different end frame messaging. If it is other data, it will be passed through the query string
		and can be consumed by the ad to indicate which state to shoot inThis should be called from AdData after all DateSchedules
		are defined and passed in.

**Kind**: static method of [<code>capture</code>](#Velvet.capture)  
<a name="Velvet.capture.dispatchSchedule"></a>

#### capture.dispatchSchedule()
Calls back to the server to take a screen snap shot. This must be called after all animation is complete.

**Kind**: static method of [<code>capture</code>](#Velvet.capture)  
<a name="Velvet.capture.dispatchStart"></a>

#### capture.dispatchStart() ⇒ <code>Promise</code>
Calls back to the server to start video capture. This must be called at the start of the ad and all animation must be in the .then() handler

**Kind**: static method of [<code>capture</code>](#Velvet.capture)  
**Example**  
```js
Velvet.capture.adStart().then(() => {
	// do ad animation
})
```
<a name="Velvet.init"></a>

### Velvet.init(slugs, dateSettings, adDimensions, adElement)
This passes the slugs object from parent scope and initialized the class.  In the index is an Object of "slugs" which are 10 digit String hashes that
	are keys for locations of the client, locale, segment of the that data on Velvet cdn.

**Kind**: static method of [<code>Velvet</code>](#Velvet)  

| Param | Type | Description |
| --- | --- | --- |
| slugs | <code>object</code> | see "Properties" for more information |
| dateSettings | <code>object</code> | The date settings for internal init of [DateManager](DateManager) |
| adDimensions | <code>string</code> | The width and height as a string formatted "300x250"; Used for getting size specific assets. |
| adElement | <code>string</code> | The main DOM element of the ad; Used by Capture for color slates with video capturing. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| client | <code>string</code> | the first "slug" in the url string |
| locale | <code>string</code> | the second "slug" in the url string |
| segment | <code>string</code> | the third "slug" in the url string - this defines the segment, aka the map to which addata will be loaded |
| addata | <code>string</code> | Optionally, when viewing an addata url, the last "slug" defines which data set id being used. This can be manually set in the ad, mostly jsut for testing purposes |

**Example**  
```js
// in the index.html, inside adParams:
velvet : {
	client 	: "ZcHT9C9y6Z",
	locale	: "whV1g8DKPe",
	segment	: "C4iaBG6CoP",
	//adData 	: "jaScLD8ayE"
}

// in Preflight.js
static prepareVelvet() {
	console.log('Common.prepareVelvet()')
	Velvet.addEventListener(Velvet.events.FAIL, global.failAd)
	Velvet.addEventListener(Velvet.events.STATIC, global.useStatic)
	adParams.dateSettings.inDev = adParams.environmentId == 'staging' || adParams.environmentId == 'debug'
	return Promise.resolve(Velvet.init(adParams.velvet, adParams.dateSettings, adParams.adSize, Markup.get('main')))
}
```
<a name="Velvet.isPreviewLocation"></a>

### Velvet.isPreviewLocation()
This method returns true for all the locations that should load PREVIEW.JSON instead of published.json.
	Safeguards are in place so that even an ad in a staging/build-state will load published json, if running in
	any http(s) locations other than the ones listed.
	<br>
	Use the query to force one way:

**Kind**: static method of [<code>Velvet</code>](#Velvet)  
**Example**  
```js
?velvet=production // force live JSON
?velvet=preview    // force preview JSON
```
<a name="Velvet.convertBreaks"></a>

### Velvet.convertBreaks(str)
Converts the string new line and return characters to html break tags

**Kind**: static method of [<code>Velvet</code>](#Velvet)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to convert |

**Example**  
```js
// Get the string from Velvet
var myString = Velvet.get('myString') // "This Is\r\nMy Sentence"
// convert to html friendly
myString = Velvet.convertBreaks(myString)  // "This Is<br>My Sentence"
```
<a name="Velvet.get"></a>

### Velvet.get(arguments)
This method is used to get any node from the JSON by name. All nodes in Velvet have a 'type' and 'value'; 
	the return is always the 'value' or end of the line key

**Kind**: static method of [<code>Velvet</code>](#Velvet)  

| Param | Type | Description |
| --- | --- | --- |
| arguments | <code>object</code> \| <code>string</code> \| <code>boolean</code> | The arguments have many possible uses: <br> 	1. A String can be a name of a node or a path to a node seperated by a "." <br>  	2. Object followed by a String is used to specify a starting point for the get method to search for the  	node provided as the second argument on the String.<br> 	3. An object as the last argument (second for option 1, third for option 2), will provide options:<br> 	- allowDefault: used with 'MultiSizeText' & 'MultiSizeImage', set to false to not fall back to default value.<br> 	- convertBreaks: see convertBreaks()<br> 	- recursive: if true, will have the method search recurrsively through the data object for the key. Otherwise,  	it will only look at the level provided. |

**Example**  
```js
// sample Velvet JSON data
{
"title": {
	"type": "SingleLineText",
	"value": "WHAT DO YOU SEE?"
},
"sub_title": {
	"type": "MultiLineText",
	"value": "This is \r\nsome text"
},
"matchup": {
	"type": "CollectionSeries",
	"value": [{
		"game": {
			"type": "CollectionSingleItem",
			"value": {
				"away_team": {
					"type": "CollectionSingleItem",
					"value": {
						"name": {
							"type": "SingleLineText",
							"value": "Los Angeles Fake Team"
						},
						"color": {
							"type": "Color",
							"value": "#003da5"
						},
						"logo": {
							"type": "Image",
							"value": {
								"content_type": "image/png",
								"name": "laft_sg1SohS.png",
								"url": "https://us-east.manta.joyent.com/adtech/public/ad_manager/clients/3YLOU2j85h/collections/TCAHAe8v8B/laft_sg1SohS.png"
							}
						},
						"player_img": {
							"type": "MultiSizeImage",
							"value": {
								"value": {
									"url": "https://us-east.manta.joyent.com/adtech/public/ad_manager/clients/3YLOU2j85h/collections/TCAHAe8v8B/playerA.png",
									"name": "playerA",
									"content_type": "image/png"
								},
								"sizes": {
									"300x250": {
										"url": "https://us-east.manta.joyent.com/adtech/public/ad_manager/clients/3YLOU2j85h/collections/TCAHAe8v8B/playerA_300x250.png",
										"name": "playerA_300x250",
										"content_type": "image/png"
									},
									"728x90": null
								}
							}
						}
					}
				},
				"home_team": {
					"type": "CollectionSingleItem",
					"value": {
						"name": {
							"type": "SingleLineText",
							"value": "Portland Fake Team"
						},
						"color": {
							"type": "Color",
							"value": "#A80532"
						},
						"logo": {
							"type": "Image",
							"value": {
								"content_type": "image/png",
								"name": "pdxft.png",
								"url": "https://us-east.manta.joyent.com/adtech/public/ad_manager/clients/3YLOU2j85h/collections/tLtLMaynyq/pdxft.png"
							}
						},
						"player_img": {
							"type": "MultiSizeImage",
							"value": {
								"value": {
									"url": "https://us-east.manta.joyent.com/adtech/public/ad_manager/clients/3YLOU2j85h/collections/TCAHAe8v8B/playerB.png",
									"name": "playerB",
									"content_type": "image/png"
								},
								"sizes": {
									"300x600": {
										"url": "https://us-east.manta.joyent.com/adtech/public/ad_manager/clients/3YLOU2j85h/collections/TCAHAe8v8B/playerA_300x600.png",
										"name": "playerA_300x600",
										"content_type": "image/png"
									},
									"728x90": {
										"url": "https://us-east.manta.joyent.com/adtech/public/ad_manager/clients/3YLOU2j85h/collections/TCAHAe8v8B/playerA_728x90.png",
										"name": "playerA_728x90",
										"content_type": "image/png"
									}
								}
							}
						}
					}
				}
			}
		}
	}]
},
"live_url": {
	"type": "URL",
	"value": "http://es.pn/2cilNDt?ex_cid=2016_CFB_Banner_3_50005170003"
}
}
// Get the top level data by passing in no specific node key
const fullJSON = Velvet.get()

// Provide a node name
const title = Velvet.get('title')  // "WHAT DO YOU SEE?"

// use the optional object to format the text
const subtitle = Velvet.get('sub_title', { convertBreaks: true }) // This is <br>some text

// Get a collection, such as a team for later use:
const awayTeam = Velvet.get('away_team', { recursive: true }) 

// returns the whole object of the away_team. Since 'away_team' is nested in an array, 
// the true will make the get() go recursively through all children to find the node.
// NOTE: there is only 1 instance of "away_team" so only 1 will return. 
// However, if there were more matchups, it would return all away teams as an array.  
// So to target specifically this matchup, call the away team by targeted path.
// To do so, write out the path using a "." for each child.

const awayTeam = Velvet.get('matchup.0.game.away_team')
// Note that there is no need to use the ".value" key as the system assumes
// that for you when using Velvet.get().  This returns the object as is, so 
// if you use it later, you will need to specify the ".value" to read properly

// OR

// Use the variable as a starting point for the searching
const awayTeamName = Velvet.get(awayTeam, 'name')  // "Los Angeles Fake Team"

// With MultiSizeImage (or MultiSizeText) target the key and Velvet will sort through
// to find if there is an asset for the ad size, if not it will return the default value

const playerImgAway = Velvet.get(awayTeam, 'player_img')
// In a 300x250:
// returns "https://us-east.manta.joyent.com/adtech/public/ad_manager/clients/3YLOU2j85h/collections/TCAHAe8v8B/playerA_300x250.png"

// In a 970x250:
// returns "https://us-east.manta.joyent.com/adtech/public/ad_manager/clients/3YLOU2j85h/collections/TCAHAe8v8B/playerA.png"

// If the field for a particular size is desired to be read as blank
const playerImgAway = Velvet.get(awayTeam, 'player_img', { allowDefault: false })
// In a 728x90:
// returns null
```
