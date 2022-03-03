import { h, render } from 'preact'
import * as Preflight from '@common/js/Preflight.js'

// if rendering dps-inline, Creative Server will add dps asset imports here
/*-- DPS.Assets.import.start --*/
import './dps-assets-index'
/*-- DPS.Assets.import.end --*/

import Control from './components/Control'

// called from index.html onImpression()
const launch = async (assets) => {
	console.log('Bundle.launch()')
	// prepare env, ad-data, and assets
	await Preflight.init(assets)
	// render jsx
	render(<Control />, document.getElementById('main'))
}

window.Build = {
	launch,
}
