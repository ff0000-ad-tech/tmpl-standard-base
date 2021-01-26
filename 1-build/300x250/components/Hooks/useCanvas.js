import { useRef, useEffect } from 'preact/hooks'

const useCanvas = (draw, canvasRef, context = '2d') => {
	const dostuff = () => {
		const ctx = canvasRef.current.getContext(context)
		draw(ctx)
	}

	useEffect(() => {
		gsap.ticker.add(dostuff)
		gsap.ticker.fps(30)
	}, [])

	return canvasRef
}

export default useCanvas
// import { useRef, useEffect } from 'preact/hooks'

// const useCanvas = (draw, canvasRef, context = '2d') => {
// 	useEffect(() => {
// 		const ctx = canvasRef.current.getContext(context)
// 		let animationFrameId = requestAnimationFrame(renderFrame)

// 		function renderFrame() {
// 			animationFrameId = requestAnimationFrame(renderFrame)
// 			draw(ctx)
// 		}

// 		return () => cancelAnimationFrame(animationFrameId)
// 	}, [draw, context])

// 	return canvasRef
// }

// export default useCanvas
