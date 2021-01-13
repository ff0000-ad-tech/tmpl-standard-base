import { h, render, Component, createRef } from 'preact'
import { useEffect, useRef, useState, useMemo } from 'preact/hooks'
import useCanvas from '../Hooks/useCanvas.js'

const CanvasHook = () => {
	const canvasRef = useRef()

	let tweenObj = {
		x: 0,
		y: 0,
		width: 20,
		height: 20,
	}

	const draw = (ctx) => {
		const width = 20
		const height = 250
		ctx.clearRect(0, 0, 300, 250)
		ctx.fillRect(tweenObj.x, tweenObj.y, tweenObj.width, tweenObj.height)
	}

	gsap.to(tweenObj, {
		duration: 1,
		x: '+=100',
		y: '+=100',
		width: '+=50',
		height: '+=20',

		onUpdate: () => {
			console.warn(tweenObj.angle)
		},
	})
	useCanvas(draw, canvasRef, '2d')

	return <canvas id="CANVAS_THING" style={{ position: 'absolute', top: '0', left: '0' }} ref={canvasRef} width="300" height="250" />
}

export default CanvasHook
