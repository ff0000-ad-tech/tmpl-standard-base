/**
 * @npmpackage
 * @class ObjectUtils
 * @desc
 * Utilities for affecting objects.<br>
 * Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
 * <codeblock>
 * import { ObjectUtils } from 'ad-utils'
 * </codeblock>
 */

/**
 * @memberOf ObjectUtils
 * @name objectifier
 * @property {function} objectifier.get
 * 	{@link ObjectUtils.get}
 * @property {function} objectifier.set
 * 	{@link ObjectUtils.set}
 * @desc
 * 	This object is parent to a number of utility funcitons
 */
const objectifier = {}

/**
 * @memberOf ObjectUtils
 * @method get
 * @param {string} str
 * 	a data string representing the key of desire property splited by dot. 
 * 	Array index is represented by number. For example, 'myObj.property1.0' means 
 * 	I'm pointing to the [0] element in my propperty1 array inside of myObj. 
 * @param {object} ctxObj
 * 	the context object to find the property under, defaults to window
 * @desc
 * 	Gets a property with a nested property key string.
 * 	<br><br>
 * 	<b>NOTE!!!</b>
 * 	This method is on the {@link ObjectUtils.objectifier} object!

 * @example
 * let myObj = {
 * 	prop1: [ 'a', 'b', 'c' ],
 * 	prop2: {
 * 		string: 'I am prop2',
 * 		func: function() {
 * 			alert('!!')
 * 		}
 * 	}
 * }
 *
 * let val = ObjectUtils.objectifier.get( 'prop1.0', myObj );
 * // your val should be 'a'
 *
 * val = ObjectUtils.objectifier.get( 'prop2.string', myObj );
 * // your val should be 'I am prop2'
 */
objectifier.get = function(str, ctxObj = window) {
	const splits = objectifier._getSplits(str).splits
	return objectifier._getProperty(splits, ctxObj)
}

/**
 * @memberOf ObjectUtils
 * @method set
 * @param {string} str
 * 	a data string representing the key of desire property splited by dot.
 * 	Array index is represented by number. For example, 'myObj.property1.0' means
 * 	I'm pointing to the [0] element in my propperty1 array inside of myObj.
 * @param {any} val
 * 	the value to set for th property
 * @param {object} ctxObj
 * 	the context object to find the property under, defaults to window
 * @desc
 * 	Sets a property value with a nested property key string.
 * 	<br><br>
 * 	<b>NOTE!!!</b>
 * 	This method is on the {@link ObjectUtils.objectifier} object!
 * 	
 * @example
 * //
 * let myObj = {
 * 	prop1: [ 'a', 'b', 'c' ],
 * 	prop2: {
 * 		string: 'I am prop2'
 * 	}
 * };
 * ObjectUtils.objectifier.set( 'prop1.0', 123, myObj );
 * // myObj.prop1[0] is now 123
 * ObjectUtils.objectifier.set( 'prop2.string', 'hello', myObj );
 * // myObj.prop2.string is now 'hello'
*/
objectifier.set = function(str, val, ctxObj = window) {
	const splitData = objectifier._getSplits(str, true)
	const result = objectifier._getProperty(splitData.splits, ctxObj)
	result[splitData.lastKey] = val
}

// objectifier._getSplits and objectifier._getProperty  are used internally for objectifier.get and objectifier.set
objectifier._getSplits = function(str, popLast) {
	const splits = str.split('.')
	const lastKey = popLast ? splits.pop() : null

	return {
		splits: splits,
		lastKey: lastKey
	}
}

objectifier._getProperty = function(splits, obj = {}) {
	let result = obj
	let s
	for (let i = 0; result && (s = splits[i]); i++) {
		result = s in result ? result[s] : undefined
	}
	return result
}

/**
 * @memberOf ObjectUtils
 * @method clone
 * @param {object} obj
 * 	object to clone
 * @returns {object}
 * 	cloned object
 * @desc
 * 	Get a clone of an object without reference.
 * @example
 * let oldObj = {
 * 	a: 1,
 * 	b: 2
 * };
 *
 * let newObj = ObjectUtils.clone( oldObj );
 * 
 * newObj.a = 'xyz';
 * // oldObj.a is still 1
*/
export function clone(obj) {
	if (Object.prototype.toString.call(obj) !== '[object Object]') {
		return obj
	}

	let result = obj.constructor()
	for (let key in obj) {
		result[key] = clone(obj[key])
	}

	return result
}

/**
 * @memberOf ObjectUtils
 * @method defaults
 * @param {object} obj
 * 	an object contains custom properties to overide default properties
 * @param {object} defaultObj
 * 	an object contains properties to default to
 * @param {boolean} recursive
 * 	flag for if the property check should be executed recursively
 * 	otherwise it will just be one level
 * @desc
 * 	Get an object using an object as a default, when a property doesn't in the object,
 * 	it takes it from the default object if it exists. It also checks nested objects. 
 * 	It is useful for setting up an object to store default values. 
 * @example
 * // our default object as a base set up
 * let defaultObj = {
 *     name: 'Person',
 *     weight: 0,
 *     age: 0,
 *     gender: 'male',
 *     locationDetail: {
 *         state: 'CA',
 *         city: 'Los Angeles'
 *     }
 * };
 * 
 * // the custom object
 * let customObj = {
 *     name: 'Bob',
 *     weight: 140,
 *     age: 30,
 *     locationDetail: {
 *         city: 'Santa Monica',
 *         street: 'Ocean Park'
 *     }
 * };
 * 
 * let result = ObjectUtils.defaults( customObj, defaultObj, true );
 * 
 * // your result object should look like
 * {
 * 	name: 'Bob',
 *     weight: 140,
 *     age: 30,
 *     gender: 'male',
 *     locationDetail: {
 *         state: 'CA',
 *         city: 'Santa Monica',
 *         street: 'Ocean Park'
 *     }
 * }
 * 
 * //if not recursive
 * let result = ObjectUtils.defaults( customObj, defaultObj, false );
 * 
 * // your result object should look like ( notice that it takes the whole locationDetail object )
 * {
 * 	name: 'Bob',
 *     weight: 140,
 *     age: 30,
 *     gender: 'male',
 *     locationDetail: {
 *         city: 'Santa Monica',
 *         street: 'Ocean Park'
 *     }
 * }
 */
function defaults(obj = {}, defaultObj, recursive) {
	let result = clone(obj)

	for (let key in defaultObj) {
		let item = defaultObj[key]

		if (result[key] === undefined) {
			result[key] = defaultObj[key]
		} else if (recursive) {
			if (Object.prototype.toString.call(item) === '[object Object]') {
				result[key] = defaults(result[key], item, recursive)
			}
		}
	}

	return result
}

export { defaults, objectifier }
