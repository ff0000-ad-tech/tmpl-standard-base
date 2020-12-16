import { h, render } from 'preact'

import { Core } from 'ad-control'
import { Preflight } from '@common/js/Preflight.js'

import Ad from './components/Ad'

export class Bundle {
	// called from index.html onImpression()
	static launch(binaryAssets) {
		console.log('Bundle.launch()')
		Core.init(binaryAssets)
			.then(() => Preflight.init())
			.then(() => Core.loadDynamic())
			.then(() => render(<Ad />, document.getElementById('main')))
			.catch(err => {
				throw err
			})
	}
}
window.Bundle = Bundle
