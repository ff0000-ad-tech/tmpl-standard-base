import { h } from 'preact'
import { useImperativeHandle } from 'preact/hooks'
import { forwardRef } from 'preact/compat'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import './styles.scss'
import '@size/images/160over90-logo.png'

// Wrap in forwardRef to expose functions to parent component
const BrandLogo = forwardRef((props, ref) => {
	const start = () => {
		gsap.fromTo('#logo', { scale: 0 }, { delay: 0.3, duration: 0.5, scale: 1.2, ease: 'expo.out' })
	}
	const over = () => {
		gsap.to('#logo', { duration: 0.3, scale: 1.4, ease: 'expo.out' })
	}
	const out = () => {
		gsap.to('#logo', { duration: 0.3, scale: 1.2, ease: 'expo.out' })
	}

	// Expose the following functions to parent component
	useImperativeHandle(ref, () => ({
		start,
		over,
		out,
	}))

	return (
		<div className="bl">
			<img id="logo" src={ImageManager.get('160over90-logo').src} alt="logo" />
		</div>
	)
})

export default BrandLogo
