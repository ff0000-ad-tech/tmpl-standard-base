let _arg
let _afterInitExpanded = true
let _hasUserInteracted = false

let extend = {
	init: () => {},
	collapse: () => {
		handle.collapseStart()
	},
	expand: () => {
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
	expandStart: () => {
		fireCallback('expandStart')
		animateExpand()
	},
	expandComplete: () => {
		fireCallback('expandComplete')
		_hasUserInteracted = _afterInitExpanded
		_afterInitExpanded = true
	},
	collapseStart: () => {
		animateCollapse()
		fireCallback('collapseStart')
		_hasUserInteracted = true
	},
	collapseComplete: () => {
		fireCallback('collapseComplete')
		_hasUserInteracted = true
	},
}

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

export function collapse(e) {
	extend.collapse(e)
}

export function expand(e) {
	extend.expand(e)
}

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
