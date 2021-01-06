import { h, render, Component } from 'preact'
import { useRef, useEffect } from 'preact/hooks'
import { ImageManager } from 'ad-control'
// import { gsap } from 'gsap'

import Box from './../Box/Box.jsx'
import Square from './../Square/Square.jsx'
import './styles.scss'

import '@common/fonts/template_font.ttf'
import '@size/images/160over90-logo.png'

const Ad = () => {
	let squareRef = useRef(null)
	const animation = useRef(Animation)

	useEffect(() => {
		gsap.to(squareRef, { duration: 5, css: { x: 100 } })
		gsap.to('#imgRefID', { duration: 5, css: { x: 100 } })
		gsap.to('.imgRefClass', { duration: 5, css: { x: 100 } })
		// Animation()
	}, [])

	return (
		<div className="ad">
			<Box className="yap" />
			<Square
				ref={el => {
					squareRef = el.base
				}}
			/>
			<img id="imgRefID" src={ImageManager.get('160over90-logo').src} width={80} height={80} />
			<img className="imgRefClass" src={ImageManager.get('160over90-logo').src} width={80} height={80} />
		</div>
	)
}
export default Ad
