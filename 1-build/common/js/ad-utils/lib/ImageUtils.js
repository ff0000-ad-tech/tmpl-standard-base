/**
 * @npmpackage
 * @class ImageUtils
 * @desc
 * This object contains methods necessary for manipulating images.<br>
 * Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
 * <br>
 * <codeblock>
 * import { ImageUtils } from 'ad-utils'
 * </codeblock>
 */

/**
 * @memberOf ImageUtils
 * @method fitImageAtCoordinate
 * @param {element} target
 * 	The div with a background image
 * @param {number} originX
 * 	The x position to center on
 * @param {number} originY
 * 	The y position to center on
 * @param {img} source
 * 	Optional pass in a source img tag to skip the need to load to get source data
 * @desc
 * 	Positions a background image to fit the div size while centering around a point.  If the point is beyond the size bounds, it will align to that side.
 */
export function fitImageAtCoordinate(target, originX, originY, source) {
	var child
	if (originX === undefined && originY === undefined) {
		target.style.backgroundPosition = '50% 50%'
	} else {
		if (source) {
			child = source
			placement()
		} else {
			child = new Image()
			child.onload = placement
			child.src = target.style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0]
		}
	}
	target.style.backgroundSize = 'cover'
	target.style.backgroundRepeat = 'no-repeat'

	function placement() {
		var parent = {
			width: target.offsetWidth,
			height: target.offsetHeight,
		}
		var parentAspectRatio = parent.width / parent.height
		var childAspectRatio = child.width / child.height

		if (parentAspectRatio > childAspectRatio) {
			// child max fits in horizontal, move y
			fit('width', 'height')
		} else if (parentAspectRatio < childAspectRatio) {
			//  child max fits in vertical, move x
			fit('height', 'width')
		}

		function fit(a, b) {
			// child width is parent height times ratio of child width over child height
			// child height is parent width times ratio of child height over child width
			var childSize = parent[a] * (child[b] / child[a])

			// parent to child scale ratio
			var scalePercent = parent[a] / child[a]

			var coord = {
				width: originX || 0,
				height: originY || 0,
			}
			// parent size, halfed then subtract the scaled coordinate point
			var childMove = parent[b] / 2 - coord[b] * scalePercent

			// make sure the image doesn't exceed the bounds
			var maxMove = parent[b] - childSize
			if (childMove > 0) childMove = 0
			else if (childMove < maxMove) childMove = maxMove

			target.style.backgroundPosition = a === 'height' ? childMove + 'px 0px' : '0px ' + childMove + 'px'
		}
	}
}

/**
 * @memberOf ImageUtils
 * @method fitCanvasImageAtCoordinate
 * @param {CanvasImage} target
 * 	The CanvasImage with a image source to fit within a specific dimension
 * @param {object} params
 * 	The parameters of the CanvasImage upon instantiation
 * @param {object} fitParams
 * 	The parameters defining the width, height, and origin in which to fit the image
 * 		@property {number} fitParams.width
 * 			NUMBER determining the width to fit the CanvasImage into - affects CanvasImage.width and CanvasImage.sourceW
 * 		@property {number} fitParams.height
 * 			NUMBER determining the height to fit the CanvasImage into - affects CanvasImage.height and CanvasImage.sourceH
 * 		@property {object} fitParams.origin
 * 			OBJECT containing orientation coordinates for the image's fitTo positioning
 * 				@property {number} fitParams.origin.x
 * 					NUMBER for X coordinate around which to focus resizing and fitting of the image horizontally
 * 				@property {number} fitParams.origin.y
 * 					NUMBER for Y coordinate around which to focus resizing and fitting of the image vertically
 * @param {number} imgSourceWidth
 * 	NUMBER for the original width of the source image
 * @param {number} imgSourceHeight
 * 	NUMBER for the original height of the source image
 * @desc
 * 	Positions a CanvasImage image to fit into a width and height while focusing around a point.  If the point is beyond the size bounds, it will align to that side.
 */
