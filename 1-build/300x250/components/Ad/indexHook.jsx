import { h, render, Component } from 'preact'
import { useRef, useEffect, useMemo, useState } from 'preact/hooks'
import { ImageManager } from 'ad-control'
// import { gsap } from 'gsap'

import Box from './../Box/Box.jsx'
import Square from './../Square/Square.jsx'
import Circle, { start } from './../Circle/Circle.jsx'
import ClassBox from './../ClassBox/ClassBox.jsx'
import './styles.scss'

import '@common/fonts/template_font.ttf'
import '@size/images/160over90-logo.png'

const Ad = () => {
	// We need to memoize the gsap timelapse because it will get reset everytime the component renders
	// which will break our animation setup
	const timeline = useMemo(() => gsap.timeline({ paused: true }), [])
	let squareRef = useRef(null)
	const circleRef = useRef(null)

	const [play, setPlay] = useState(false)

	useEffect(() => {
		// We need to use .base instead of .current to access the root dom element of the component
		timeline.to(squareRef.base, { duration: 5, css: { x: 100 } })
		timeline.to('#imgRefID', { duration: 2, css: { x: 100 } })
		timeline.to('.imgRefClass', { duration: 2, css: { x: 100 } })
		setTimeout(() => {}, 2000)
		// Without timeline stuff
		// gsap.to(squareRef.base, { duration: 5, css: { x: 100 } })
		// gsap.to('#imgRefID', { duration: 5, css: { x: 100 } })
		// gsap.to('.imgRefClass', { duration: 5, css: { x: 100 } })
		// Animation()
	}, [])

	useEffect(() => {
		if (play) {
			timeline.play()
		} else {
			timeline.reverse()
		}
	}, [play])

	return (
		<div className="ad">
			<button
				onClick={() => {
					circleRef.current.start()
					setPlay(!play)
				}}
			>
				Click to {play ? 'reverse' : 'play'}
			</button>
			<Circle ref={circleRef} />
			<Box className="yap" />
			<ClassBox className="cb" />
			<Square
				ref={el => {
					squareRef = el
				}}
			/>
			<img id="imgRefID" src={ImageManager.get('160over90-logo').src} width={40} height={40} />
			<img className="imgRefClass" src={ImageManager.get('160over90-logo').src} width={40} height={40} />
		</div>
	)
}
export default Ad
