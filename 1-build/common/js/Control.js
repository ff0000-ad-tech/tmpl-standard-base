import { Gesture, GestureEvent } from 'ad-events'


export class Control {
	static preMarkup() {
		console.log('Control.preMarkup()')

	}

	static postMarkup() {
		console.log('Control.postMarkup()')
		// listen for default exit
		Gesture.add(View.main, GestureEvent.CLICK, Control.handleClick)



	}


	static handleClick(event) {

		Network.exit(clickTag) 
	}




}