export function fitCanvasImageAtCoordinate(target, params, fitParams, imgSourceWidth, imgSourceHeight) {
	console.log(`%c FIT CANVAS IMAGE, SON`, 'color: black; background-color: cyan; font-style: italic; padding: 10px;')

	// is the image wider than it is tall
	let _widerSource = imgSourceWidth > imgSourceHeight
	// is the target dimension - the fitParams - wider than it is tall
	let _widerSpace = fitParams.width > fitParams.height

	// this function takes in an array of arguments to get the ratio dimension
	// for example - if we know the width we want, we have to get the proportional height
	function _makeRatios() {
		let _args = arguments

		// example using paramsW: target['width'] = imgSourceWidth * (fitParams['width'] / imgSourceHeight)
		target[_args[2]] = _args[5] * (fitParams[_args[3]] / _args[4])
		params['source' + _args[0]] = _args[4]
		params['source' + _args[1]] = fitParams[_args[2]] * (_args[5] / target[_args[2]])
	}

	// these are the arguments arrays
	// array for proportional width, fitting the image to fitParams.height
	let paramsW = ['H', 'W', 'width', 'height', imgSourceHeight, imgSourceWidth]
	// array for proportional height, fitting the image to fitParams.width
	let paramsH = ['W', 'H', 'height', 'width', imgSourceWidth, imgSourceHeight]

	// is the image wider than it is tall
	if (_widerSource) {
		_makeRatios.apply(target, paramsW)
		// if, after getting new image size rations, the image isn't actually as wide as the fitParams...
		// run _makeRatios again, but fit the image to fitParams.width
		if (target.width < fitParams.width) _makeRatios.apply(target, paramsH)
	} else {
		_makeRatios.apply(target, paramsH)
		// if, after getting new image size rations, the image isn't actually as wide as the fitParams...
		// run _makeRatios again, but fit the image to fitParams.height
		if (target.height < fitParams.height) _makeRatios.apply(target, paramsW)
	}

	// make the image width and height equal to what our fitParams values are
	target.width = fitParams.width
	target.height = fitParams.height

	// this if check changes the transformOrigin, sourceW, sourceH, sourceX, and sourceH based on a target origin point
	if (fitParams.origin) {
		// set some defaults for our origin point - if none defined, make TOP-LEFT
		let _fitOrigin = {
			x: fitParams.origin.x || 0,
			y: fitParams.origin.y || 0,
		}

		// is the area we want to fit into - the fitParams - a square?
		let _fitSquare = fitParams.width === fitParams.height

		// ensure our sourceX and sourceY values are at least defined - they will get overwritten below
		params.sourceX = params.sourceY = 0

		// redefining parameters from our earlier paramsW / paramsH arrays so as to reuse arguments below
		paramsW[0] = 'x'
		paramsH[0] = 'y'

		//	this function runs ALL of the calculations to determine:
		//
		//		* how the image should be positioned within th fitParams based on the ratio of
		//			fitParams.width/fitParams.height and imgSourceWidth/imgSourceHeight
		//		* the origin, and its location within the bounds of the image

		function _setupOrientation(checkParam) {
			// is the image wider than it is tall
			// arguments via paramsW = ['x', 'W', 'width', 'height', imgSourceHeight, imgSourceWidth]
			function fitParamsSquare() {
				let _args = arguments

				// example using paramsW: _fitOrigin.x *= ((target.height * imgSourceWidth) / imgSourceHeight) / imgSourceWidth;
				_fitOrigin[_args[0]] *= (target[_args[3]] * _args[5]) / _args[4] / _args[5]

				// scale the _fitOrigin position property to the scale of the image
				// example using paramsW: _fitOrigin.x *= target.height / imgSourceHeight;
				_fitOrigin[_args[0] === 'x' ? 'y' : 'x'] *= target[_args[3]] / _args[4]
			}

			// this function sets the positioning and sizing of the image within the fitParams, based on the fitParams.origin coordinates
			// arguments via paramsW = ['x', 'W', 'width', 'height', imgSourceHeight, imgSourceWidth]
			// arguments via paramsH = ['y', 'H', 'height', 'width', imgSourceWidth, imgSourceHeight];
			function _orientToOrigin() {
				let _args = arguments
				// this scenario only exists if the fitParams is NOT a square
				if (_args.length) {
					// this is the scale of the fitted image compared to its default size
					// example using paramsW: _scale = target.width / imgSourceWidth;
					let _scale = target[_args[3]] / _args[4]

					// the source property for positioning - either sourceX or sourceY
					// example using paramsW: _sourcePropPos = 'source' + 'x'.toUpperCase(); returns 'sourceX';
					let _sourcePropPos = 'source' + _args[0].toUpperCase()

					// changing the sourceX/Y property for positioning
					// example using paramsW: params.sourceX = (_fitOrigin.x / target.stage.qualityScale) - ((fitParams.width] * 0.5) / _scale);
					params[_sourcePropPos] = _fitOrigin[_args[0]] / 1 - (fitParams[_args[2]] * 0.5) / _scale

					// if the _fitOrigin data all exists within the bounds of the available bitmap data
					// BUG: THIS ONLY CHECKS AGAINST ONE PARAMETER - sourceX or sourceY - BUT THEN AFFECTS BOTH _fitOrigin.x and _fitOrigin.y
					// NEED TO CHECK AGAINST BOTH AND AFFECT BOTH
					if (
						params[_sourcePropPos] >= 0 &&
						params[_sourcePropPos] <= _args[5] - params['source' + _args[1]]
					) {
						// find out what the origin is in relation to its fitParams and _fitOrigin
						// a loop to set _fitOrigin.x/y equal to (_fitOrigin.x/y - params.sourceX/sourceY) * _scale;
						for (let item in _fitOrigin)
							_fitOrigin[item] = (_fitOrigin[item] - params['source' + item.toUpperCase()]) * _scale
					}
				}
			}

			// this keeps every value of _fitOrigin, as well as sourceX/Y, within the bounds of the image
			// arguments via paramsW = ['x', 'W', 'width', 'height', imgSourceHeight, imgSourceWidth]
			// arguments via paramsH = ['y', 'H', 'height', 'width', imgSourceWidth, imgSourceHeight];
			function _modifyOutOfBounds() {
				let _subArgs = arguments
				let _arg1 = _subArgs[0]
				let _arg2 = _subArgs[2]

				// if the image dimensions actually match the source dimensions
				// then just scale the origin accordingly
				// example using paramsW:
				// if (params['sourceW'] == imgSourceWidth) {
				// 	_fitOrigin['x'] = fitParams.origin['x'] * (fitParams['width'] / imgSourceWidth);
				// }
				if (params['source' + _subArgs[1]] == _subArgs[5]) {
					_fitOrigin[_arg1] = fitParams.origin[_arg1] * (fitParams[_arg2] / _subArgs[5])
				}

				// and this fits any bound that exceeds the available bitmap data and keeps it within the bounds
				// example using paramsW:
				// 	if (_fitOrigin['x'] > fitParams['width']) {
				// 		_fitOrigin['x'] = fitParams['width'];
				// 		params['source' + 'X'] = imgSourceWidth - params['source' + 'W'];
				// 	}
				if (_fitOrigin[_arg1] > fitParams[_arg2]) {
					_fitOrigin[_arg1] = fitParams[_arg2]
					params['source' + _arg1.toUpperCase()] = _subArgs[5] - params['source' + _subArgs[1]]
				}
			}

			if (_fitSquare) fitParamsSquare.apply(target, arguments)

			_orientToOrigin.apply(target, _fitSquare ? null : checkParam)

			_modifyOutOfBounds.apply(target, paramsW)
			_modifyOutOfBounds.apply(target, paramsH)

			// this checks to make sure the _fitOrigin.x/y and sourceX/Y are within the bounds of the bitmap data
			for (let item in _fitOrigin) {
				// this keeps every value in _fitOrigin above or equal to 0
				let _sourcePropSize = 'source' + item.toUpperCase()
				if (_fitOrigin[item] < 0 || params[_sourcePropSize] < 0) _fitOrigin[item] = params[_sourcePropSize] = 0
			}
		}

		// calling the function we just set up
		if (_fitSquare) {
			// call _setupOrientation() with no parameters - that function will recognize _fitSquare
			_setupOrientation.apply(target, _widerSource ? paramsW : paramsH)
		} else {
			// is the image wider than it is tall
			if (_widerSource) {
				// is the target fitParams wider than it is tall - orient to the height
				if (fitParams.width > fitParams.height) _setupOrientation(paramsH)
				// is the target fitParams taller than it is wide - orient to the width
				else _setupOrientation(paramsW)
				//
			} else {
				// is the target fitParams taller than it is wide - orient to the width
				if (fitParams.height > fitParams.width) _setupOrientation(paramsW)
				// is the target fitParams wider than it is tall - orient to the height
				else _setupOrientation(paramsH)
			}
		}

		// set the default transformOrigin to that of the given _fitOrigin point
		params.transformOrigin = _fitOrigin.x + ' ' + _fitOrigin.y

		// this adds debugging information so we can see our intended origin and how our image transforms against it
		if (fitParams.debugClass) {
			// common args for the tall and wide lines
			let _args = {
				target: target.stage,
				fill: 'yellow',
				params: {
					width: 1,
					height: 1,
				},
			}

			// the tall line
			let _tall = new fitParams.debugClass(_args)
			// the wide line
			let _wide = new fitParams.debugClass(_args)

			// targetrcle surrounding the origin point
			_fitOrigin.width = _fitOrigin.height = 10
			console.error(_fitOrigin)
			let _targetrc = new fitParams.debugClass({
				target: target.stage,
				params: _fitOrigin,
				stroke: {
					fill: 'yellow',
					width: 1,
				},
			})

			_tall.height = fitParams.height
			_wide.width = fitParams.width
			_tall.x = _targetrc.x - _tall.width / 2
			_wide.y = _targetrc.y - _wide.height / 2

			_targetrc.x -= _targetrc.width / 2
			_targetrc.y -= _targetrc.height / 2
		}
	}
}
