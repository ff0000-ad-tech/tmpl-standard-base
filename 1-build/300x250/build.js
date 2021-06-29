import { h, render } from 'preact'
import * as Preflight from '@common/js/Preflight.js'

import Control from './components/Control'

// if rendering dps inline, creative server will add dps asset imports here
/*-- DPS.Assets.import.start --*/
import './dps-assets-index'
/*-- DPS.Assets.import.end --*/

// called from index.html onImpression()
const launch = async (binaryAssets) => {
	console.log('Bundle.launch()')
	// prepare env, ad-data, and assets
	await Preflight.init(binaryAssets)
	// render jsx
	render(<Control />, document.getElementById('main'))
}

window.Build = {
	launch,
}
