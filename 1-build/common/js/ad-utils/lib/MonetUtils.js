/**
 * @npmpackage
 * @class MonetUtils
 * @desc
 * Monet utilities.
 * <codeblock>
 * import { MonetUtils } from 'ad-utils'
 * </codeblock>
 */

let _data

// prettier-ignore
let _monetTypes = {
	'text': 'text',
	'number': 'value',
	'image': 'url',
	'video': 'url',
	'url': 'url',
	'bool': 'value'
}

export function setData(integrator) {
	var promise = integrator.getMonetData()
	promise.then(function(data) {
		_data = data
	})
	return promise
}

export function getDataByKey(key) {
	var output
	var outputType
	for (var type in _monetTypes) {
		if (_data.rootAssets[type + '.' + key]) {
			outputType = type
			output = _data.rootAssets[type + '.' + key]
			break
		}
	}
	return output && output[_monetTypes[outputType]]
}
