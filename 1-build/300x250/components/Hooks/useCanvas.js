import { useRef, useEffect } from 'preact/hooks'

const useCanvas = (draw, canvasRef, context = '2d') => {
	useEffect(() => {
		const ctx = canvasRef.current.getContext(context)
		let animationFrameId = requestAnimationFrame(renderFrame)

		function renderFrame() {
			animationFrameId = requestAnimationFrame(renderFrame)
			draw(ctx)
		}

		return () => cancelAnimationFrame(animationFrameId)
	}, [draw, context])

	return canvasRef
}

export default useCanvas
