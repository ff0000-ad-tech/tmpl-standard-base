/**
 * @class TextUtils
 * @description
 * This object contains methods necessary for manipulating text. <br>
 * Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
 * <codeblock>
 * import { TextUtils } from 'ad-utils'
 * </codeblock>
 */

/**
 * @memberof TextUtils
 * @method addSpaces()
 * @param {Number} numberOfSpaces
 * number of space entities to return
 * @returns {string} Returns the specified number of '&nbsp;' strings.
 */
export function addSpaces(numberOfSpaces) {
	let spacingString = ''
	for (let i = 0; i < numberOfSpaces; i++) {
		spacingString += '&nbsp;'
	}
	return spacingString
}

/**
 * @memberof TextUtils
 * @method getSpecialCharacter()
 * @param {String} requestedCharacter
 * character must match the 'label' key
 * @param {Boolean} isCapital
 * flag to return the entity as capital
 * @returns {string} Returns entity equivilent for specified character.
 */
export function getSpecialCharacter(requestedCharacter, isCapital) {
	requestedCharacter = global.proxyStringToLowerCase.apply(requestedCharacter)
	for (let i = 0; i < specialCharacters.length; i++) {
		let currentLabel = global.proxyStringToLowerCase.apply(specialCharacters[i].label)

		if (currentLabel === requestedCharacter)
			return isCapital ? specialCharacters[i].upperCase : specialCharacters[i].lowerCase
	}
	return false
}

const specialCharacters = [
	{
		label: 'iexcl',
		upperCase: '&#161;',
		lowerCase: '&#161;'
	},
	{
		label: 'trademark',
		upperCase: '&#153;',
		lowerCase: '&#153;'
	},
	{
		label: 'copyright',
		upperCase: '&#169;',
		lowerCase: '&#169;'
	},
	{
		label: 'registered',
		upperCase: '&#174;',
		lowerCase: '&#174;'
	},
	{
		label: 'nTilde',
		upperCase: '&#209;',
		lowerCase: '&#241;'
	},
	{
		label: 'aAccent',
		upperCase: '&#193;',
		lowerCase: '&#225;'
	},
	{
		label: 'eAccent',
		upperCase: '&#201;',
		lowerCase: '&#233;'
	},
	{
		label: 'iAccent',
		upperCase: '&#205;',
		lowerCase: '&#237;'
	},
	{
		label: 'oAccent',
		upperCase: '&#211;',
		lowerCase: '&#243;'
	},
	{
		label: 'uAccent',
		upperCase: '&#218;',
		lowerCase: '&#250;'
	}
]

/**
 * @memberof TextUtils
 * @method trimStartAndEnd()
 * @param {String} target
 * string to affect
 * @returns {string} Removes white space from the start and end of a string.
 */
export function trimStartAndEnd(target) {
	return target ? target.replace(/^\s\s*/, '').replace(/\s\s*$/, '') : ''
}

/**
 * @memberof TextUtils
 * @method removeSpaces()
 * @param {String} str
 * string from which to remove spaces
 * @returns {string} Removes all white space from the string.
 */
export function removeSpaces(str) {
	return str.split(' ').join('')
}

/**
 * @memberof TextUtils
 * @method pad()
 * @param {String} _target
 * number to be padded
 * @param {Number} _count
 * expected result length of the numerical string
 * @returns {string} Pads a number with zeros up to the specified number of places.
 */
export function pad(_target, _count) {
	let _sign = ''
	if (_target < 0) _sign = '-'
	_target = _target.toString().replace(/\-/, '', _target)
	while (_target.length < _count) _target = '0' + _target
	return _sign + _target
}

/**
 * @memberOf TextUtils
 * @method injectBreakTags
 * @param {String} str
 * 		A sentence or long block or copy.
 * @param {Array} indexes
 * 		An array of numbers representing the index of the space to replace with a "<br>" tag
 * @desc
 * 		Adds "<br>" tags to a block of copy and specified indexes. Reading the sentence, starting
 * 		after the first word, that space would be index 0, then next space would be 1, etc.
 */
export function injectBreakTags(str, indexes) {
	let split = str.split(/\s/g)
	indexes.sort((a, b) => b - a).forEach(val => {
		const before = split.slice(0, val)
		const median = split.slice(val, val + 2).join('<br>')
		const after = split.slice(val + 2)
		split = before.concat(median, after)
	})
	return split.join(' ')
}
