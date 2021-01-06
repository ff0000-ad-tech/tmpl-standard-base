import { h } from 'preact'
import { useRef, useEffect } from 'preact/hooks'

import './Box.scss'
import { TweenMax } from 'gsap'

const Box = () => {
	const mybox = useRef()

	useEffect(() => {
		TweenMax.fromTo(mybox.current, 5, { x: 100 }, { x: 0 })
	}, [])

	return (
		<div ref={mybox} className="box">
			BOX
		</div>
	)
}

export default Box
