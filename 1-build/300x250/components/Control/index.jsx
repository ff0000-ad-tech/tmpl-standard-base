import { h } from 'preact'
import { useEffect, useRef } from 'preact/hooks'
import Ad from '../Ad'

const Control = () => {
	const adRef = useRef()

	const startAnimation = () => {
		// Get any refs from the ad component
		const { brandlogo } = adRef.current || {}

		brandlogo?.start()

		gsap.set('.ad__cta', { opacity: 1 })

		gsap.from('.ad__logo', { delay: 1, duration: 0.5, x: -adParams.adWidth, ease: 'expo.out' })
		gsap.from('.ad__cta', { delay: 1, duration: 0.5, x: adParams.adWidth, ease: 'expo.out' })
	}

	useEffect(() => {
		window.hidePreloader()
		startAnimation()
	}, [])

	const handleClick = () => {
		Network.exit(window.clickTag)
	}

	const handleRollOver = () => {
		adRef.current?.brandlogo?.over()
	}

	const handleRollOut = () => {
		adRef.current?.brandlogo?.out()
	}

	return <Ad ref={adRef} onClick={handleClick} onMouseOver={handleRollOver} onMouseLeave={handleRollOut} />
}

export default Control
