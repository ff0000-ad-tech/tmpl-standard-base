import { ImageManager } from '@ff0000-ad-tech/ad-control'

export default function AdData() {
	var self = this

	/**
		EXTRACT JSON DATA
		Prepare dynamic data here.
	 */

	/**
		DYNAMIC IMAGES
		Dynamically loaded images need to be in their own directory, like "dynamic_images/".

		Then, you need to add your dynamic image-paths to the load-queue, so that when
		the secondary preload happens, these assets will get loaded. For example:

		self.theImageName = ImageManager.addToLoad(adParams.imagesPath + 'sample.jpg');
	 */
	self.copy = ['WHY PAY MORE\nFOR ELECTRICITY?', 'MAKE THE MOST OF YOUR\nENERGY AND MONEY', 'CHOOSE SMART SAVINGS\nWITH DISCOUNT POWER.']
	self.fonts = {
		primary: 'template_font',
	}

	self.colors = {}

	// Store svg markup for use in all UISvg instances, reduces duplicate code across builds.  See UISvg.
	self.svg = {}
}
