const useCanvasAlign = (canvasWidth, canvasHeight, obj) => {
	const { x, y } = obj.align

	switch (x.type) {
		case 'center':
			let xcenter = x.against ? x.against : canvasWidth / 2
			obj.x = xcenter - obj.width / 2 + (x.offset || 0)
			break
		case 'left':
			let xleft = x.against ? x.against : 0
			xleft -= x.outer ? obj.width : 0
			obj.x = xleft + (x.offset || 0)
			break
		case 'right':
			let xright = x.against ? x.against - obj.width : canvasWidth - obj.width
			xright += x.outer ? obj.width : 0
			obj.x = xright + (x.offset || 0)
			break

		default:
			break
	}

	switch (y.type) {
		case 'center':
			let ycenter = y.against ? y.against : canvasHeight / 2
			obj.y = ycenter - obj.height / 2 + (y.offset || 0)
			break
		case 'top':
			let ytop = y.against ? y.against : 0
			ytop -= y.outer ? obj.height : 0
			obj.y = xtop + (y.offset || 0)
			break
		case 'bottom':
			let ybottom = y.against ? y.against - obj.height : canvasHeight - obj.height
			ybottom += y.outer ? obj.height : 0
			obj.y = ybottom + (y.offset || 0)
			break

		default:
			break
	}

	return obj
}

export default useCanvasAlign
