/**
 * @class ExpandableDcs
 * @description
 * This is and extension of {@link Expandable} when units are used in DoubleClick. The only difference in the
 * init() method is to pass in this class to the Expandable.init()
 * <codeblock>
 * import { ExpandableDcs } from 'ad-control'
 *
 * Expandable.init ({
 * 	target : View.expanded,
 * 	expandStart: Control.handleExpandStart,
 * 	expandComplete: Control.handleExpandComplete,
 * 	collapseStart: Control.handleCollapseStart,
 * 	collapseComplete: Control.handleCollapseFinish,
 *
 * 	extend: ExpandableDcs
 * })
 * </codeblock>
 */

export default {
	init: (handle) => {
		Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, handle.expandStart)
		Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, handle.expandComplete)
		Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, handle.collapseStart)
		Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, handle.collapseComplete)

		if (adParams.expandable.expanded) {
			Enabler.setStartExpanded(true)
		}
	},
	collapse: (gestureEvent) => {
		console.log('DCS > collapse()')
		Enabler.requestCollapse()
		if (gestureEvent) Enabler.reportManualClose()
	},
	expand: (gestureEvent) => {
		console.log('DCS > expand()')
		Enabler.requestExpand()
	},
	collapseComplete: () => {
		console.log('DCS > collapseComplete()')
		Enabler.finishCollapse()
	},
	expandComplete: () => {
		console.log('DCS > expandComplete()')
		Enabler.finishExpand()
	},
}
