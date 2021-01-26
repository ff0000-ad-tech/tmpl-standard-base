export const center = (rangeStart, rangeEnd, length, offset = 0) => {
	const range = rangeEnd - rangeStart
	return Math.round((range - length) / 2 + offset)
}

export const centerAgainst = (against, length, offset = 0) => {
	return Math.round(against - length / 2 + offset)
}

export const left = (against, offset = 0) => {
	return Math.round(against + offset)
}

export const leftOuter = (against, length, offset = 0) => {
	return Math.round(against - length + offset)
}

export const right = (against, length, offset = 0) => {
	return Math.round(against - length + offset)
}

export const rightOuter = (against, length, offset = 0) => {
	return Math.round(against + length + offset)
}

export const top = (against, offset = 0) => {
	return Math.round(against + offset)
}

export const topOuter = (against, length, offset = 0) => {
	return Math.round(against - length + offset)
}

export const bottom = (against, length, offset = 0) => {
	return Math.round(against - length + offset)
}

export const bottomOuter = (against, length, offset = 0) => {
	return Math.round(against + length + offset)
}
