/* ----------------------------------------------------------------------------------------------------------------------------------------------------------
	Description:
		-- INTERNAL MODULE --
		This module is used exclusively by FrameRate.  When a method is registered, it instantiaties an instance of this module to hold all methods at a 
		specified frames per second.  Every fps gets a new FrameRateBase instance.
	
	---------------------------------------------------------------------------------------------------------------------------------------------------------- */
function FrameRateBase(fps) {
	var F = this
	F.pool = []
	F.fps = fps

	F._frameTime = Math.floor(1000 / F.fps)
	F._prevTime = 0
	F._startTime = 0
	F._nextTime = 0
	F._maxLag = 400
	F._shiftLag = 30
	F._paused = false
	F._prevCallTime = Date.now()

	F.diffTime = 0
}

FrameRateBase.prototype = {
	resume: function () {
		var F = this
		if (F._isPaused) {
			F._startTime = Date.now()
			F._prevCallTime = F._startTime
			F._prevTime = F._startTime
			F._nextTime = 0
			F._isPaused = false
		}
	},

	tick: function () {
		var F = this
		if (!F._paused) {
			var call = false
			var now = Date.now()
			var diffTime = now - F._prevTime

			if (diffTime > F._maxLag) {
				console.log('...lag')
				F._startTime += diffTime - F._shiftLag
			}
			F._prevTime = now //+= F.diffTime;

			var elapsedTime = F._prevTime - F._startTime
			var future = elapsedTime - F._nextTime

			if (future > 0) {
				F._nextTime += future >= F._frameTime ? future : F._frameTime
				call = true

				// calculates the difference only from last call, not last tick
				F.diffTime = now - F._prevCallTime
				F._prevCallTime = now
			}

			// handle the callbacks
			if (call) F.dispatch()
		}
	},

	dispatch: function () {
		var F = this
		for (var i = 0; i < F.pool.length; i++) {
			var obj = F.pool[i]
			obj.handler.call(obj.from, this)
		}
	},
}

export default FrameRateBase
