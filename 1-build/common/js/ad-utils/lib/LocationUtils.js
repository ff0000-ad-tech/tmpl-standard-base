/**
	@npmpackage
	@class LocationUtils
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { LocationUtils } from 'ad-utils'
		</codeblock>
		<br><br>
		
		This object contains utilities for interfacing with the device's GPS.
*/
var LocationUtils = new function() {
	this.gpsSuccessCallback
	this.gpsFailCallback

	/**
		@memberOf LocationUtils
		@method getGPSData
		@param {function} callbackSuccess
			upon successful acquisition of device location, this funciton is called with global coordinates.
		@param {function} callbackFail
			called if the query fails
		@desc
			Queries the device for current location. Asyncronous and dependent on user permission, 
			so callback functions must be used.
	*/

	this.getGPSData = function(callbackSuccess, callbackFail) {
		if (navigator.geolocation) {
			LocationUtils.gpsSuccessCallback = callbackSuccess
			LocationUtils.gpsFailCallback = callbackFail
			navigator.geolocation.getCurrentPosition(LocationUtils.onLocationRetrieved, LocationUtils.onLocationFailed)
		} else console.log('geolocation not available')
	}

	this.onLocationRetrieved = function(position) {
		LocationUtils.gpsSuccessCallback(position.coords)
	}

	this.onLocationFailed = function(error) {
		console.log('Error retrieving location data')

		switch (error.code) {
			case 0:
				console.log('0 - unknown error')
				break

			case 1:
				console.log('1 - permission denied')
				break

			case 2:
				console.log('2 - position unavailable (error response from locaton')
				break

			case 3:
				console.log('3 - timed out')
				break
		}

		if (LocationUtils.gpsFailCallback) LocationUtils.gpsFailCallback(error)
	}
}()

export default LocationUtils
