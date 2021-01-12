import { h, render } from 'preact'

import { Core } from 'ad-control'
import { Preflight } from '@common/js/Preflight.js'

import Control from './components/Control'

// called from index.html onImpression()
const launch = (binaryAssets) => {
	console.log('Bundle.launch()')
	Core.init(binaryAssets)
		.then(() => Preflight.init())
		.then(() => Core.loadDynamic())
		.then(() => render(<Control />, document.getElementById('main')))
		.catch((err) => {
			throw err
		})
}

window.Bundle = {
	launch,
}
