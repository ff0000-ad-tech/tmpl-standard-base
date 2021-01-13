import { h, render, Component, createRef } from 'preact'
import { useEffect, useRef, useState, useMemo } from 'preact/hooks'
import useCanvas from '../Hooks/useCanvas.js'

const CanvasHook = () => {
	const canvasRef = useRef() // Get ref to canvas
	let ctx // Var to store canvas context

	// Object values that we will tween with gsap
	let tweenObj = {
		x: 0,
		y: 0,
		width: 20,
		height: 20,
	}

	useEffect(() => {
		ctx = canvasRef.current.getContext('2d') // Set the context var
		gsap.ticker.add(draw) // Start a gsap ticker and call the draw method on every tick
	}, [])

	// Draw the canvas elements
	const draw = () => {
		console.warn('drawing')
		const width = 20
		const height = 250
		ctx.clearRect(0, 0, 300, 250)
		ctx.fillRect(tweenObj.x, tweenObj.y, tweenObj.width, tweenObj.height)
	}

	// Tween the tweenObject
	gsap.to(tweenObj, {
		duration: 1,
		x: '+=100',
		y: '+=100',
		width: '+=50',
		height: '+=20',
		onComplete: () => {
			// Remove the ticker when the tween is complete
			gsap.ticker.remove(draw)
		},
	})

	return <canvas id="CANVAS_THING" style={{ position: 'absolute', top: '0', left: '0' }} ref={canvasRef} width="300" height="250" />
}

export default CanvasHook
