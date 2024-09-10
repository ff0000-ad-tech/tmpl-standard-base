import { h } from 'preact'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import { forwardRef } from 'preact/compat'
import { useImperativeHandle, useRef } from 'preact/hooks'

// Components
import BrandLogo from '../BrandLogo'

// Assets
import '@common/fonts/template_font.woff'
import '@size/images/160over90-logo.png'
import '@size/images/160over90-logo-small.png'

// Styles
import './styles.scss'

const Ad = forwardRef(({ onClick, onMouseOver, onMouseLeave }, ref) => {
	const brandlogoRef = useRef()

	useImperativeHandle(ref, () => ({
		brandlogo: brandlogoRef.current,
	}))

	return (
		<div className="ad" onClick={onClick} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
			<BrandLogo ref={brandlogoRef} />
			<div className="ad__footer">
				<img className="ad__logo" src={ImageManager.get('160over90-logo-small').src} />
				<div className="ad__cta">LEARN MORE</div>
			</div>
		</div>
	)
})

export default Ad
