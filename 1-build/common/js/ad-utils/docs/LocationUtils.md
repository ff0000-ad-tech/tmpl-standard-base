<a name="LocationUtils"></a>

## LocationUtils
**Kind**: global class  
**Npmpackage**:   

* [LocationUtils](#LocationUtils)
    * [new LocationUtils()](#new_LocationUtils_new)
    * [.getGPSData(callbackSuccess, callbackFail)](#LocationUtils.getGPSData)

<a name="new_LocationUtils_new"></a>

### new LocationUtils()
Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
		<br>
		<pre class="sunlight-highlight-javascript">
// importing into an ES6 class
import { LocationUtils } from 'ad-utils'
</pre>
		<br><br>
		
		This object contains utilities for interfacing with the device's GPS.

<a name="LocationUtils.getGPSData"></a>

### LocationUtils.getGPSData(callbackSuccess, callbackFail)
Queries the device for current location. Asyncronous and dependent on user permission, 
			so callback functions must be used.

**Kind**: static method of [<code>LocationUtils</code>](#LocationUtils)  

| Param | Type | Description |
| --- | --- | --- |
| callbackSuccess | <code>function</code> | upon successful acquisition of device location, this funciton is called with global coordinates. |
| callbackFail | <code>function</code> | called if the query fails |

