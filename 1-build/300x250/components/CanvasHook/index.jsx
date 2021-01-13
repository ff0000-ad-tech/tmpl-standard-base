import { h, render, Component, createRef } from 'preact'
import { useEffect, useRef } from 'preact/hooks'
import useCanvas from '../Hooks/useCanvas.js'

const CanvasHook = () => {
	const cref = useRef()

	const draw = (ctx) => {
		const width = 300
		const height = 250
		ctx.beginPath()
		ctx.rect(20, 20, 150, 100)
		ctx.stroke()
	}

	useCanvas(draw, cref, '2d')

	return <canvas id="CANVAS_THING" style={{ position: 'absolute', top: '0', left: '0' }} ref={cref} width="300" height="250" />
}

export default CanvasHook
