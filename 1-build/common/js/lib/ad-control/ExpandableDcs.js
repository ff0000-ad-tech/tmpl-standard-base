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
	collapse: (event) => {
		console.log('DCS > collapse()')
		Enabler.requestCollapse()
		if (event) {
			Enabler.reportManualClose()
		}
	},
	expand: () => {
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
