import { Core } from "ad-control";
import { Preflight } from "@common/js/Preflight.js";
import { h, render } from "preact";

import Build from './components/Build'

// import { Main, MainBorder } from "@common/js/Build.js";
// import { Animation } from "@common/js/Animation.js";
// import { Control } from "@common/js/Control.js";

export class Ad {
	// called from index.html onImpression()
	static launch(binaryAssets) {
		console.log("Ad.launch()");
		Core.init(binaryAssets)
			.then(() => Preflight.init())
			.then(() => Core.loadDynamic())
			.then(() => Ad.prepare())
			.catch(err => {
				throw err;
			});
	}

	static prepare() {
		console.log("Ad.prepare()");
		// Control.preMarkup()

		render(<Build />, document.getElementById("main"));
		// View.main = new Main()
		// View.mainBorder = new MainBorder()

		// Control.postMarkup()

		// Animation.start()
	}
}
window.Ad = Ad;
