/**
	@npmpackage
	@class GestureBase

	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-events">ad-events</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { GestureBase } from 'ad-events'
		</codeblock>
		<br><br>
		
		-- INTERNAL MODULE --
		This module is used exclusively by Gesture.  When a dom element has an event listener registered, it creates an instance of this module 
		to hold all the event handlers for the dom element.  Every dom element gets a new GestureBase instance. {@link Gesture}
	
*/
import { Device } from 'ad-external'
import { Styles } from 'ad-view'
import * as GestureEvent from './GestureEvent'

class GestureBase {
	constructor(elem) {
		var G = this
		G.elem = elem
		G.hasActiveChildren = true
		G.debug = false
		G.eventList = []

		G._isDragEnabled = false
		// isDragging also used for swipe event check
		G._isDragging = false
		G._give = 2

		// offset coordinate for element
		G._oX = 0
		G._oY = 0

		// previous coordinates for drag/swipe
		G._p1X = 0
		G._p1Y = 0
		G._p2X = 0
		G._p2Y = 0

		// start coordinate
		G._sX = 0
		G._sY = 0

		// velocity
		G._vX = 0
		G._vY = 0

		G._cursor = 'mouse'
		G._start = 'down'
		G._end = 'up'

		G.init()
	}

	init() {
		var G = this
		if (G.debug) console.log('GestureBase.init()')

		G._handleTouchStart = G._handleTouchStart.bind(G)
		G._handleDown = G._handleDown.bind(G)
		G._handleDrag = G._handleDrag.bind(G)
		G._handleUp = G._handleUp.bind(G)

		G._elemAdd = G.elem.addEventListener.bind(G.elem)
		G._elemRemove = G.elem.removeEventListener.bind(G.elem)

		G._reset()
	}

	// replace addEventListener so can flag the event type
	register(name, handler) {
		var G = this
		if (G.debug) console.log('GestureBase.register(', name, ')')

		G.eventList.push(name)
		G._checkDragEnabled()

		// then actually add the listener
		G._elemAdd(name, handler)
	}

	unregister(name, handler) {
		var G = this
		if (G.debug) console.log('GestureBase.unregister(', name, ')')

		var index = G.eventList.indexOf(name)
		if (index >= 0) {
			G.eventList.splice(index, 1)
		}
		G._checkDragEnabled()

		G._elemRemove(name, handler)
	}

	/* ------------------------------------------------------------------------------------------------------------- */
	// UTILITY
	_reset() {
		var G = this
		G._cursor = 'mouse'
		G._start = 'down'
		G._end = 'up'
		G.elem.addEventListener('touchstart', G._handleTouchStart)

		// listen for both touch and mouse, except on iOS devices
		if (Device.os != 'ios') G.elem.addEventListener('mousedown', G._handleDown)
	}

	_checkDragEnabled() {
		var G = this
		var hasDragEventIndex = G.eventList.join('').indexOf('onDrag')

		// check if it is a drag, therefore enabling dragability
		G._isDragEnabled = hasDragEventIndex > -1
	}

	// Android stores things like pageX in an array. This scopes the internally used event properly
	_getEventScope(event) {
		//if( this.debug ) console.log( 'GestureBase._getEventScope(), event:', event );
		// check for existence of changedTouches instead
		//return ( Device.os == 'android' && event instanceof TouchEvent ) ? event.changedTouches[0] : event ;
		return event.changedTouches ? event.changedTouches[0] : event
	}

	/* ------------------------------------------------------------------------------------------------------------- */
	// WINDOW EVENT ENABLE
	_add(type, handler) {
		window.addEventListener(this._cursor + type, handler)
	}

	_remove(type, handler) {
		window.removeEventListener(this._cursor + type, handler)
	}

	/* ------------------------------------------------------------------------------------------------------------- */
	// HANLDERS
	_handleDown(event) {
		var G = this
		if (G.debug) console.log('GestureBase._handleDown()')

		GestureEvent.startPoint()

		G.elem.removeEventListener('touchstart', G._handleTouchStart)
		if (Device.os != 'ios') G.elem.removeEventListener('mousedown', G._handleDown)

		G._isDragging = false

		G._add(G._end, G._handleUp)
		G._add('move', G._handleDrag)

		var touch = G._getEventScope(event)
		var mouseX = touch.pageX
		var mouseY = touch.pageY

		var elemRect = G.elem.getBoundingClientRect()
		var localOffsetX = mouseX - elemRect.left
		var localOffsetY = mouseY - elemRect.top

		var localX = G.elem.x || Styles.getCss(G.elem, 'x')
		var localY = G.elem.y || Styles.getCss(G.elem, 'y')
		var globalOffsetX = elemRect.left - localX
		var globalOffsetY = elemRect.top - localY

		G._oX = globalOffsetX + localOffsetX
		G._oY = globalOffsetY + localOffsetY

		var elemPositionX = mouseX - G._oX
		var elemPositionY = mouseY - G._oY

		// reset the dragging vars
		G._sX = G._p1X = G._p2X = mouseX
		G._sY = G._p1Y = G._p2Y = mouseY

		/*console.log( 
			'\n\t_handleDown()',
			'| mouse:', mouseX, mouseY, 
			'| localOffset:', localOffsetX, localOffsetY,
			'| local:', localX, localY,
			'| globalOffset:', globalOffsetX, globalOffsetY,
			'| totalOffset:', G._oX, G._oY,
			'| elemPosition:', elemPositionX, elemPositionY,
			'\n\n'
		)*/

		localCreateEvent('onPress')

		function localCreateEvent(name) {
			if (GestureEvent.stopped(name)) return
			var newEvent = new GestureEvent.Event(name, mouseX, mouseY, localOffsetX, localOffsetY, elemPositionX, elemPositionY)
			if (G.debug) console.log(' -> dispatch', name)
			G.elem.dispatchEvent(newEvent)
		}
	}

