import * as adDates from './index.js'
;['TzDate', 'RecurringSchedule', 'DateSchedule', 'DateFormatter', 'DateManager', 'DateUtils', 'Timezone'].forEach(function(key) {
	window[key] = adDates[key]
})
window['DateFormatter'].addLanguage(adDates['spanish'])
