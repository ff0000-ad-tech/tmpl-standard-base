import { h } from 'preact'
import { useRef, useEffect } from 'preact/hooks'

import './Box.scss'
// import { gsap } from 'gsap'

const Box = () => {
	const mybox = useRef()

	useEffect(() => {
		gsap.fromTo(mybox.current, { x: 300 }, { duration: 5, x: 0 })
	}, [])

	return (
		<div ref={mybox} className="box">
			BOX
		</div>
	)
}

export default Box
