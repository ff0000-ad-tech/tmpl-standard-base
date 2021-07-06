/**
 * @npmpackage
 * @class MotionUtils
 * @desc
 * This object is for accessing the mobile/tablet's accelerometer for tilt shifting values<br>
 * Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
 * <codeblock>
 * import { MotionUtils } from 'ad-utils'
 * </codeblock>
 */
var MotionUtils = (function() {
	var ax = 0,
		ay = 0

	var _zeroX = 0,
		_zeroY = 0,
		_isInit = true,
		_negX,
		_posX,
		_negY,
		_posY,
		_multi = 1,
		_callback

	/* ----------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS

	/**
	 * @memberOf MotionUtils
	 * @method setSpeedLimits
	 * @param {number} negX
	 * 	minimum value returned when tilting left ( will be a negative number )
	 * @param {number} posX
	 * 	maximum value returned when tilting right ( will be a positive number )
	 * @param {number} negY
	 * 	minimum value returned when tilting backward ( will be a negative number )
	 * @param {number} posY
	 * 	maximum value returned when tilting forward ( will be a positive number )
	 * @desc
	 * 	Set the minimum and maximum values that can be returned
	*/
	function setSpeedLimits(negX, posX, negY, posY) {
		_negX = negX
		_posX = posX
		_negY = negY
		_posY = posY
	}

	/**
	 * @memberOf MotionUtils
	 * @method setSpeedMultiplier
	 * @param {number} multi
	 * 	a number to multiply the returned value by. Defaults to 1.
	 * @desc
	 * 	Set a percentage multiplier to amplify or minimize the returned value.
	*/
	function setSpeedMultiplier(multi) {
		_multi = multi <= 0 ? 1 : multi
	}

	/**
	 * @memberOf MotionUtils
	 * @method activate
	 * @param {function} callback
	 * 	a passed in method that will be called every time a device movement is detected.
	 * @desc
	 * 	Starts the listening for a move of the device
	*/
	function activate(callback) {
		_callback = callback
		window.addEventListener('deviceorientation', onOrientation, false)
	}

	/**
	 * @memberOf MotionUtils
	 * @method deactivate
	 * @desc
	 * 	Stops the listening for a move of the device.
	 */
	function deactivate() {
		window.removeEventListener('deviceorientation', onOrientation, false)
	}

	/**
	 * @memberOf MotionUtils
	 * @method callibrate
	 * @desc
	 * 	Sets the relative zero position to the current orientation of the device.
	 */
	function callibrate() {
		_isInit = true
	}

	/* ----------------------------------------------------------------------------------------------- */
	// EVENT HANDLERS
	function onOrientation(e) {
		switch (window.orientation) {
			case -90:
				// Landscape, right-side down
				ay = e.gamma
				ax = -e.beta
				break
			case 90:
				// Landscape, left-side down
				ay = -e.gamma
				ax = e.beta
				break
			case 180:
				// Upside-down portrait
				ay = -e.beta
				ax = -e.gamma
				break
			default:
				// Portrait
				ay = e.beta
				ax = e.gamma
		}

		if (_isInit) {
			_zeroX = ax
			_zeroY = ay
			_isInit = false
		}

		ax -= _zeroX
		ay -= _zeroY

		ax *= _multi
		ay *= _multi

		if (_negX && ax < _negX) ax = _negX
		if (_posX && ax > _posX) ax = _posX
		if (_negY && ay < _negY) ay = _negY
		if (_posY && ay > _posY) ay = _posY

		_callback(ax, ay)
	}

	/* ----------------------------------------------------------------------------------------------- */
	// PUBLIC ACCESS
	return {
		ax: ax,
		ay: ay,
		callibrate: callibrate,
		setSpeedLimits: setSpeedLimits,
		setSpeedMultiplier: setSpeedMultiplier,
		activate: activate,
		deactivate: deactivate
	}
})()

export default MotionUtils