	_handleUp(event, bypass) {
		var G = this
		if (G.debug) console.log('GestureBase._handleUp()')

		G._remove(G._end, G._handleUp)
		G._remove('move', G._handleDrag)

		var touch = G._getEventScope(event)
		var mouseX = touch.pageX
		var mouseY = touch.pageY

		var elemRect = G.elem.getBoundingClientRect()
		var localOffsetX = mouseX - elemRect.left
		var localOffsetY = mouseY - elemRect.top

		var elemPositionX = mouseX - G._oX
		var elemPositionY = mouseY - G._oY

		var eventName

		if (bypass !== true) {
			localCreateEvent('onRelease')
		}

		var offsetTop = elemRect.top + window.pageYOffset
		var offsetBottom = offsetTop + elemRect.height
		var offsetLeft = elemRect.left + window.pageXOffset
		var offsetRight = offsetLeft + elemRect.width

		if (G._isDragging) {
			if (G._isDragEnabled) {
				G._dragEndOrSwipe('onDragStop')
			}
			console.log('  -> No CLICK Fired, was dragging')
		} else {
			if (mouseX > offsetLeft && mouseX < offsetRight && mouseY > offsetTop && mouseY < offsetBottom) {
				localCreateEvent('onSelect')
			}
		}

		function localCreateEvent(name) {
			if (GestureEvent.stopped(name)) return
			var newEvent = new GestureEvent.Event(
				name,
				mouseX,
				mouseY,
				localOffsetX,
				localOffsetY,
				elemPositionX,
				elemPositionY,
				0,
				0,
				G._vX,
				G._vY
			)
			if (G.debug) console.log(' -> dispatch', name)
			G.elem.dispatchEvent(newEvent)
		}

		if (G._isDragging) {
			G._dragEndOrSwipe('onSwipe')
		}

		G._reset()

		// this prevents the second mouse down on Android
		event.preventDefault()

		GestureEvent.endPoint()
	}

	/* ------------------------------------------------------------------------------------------------------------- */
	// TOUCH BYPASSING
	// This will stop from both touch and mouse events firing, thus doubling every Gesture Event fired.
	_handleTouchStart(event) {
		var G = this
		if (G.debug) console.log('GestureBase._handleTouchStart()')

		// Change the native events to listen for the rest of the system
		G._cursor = 'touch'
		G._start = 'start'
		G._end = 'end'

		G._handleDown(event)
	}

	/* ------------------------------------------------------------------------------------------------------------- */
	// DRAG
	_handleDrag(event) {
		var G = this
		if (G.debug) console.log('GestureBase._handleDrag()')

		var touch = G._getEventScope(event)
		var mouseX = touch.pageX
		var mouseY = touch.pageY

		var diffx1 = mouseX - G._p1X
		var diffx2 = mouseX - G._p2X
		G._vX = (diffx2 - diffx1) / 2 + diffx1

		var diffy1 = mouseY - G._p1Y
		var diffy2 = mouseY - G._p2Y
		G._vY = (diffy2 - diffy1) / 2 + diffy1

		var elemPositionX = mouseX - G._oX
		var elemPositionY = mouseY - G._oY

		var elemRect = G.elem.getBoundingClientRect()
		var localOffsetX = mouseX - elemRect.left
		var localOffsetY = mouseY - elemRect.top

		/*console.log( 
			'\t_handleDrag()',
			'| mouse:', mouseX, mouseY, 
			'| totalOffset:', G._oX, G._oY,
			'| elemPosition:', elemPositionX, elemPositionY,
			'| velocity:', G._vX, G._vY,
			'| distance:', G._p1X - G._sX, G._p1Y - G._sY
		)*/

		var eventName

		if (G._isDragging) {
			if (G._isDragEnabled) {
				localCreateEvent('onDrag')
			}
		} else {
			// check the inital movement to register as dragging or just a click
			if (Math.abs(G._sX - mouseX) > G._give || Math.abs(G._sY - mouseY) > G._give) {
				G._isDragging = true

				if (G._isDragEnabled) {
					// dispatch when offset distance is exceeded
					localCreateEvent('onDragStart')
				}
			}
		}

		function localCreateEvent(name) {
			if (GestureEvent.stopped(name)) return
			var newEvent = new GestureEvent.Event(
				name,
				mouseX,
				mouseY,
				localOffsetX,
				localOffsetY,
				elemPositionX,
				elemPositionY,
				G._p1X - G._sX,
				G._p1Y - G._sY,
				G._vX,
				G._vY
			)
			if (G.debug) console.log(' -> dispatch', name)
			G.elem.dispatchEvent(newEvent)
		}

		G._p2X = G._p1X
		G._p1X = mouseX

		G._p2Y = G._p1Y
		G._p1Y = mouseY
	}

	/* ------------------------------------------------------------------------------------------------------------- */
	// DRAG END | SWIPE
	_dragEndOrSwipe(type) {
		var G = this
		if (G.debug) console.log('GestureBase._dragEndOrSwipe()', type)

		if (GestureEvent.stopped(name)) return

		var elemRect = G.elem.getBoundingClientRect()
		var evt = new GestureEvent.Event(
			type,
			G._p1X,
			G._p1Y,
			G._p1X - elemRect.left,
			G._p1Y - elemRect.top,
			G._p1X - G._oX,
			G._p1Y - G._oY,
			// since _xp is assigned after moving, must use _p2X
			G._p2X - G._sX,
			G._p2Y - G._sY,
			G._vX,
			G._vY
		)
		if (G.debug) console.log(' -> dispatch', type)
		G.elem.dispatchEvent(evt)
	}
}

export default GestureBase
