/**
 * @npmpackage
 * @class MathUtils
 * @desc Common math utilities.	<br>
 * Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
 * <codeblock>
 * import { MathUtils } from 'ad-utils'
 * </codeblock>
 */

/**
 * @memberOf MathUtils
 * @method toRadians
 * @param {number} degree
 * 		An angle value as a degree
 * @desc
 * 		Converts an angle value from Degrees to Radians.
 */
export function toRadians(degree) {
	return (Math.PI / 180.0) * degree
}

/**
 * @memberOf MathUtils
 * @method toDegrees
 * @param {number} radian
 * 		An angle value as a radian
 * @desc
 * 		Converts an angle value from Radians to Degrees.
*/
export function toDegrees(radian) {
	return (180.0 / Math.PI) * radian
}

/**
 * @memberOf MathUtils
 * @method random
 * @param {number} a
 * 		the first value to find between
 * @param {number} b
 * 		the second value to find between 
 * @param {number} increment
 * 		optionaly set the increment of the random number. Defaults to 1
 * @desc
 * 		Get a random number between a range of two values, with an option to return to a decimal place. ( Note that
 * 		 due to the inprecision of decimal number calculation in Javascript, you may not get a perfect result when 
 * 		 your increment value is decimal, but the value will be close. A classic Javascript inpreciosn calculation example: 
 * 		 0.1 + 0.2 = 0.30000000000000004 ) 
 * @example
 * MathUtils.random(1, 3, 1)   // returns 1 or 2 or 3
 * MathUtils.random(1, 3, 0.5)  // returns 1, 1.5, 2, 2.5 or 3
 */
export function random(a, b, increment) {
	b = b || 0
	increment = increment != undefined && increment > 0 ? increment : 1

	var min = Math.min(a, b)
	var max = Math.max(a, b)

	min = Math.ceil(min / increment) * increment
	max = Math.floor(max / increment) * increment

	var _num = min + Math.floor(Math.random() * ((max - min + increment) / increment)) / (1 / increment)
	return _num
}

/**
 * @memberOf MathUtils
 * @method randomBoolean
 * @param {number} weight
 * 		change the outcome probabilty. Greater than .5 more likely true. Defaults to .5
 * @desc
 * 		Randomly returns a true or false;
 */
export function randomBoolean(weight) {
	weight = weight || 0.5
	return Math.random() < weight
}

export function randomWeightedKey(obj) {
	var keys = []
	var vals = [0]
	for (var param in obj) {
		keys.push(param)
		vals.push(obj[param] + (vals[vals.length - 1] || 0))
	}
	//console.log(keys)
	//console.log(vals)

	var rand = Math.random().toFixed(2) * 100
	for (var k = 0; k < vals.length - 1; k++) {
		var isIn = inRange(rand, vals[k], vals[k + 1])
		//console.log('\t', k, rand, vals[k], vals[k+1], isIn)
		if (isIn) {
			//  console.log('\t\t', keys[k])
			return keys[k]
		}
	}
}

/**
 * @memberOf MathUtils
 * @method rel
 * @param {number} a0
 * 		the first value to find between
 * @param {number} a1
 * 		the second value to find between
 * @param {number} b0
 * 		the first value to use as relative to a0
 * @param {number} b1
 * 		the second value to use as relative to a1
 * @param {number} bX
 * 		the value between b0 and b1
 * @desc
 * 		Calculates a value between two numbers relative to a value between 2 other numbers.
 * 		Returns The proportion between a0 and a1 relative to the bX proportion between b0 and b1
 * @example
 * MathUtils.rel(0, 1, 10, 20, 15) // 0.5
 * MathUtils.rel(100, 300, 3, 5, 3.5) // 150
 */
export function rel(a0, a1, b0, b1, bX) {
	return ((bX - b0) / (b1 - b0)) * (a1 - a0) + a0
}

/**
 * @memberOf MathUtils
 * @method inRange
 * @param {number} val
 * 		the number to check
 * @param {number} a
 * 		the first value of the range
 * @param {number} b
 * 		the second value of the range
 * @returns {boolean}
 * @desc
 * 		Checks if a value is in the range of two numbers.
 * @example
 * MathUtils.inRange(5, 1, 10) // true
 * MathUtils.inRange(-5, 1, 10) // false
 */
export function inRange(val, a, b) {
	var min = Math.min(a, b)
	var max = Math.max(a, b)
	return val <= max && val >= min
}

/**
 * @memberOf MathUtils
 * @method isNumber
 * @param {number} num
 * 		the variable to check
 * @desc
 * 		Returns true if the passed var is a number.
 */
export function isNumber(num) {
	return !isNaN(num)
}

/**
 * @memberOf MathUtils
 * @method toNumber
 * @param {string} str
 * 		the variable to convert
 * @desc
 * 		Takes a numerical string and converts it to number type.
 */
export function toNumber(str) {
	return +str
}

/**
 * @memberOf MathUtils
 * @method restrict
 * @desc
 * 		Restricts a value to with a range.
 */
export function restrict(num, min, max) {
	return Math.max(min, Math.min(max, num))
}

/**
 * @memberOf MathUtils
 * @method getAnglePoint
 * @returns {array}
 * 		containing an [xValue, yValue] given x1, y1, distance from that starting coordinate, 
 * 		and angle (in *radians*) which the new point should be from the starting coordinate
 * @desc
 * 		Assumes original coordinate rotation is 0 radians
 */
export function getAnglePoint(x, y, distance, angle) {
	var x = x + Math.cos(angle) * distance
	var y = y + Math.sin(angle) * distance

	return [x, y]
}

/**
 * @memberOf MathUtils
 * @method getAngle
 * @retuns {number}
 * 		The angle (in *radians*) between two points given x1, y1, x2, y2
*/
export function getAngle(x1, y1, x2, y2) {
	x2 = x2 || 0
	y2 = y2 || 0
	return Math.atan2(y2 - y1, x2 - x1)
}

/**
 * @memberOf MathUtils
 * @method getDistance
 * @returns {number}
 * 		The distance between two points given x1, y1, x2, y2
*/
export function getDistance(x1, y1, x2, y2) {
	x2 = x2 || 0
	y2 = y2 || 0
	return Math.sqrt((y2 - y1) * (y2 - y1) + (x2 - x1) * (x2 - x1))
}
