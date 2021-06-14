/**
 * @class Expandable
 * @description
 * This class controls the expanding and collapsing of expandable units. The animation relys on the properties
 * set in the index. Therefore, the animation has be removed from the build file and handled internally.
 * This class can be extended with {@link ExpandableDcs} when units are used in DoubleClick.
 * <codeblock>
 * import { Expandable } from 'ad-control'
 * </codeblock>
 */
import * as GestureEvent from '../ad-events/GestureEvent'
// import GestureBase from '../ad-events/GestureBase'
// import GestureBase from '../ad-events/Gesture'

let _arg
let _afterInitExpanded = true
let _hasUserInteracted = false

let extend = {
	init: () => {},
	collapse: (gestureEvent) => {
		handle.collapseStart()
	},
	expand: (gestureEvent) => {
		handle.expandStart()
	},
	collapseComplete: () => {
		handle.collapseComplete()
	},
	expandComplete: () => {
		handle.expandComplete()
	},
}

const handle = {
	expandStart: (event) => {
		fireCallback('expandStart')
		animateExpand()
	},
	expandComplete: (event) => {
		fireCallback('expandComplete')
		_hasUserInteracted = _afterInitExpanded
		_afterInitExpanded = true
	},
	collapseStart: (event) => {
		animateCollapse()
		fireCallback('collapseStart')
		_hasUserInteracted = true
	},
	collapseComplete: (event) => {
		fireCallback('collapseComplete')
		_hasUserInteracted = true
	},
}

/**
 * @memberOf Expandable
 * @method init
 * @desc
 * 	This method initializes the class, linking all callbacks and the target being set. This should
 * 	be called Control.postMarkup
 * @example
 * Expandable.init ({
 * 	// required
 * 	target: View.expanded,
 *
 * 	// optional methods called when that event happens
 * 	expandStart: Control.handleExpandStart,
 * 	expandComplete: Control.handleExpandComplete,
 * 	collapseStart: Control.handleCollapseStart,
 * 	collapseComplete: Control.handleCollapseFinish,
 *
 * 	// optionally you can add time values for expanding/collapsing
 * 	expandTime: 0.3,
 * 	collapseTime: 0.3
 * })
 */
export function init(arg) {
	_arg = arg || {}
	defaultFalsey(_arg, 'expandTime')
	defaultFalsey(_arg, 'collapseTime')

	if (_arg.extend) {
		extend = _arg.extend
		extend.init(handle)
	}

	if (adParams.expandable.expanded) {
		_afterInitExpanded = false
		//expand()
	} else {
		animateCollapse(true)
	}
}

function defaultFalsey(obj, key) {
	obj[key] = obj[key] >= 0 ? obj[key] : 0.5
}

/**
 * @memberOf Expandable
 * @method collapse
 * @desc
 * 	Collapses the View.expand container.
 * @example
 * 	Expandable.collapse()
 */
export function collapse(gestureEvent) {
	GestureEvent.stop(gestureEvent)
	extend.collapse(gestureEvent)
}

/**
 * @memberOf Expandable
 * @method expand
 * @desc
 * 	Expands the View.expand container.
 * @example
 * 	Expandable.expand()
 */
export function expand(gestureEvent) {
	GestureEvent.stop(gestureEvent)
	extend.expand(gestureEvent)
}

/**
 * @memberOf Expandable
 * @method hasUserInteracted
 * @returns {boolean}
 * 	Indicates if the ad has been interacted by the user
 * @example
 * 	console.log(Expandable.hasUserInteracted())
 */
export function hasUserInteracted() {
	return _hasUserInteracted
}

function animateExpand() {
	const param = adParams.expandable
	TweenLite.to(_arg.target, _arg.expandTime, {
		x: param.expandedX,
		y: param.expandedY,
		width: adParams.adWidth,
		height: adParams.adHeight,
		onComplete: extend.expandComplete,
	})
}

function animateCollapse(isInit) {
	const time = isInit ? 0 : _arg.collapseTime
	const param = adParams.expandable
	TweenLite.to(_arg.target, time, {
		x: param.collapsedX,
		y: param.collapsedY,
		width: param.collapsedWidth,
		height: param.collapsedHeight,
		onComplete: isInit ? undefined : extend.collapseComplete,
	})
}

function fireCallback(name) {
	;(_arg[name] || function () {}).call()
}
