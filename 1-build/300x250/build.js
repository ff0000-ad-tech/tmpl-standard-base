import { h, render } from 'preact'

import * as Preflight from '@common/js/Preflight.js'

import Control from './components/Control'

// called from index.html onImpression()
const launch = async (binaryAssets) => {
	console.log('Bundle.launch()')
	// prepare env and assets
	await Preflight.init(binaryAssets)
	// render jsx
	render(<Control />, document.getElementById('main'))
}

window.Build = {
	launch,
}
