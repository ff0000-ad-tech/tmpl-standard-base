/**
	@npmpackage
	@class UIEvent
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-events">ad-events</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { UIEvent } from 'ad-events'
		</codeblock>
		<br><br>
		
		This module has custom events to be used with the <UIComponents>
*/
var _componentEnabled, _sliderUpdate
var UIEvent = {
	/**	
		@memberOf UIEvent	
		@const {string} ENABLED
		@desc
			Represents an 'uiComponentEnabled', fired when the enabled state of a <UIComponent> changes; useful when extending a component.
		@example
			UIEvent.ENABLED
	*/
	ENABLED: 'uiComponentEnabled',

	/**	
		@memberOf UIEvent	
		@const {string} RESIZE
		@desc
			Description needed_________.
		@example
			UIEvent.RESIZE
	*/
	RESIZE: 'uiResize',

	/**	
		@memberOf UIEvent	
		@const {string} SLIDER_UPDATE
		@desc
			Represents an 'uiSliderUpdate', fired when a <UISlider> changes its value.
		@example
			UIEvent.SLIDER_UPDATE
	*/
	SLIDER_UPDATE: 'uiSliderUpdate',

	get componentEnabled() {
		if (!_componentEnabled) {
			_componentEnabled = new CustomEvent('uiComponentEnabled')
		}
		return _componentEnabled
	},
	get sliderUpdate() {
		if (!_sliderUpdate) {
			_sliderUpdate = new CustomEvent('uiSliderUpdate')
		}
		return _sliderUpdate
	},
}

export default UIEvent
