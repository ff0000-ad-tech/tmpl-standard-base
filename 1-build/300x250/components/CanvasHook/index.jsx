import { h, render, Component, createRef } from 'preact'
import { useEffect, useRef, useState } from 'preact/hooks'
import useCanvas from '../Hooks/useCanvas.js'

const CanvasHook = () => {
	const canvasRef = useRef()
	let [angle, setAngle] = useState(0)

	const draw = (ctx) => {
		setAngle(angle++)
		const width = 300
		const height = 250
		ctx.save()
		ctx.beginPath()
		ctx.clearRect(0, 0, width, height)
		ctx.translate(width / 2, height / 2)
		ctx.rotate((angle++ * Math.PI) / 180)
		ctx.fillStyle = '#4397AC'
		ctx.fillRect(-width / 4, -height / 4, width / 2, height / 2)
		ctx.restore()
	}

	useCanvas(draw, canvasRef, '2d')

	return <canvas id="CANVAS_THING" style={{ position: 'absolute', top: '0', left: '0' }} ref={canvasRef} width="300" height="250" />
}

export default CanvasHook
