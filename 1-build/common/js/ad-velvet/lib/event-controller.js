let _eventPool = {}

export function add(type, handler) {
	if (!_eventPool[type]) {
		_eventPool[type] = []
	}
	const arr = _eventPool[type]
	for (let i = 0, k = arr.length; i < k; i++) {
		if (arr[i] === handler) return
	}
	arr.push(handler)
}

export function remove(type, handler) {
	const arr = _eventPool[type]
	if (arr) {
		for (let i = 0, k = arr.length; i < k; i++) {
			if (arr[i] === handler) {
				arr.splice(i, 1)
				break
			}
		}
	}
}

export function dispatch(type) {
	if (_eventPool[type]) {
		_eventPool[type].map(handler => {
			handler()
		})
	}
}
