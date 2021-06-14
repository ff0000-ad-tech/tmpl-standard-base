// TODO - ? remove gestureBase if no events added
// 		- ? total distance

/**
	@npmpackage
	@class Gesture
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-events">ad-events</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { Gesture } from 'ad-events'
		</codeblock>
		<br><br>
		
		This module is used for seamless use of Mouse / Touch Events, such as click vs tap, mousedown vs touch down, etc.  
		This class figures which to use and reports custom events.<br><br>
	
		See {@link GestureEvent} for available events.
*/
import GestureBase from './GestureBase'
import { Styles } from 'ad-view'

var Gesture = new (function () {
	var G = this

	var _targets = []
	var _disableList = []
	var _eventPass = document.createEventObject != undefined
	var _eventLooping = false

	G._kills = {}

	/* ------------------------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS

	/**
		@memberOf Gesture
		@method add | addEventListener
		@param {element} target
			The DOM element
		@param {string} name
			The event's name as a String or GestureEvent constant
		@param {function} handler
			The function to be called on event trigger
		@desc
			Registers an event so that the listener receives notification of an event.
			
		@example
			Gesture.addEventListener( myDiv, GestureEvent.CLICK, handleClick );
			function handleClick( event ) {
				console.log( 'Click heard' );
			}					
	*/
	G.add = G.addEventListener = function (target, name, handler) {
		var _gestureBase = getGestureBase(target)
		_gestureBase.register(name, handler)
		Styles.setCss(target, 'cursor', 'pointer')

		// OVERWRITES mouseChildren(false) of parent
		Styles.setCss(target, 'pointer-events', 'auto')
	}

	/**
		@memberOf Gesture
		@method remove | removeEventListener
		@param {element} target
			The DOM element
		@param {string} name
			The event's name as a String or GestureEvent constant
		@param {function} handler
			The function registered for call on event trigger
		@desc
			Unregisters an event of notifications.

		@example
			Gesture.removeEventListener ( myDiv, GestureEvent.CLICK, handleClick );					
	*/
	G.remove = G.removeEventListener = function (target, name, handler) {
		var _gestureBase = getGestureBase(target)
		if (_gestureBase) {
			_gestureBase.unregister(name, handler)
			if (_gestureBase.eventList.length <= 0) {
				Styles.setCss(target, 'cursor', 'auto')
			}
		}
	}

	/**
		@memberOf Gesture
		@method disable
		@param {element} target
			The DOM element
		@desc
			Disables a DOM element from responding the mouse/touch/gesture events. For bubbling events, such as click, this will disable its children as well.
		
		@example	
			Gesture.disable( myDiv );
	*/
	G.disable = function (target) {
		var gestureBase = getGestureBase(target)
		_disableList.push(gestureBase)

		if (_eventPass) {
			gestureBase.register(GestureEvent.CLICK, handlePassThroughClick)
			Styles.setCss(target, 'cursor', 'auto')
		} else {
			Styles.setCss(target, 'pointer-events', 'none')
		}
	}

	/**
		@memberOf Gesture
		@method disableChildren
		@param {element} target
			The DOM element
		@desc
			Disables all child DOM elements from responding the mouse/touch/gesture events. For bubbling events, such as click, this is unnecessary

		@example
			Gesture.disableChildren ( myDiv );
	*/
	G.disableChildren = function (target) {
		setActiveChildren(target, false)
	}

	/**
		@memberOf Gesture
		@method enable
		@param {element} target
			The DOM element
		@desc
			Enables all a DOM element to responding the mouse/touch/gesture events. For bubbling events, such as click, this will enable its children as well.

		@example
			Gesture.disable ( myDiv );
	*/

	G.enable = function (target) {
		var gestureBase = getGestureBase(target)

		for (var i = 0; i < _disableList.length; i++) {
			if (gestureBase == _disableList[i]) {
				if (_eventPass) {
					gestureBase.unregister(GestureEvent.CLICK, handlePassThroughClick)
				} else {
					Styles.setCss(target, 'pointer-events', 'auto')
					Styles.setCss(target, 'cursor', 'pointer')
				}
				break
			}
		}
	}

	/**
		@memberOf Gesture
		@method enableChildren
		@param {element} target
			The DOM element
		@desc
			Enables all child DOM elements to responding the mouse/touch/gesture events. For bubbling events, such as click, this is unnecessary

		@example
			Gesture.enableChildren ( myDiv );
	*/
	G.enableChildren = function (target) {
		setActiveChildren(target, true)
	}

	/* ------------------------------------------------------------------------------------------------------------- */
	// PRIVATE METHODS
	function getGestureBase(target) {
		var _gestureBase = null
		for (var i = 0; i < _targets.length; i++) {
			if (_targets[i].elem === target) {
				_gestureBase = _targets[i]
				break
			}
		}
		if (!_gestureBase) {
			_gestureBase = createGestureBase(target)
		}
		return _gestureBase
	}

	function createGestureBase(target) {
		var _gestureBase = new GestureBase(target)
		_targets.push(_gestureBase)
		return _gestureBase
	}

	function setActiveChildren(target, active) {
		var gestureBase = getGestureBase(target)
		if (gestureBase.hasActiveChildren != active) {
			gestureBase.hasActiveChildren = active
			var children = gestureBase.elem.getElementsByTagName('*')
			for (var i = 0; i < children.length; i++) {
				//console.log( typeof children[i], ' ; ', children[i].id )
				// gets only the children, not grand-children
				if (children[i].parentNode == target) {
					active ? G.enable(children[i]) : G.disable(children[i])
				}
			}
		}
	}

	function getNextLayerElement(target, x, y, list) {
		target.style.visibility = 'hidden'
		list.push(target)

		var elem = document.elementFromPoint(x, y)
		//console.log( 'elementFromPoint() : ', elem.id );

		for (var i = 0; i < _disableList.length; i++) {
			//console.log( ' => disable list: ', i, ' : ', _disableList[i].elem.id )
			if (_disableList[i].elem == elem) {
				//console.log( '  -^ match so go again')
				return getNextLayerElement(elem, x, y, list)
			}
		}

		return elem
	}

	function getForwardedTarget(event) {
		var hiddenList = []

		var el = getNextLayerElement(event.target, event.clientX, event.clientY, hiddenList)
		//console.log( ' returned element: (', event.clientX, ', ', event.clientY, ') ', el.id )

		//console.log( 'hidden list:')
		for (var i = 0; i < hiddenList.length; i++) {
			//console.log( '  -> ', i, ' ', hiddenList[i].id )
			hiddenList[i].style.visibility = 'visible'
		}
		hiddenList = []

		event.stopImmediatePropagation()
		//console.log( ' - STOP - ')

		return el
	}

	/* ------------------------------------------------------------------------------------------------------------- */
	// EVENT HANDLERS

	// IE 9 & 10 needs to have events captured and passed to the next layer dom element
	function handlePassThroughClick(event) {
		//console.log( 'pass through:', event )
		var el = getForwardedTarget(event)

		// IE 9+
		var evt = document.createEvent('HTMLEvents')
		evt.initEvent(event.type, true, false)
		//console.log( '     # ', el.id, ' is dispatching ' )
		el.dispatchEvent(evt)
	}
})()

export default Gesture
