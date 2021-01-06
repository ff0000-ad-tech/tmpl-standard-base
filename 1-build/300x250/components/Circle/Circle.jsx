import { h } from 'preact'
import { useImperativeHandle, useRef, useEffect, useState } from 'preact/hooks'
import { forwardRef } from 'preact/compat'

import './Circle.scss'
// import { gsap } from 'gsap'

const Circle = forwardRef((props, ref) => {
	const mycircle = useRef()
	const [play, setPlay] = useState(false)

	useEffect(() => {
		if (play) {
			gsap.fromTo(mycircle.current, { x: 300 }, { duration: 5, x: 0 })
		}
	}, [play])

	useImperativeHandle(ref, () => ({
		start() {
			setPlay(true)
		}
	}))

	return (
		<div ref={mycircle} className="circle">
			CIRCLE
		</div>
	)
})

export default Circle
