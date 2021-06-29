/**
	@npmpackage
	@class DateManager

	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-dates">ad-dates</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { DateManager } from 'ad-dates'
		</codeblock>
		<br><br>
		
		This class initailizes the ads understanding of "now" for use with all other Date oriented classes.		
*/
import TzDate from './TzDate.js'
import * as Timezone from './Timezone.js'
import * as DateFormatter from './DateFormatter.js'
import english from './languages/labelEnglish.js'
import { getQueryParams } from 'ad-global'

let _currentDate
let _isInitialized = false
let _defaultTimezone = undefined

// ---------------------------------------------------------------------------------------------------------------
// PUBLIC METHODS
/**
		@memberOf DateManager
		@method init
		@desc
			This function is meant to be called at the very beginning of the ad's lifespan. Automatically, it sets initial time which 
			is used to keep an internal clock that can is used to reference the lifespan of the ad, show countdowns, changes in live states, etc.
			Additional settings on args include:<br>

			<ul>
				<li>dateOverride - optionally overrides the system date with a hard-coded one</li>
				<li>language - optionally sets the default language to be used for date-messaging</li>
				<li>isDev - set before init, not in the index, optionally allows for the date set in the index to be NOW setting</li>
			</ul>

			<br>
			<codeblock>
				// in index.html
				var adParams = {
					environmentId: 'debug',
					...
					dateSettings: {
						dateOverride: ['2016-09-16 14:07:00', 'US/Eastern'],
						language: 'spanish'
					},
					...
				}

				// in Preflight.js
				// add boolean checking environmentId external to module
				adParams.dateSettings.inDev = adParams.environmentId == 'staging' || adParams.environmentId == 'debug'
				// pass object in
				DateManager.init(window.adParams.dateSettings)
			</codeblock>
	*/
export function init(args) {
	args = args || {}
	console.log('DateManager.init()', args)

	if (_isInitialized) return
	_isInitialized = true

	DateFormatter.addLanguage(english)

	let query = getQueryParams()
	let externalDate = query['date']
	let dateMode = 'SYSTEM-DATE'

	if (externalDate) {
		_currentDate = externalDate
		dateMode = 'EXTERNAL-DATE'
	} else if (args.dateOverride && args.inDev) {
		_currentDate = args.dateOverride
		dateMode = 'INTERNAL-DATE'
	}

	let tz
	if (_currentDate) {
		// grab now, extract output timezone
		let now = new TzDate({
			datetime: _currentDate,
		})

		tz = now.outputTimezone
		// console.log('DateManager tz:', tz)

		// look for a timezone label, only changes the LABEL not the actual timezone value
		let externalTzLabel = query['tz']
		if (externalTzLabel) {
			tz = externalTzLabel
		}
	}
	Timezone.setLocal(tz)

	// check for default timezone, used in Velvet preview since segment not loaded
	let externalDefaultTimezone = query['ltz']
	if (externalDefaultTimezone) {
		// TODO: test and export to this module
		//adParams.defaultTimezone = externalDefaultTimezone]
		_defaultTimezone = externalDefaultTimezone
	}

	console.log('-- CURRENT DATE ' + Array(104).join('-'))
	console.log('')
	console.log('\t DATE-MODE:')
	console.log('\t\t', dateMode)
	console.log('')
	console.log('\t Time for this unit is now assumed to be: ')
	console.log('\t\t', getNow().toFullDateTime())
	console.log('')
	if (externalDefaultTimezone) {
		console.log('\t External default timezone is: ')
		console.log('\t\t', externalDefaultTimezone)
		console.log('')
	}
	console.log(Array(120).join('-'))

	if (args.language) {
		DateFormatter.setLanguage(args.language)
	}
}

export function getDefaultTimezone() {
	return _defaultTimezone
}

export function setDefaultTimezone(val) {
	if (val) {
		_defaultTimezone = val
		console.log('\nDateManager.setDefaultTimezone():', _defaultTimezone, '\n\n')
	}
}

/**
		@memberOf DateManager	
		@method getNow
		@returns {TzDate}
		@desc
			Returns a TzDate representing the exact time it is called.

			You can override system time in the following ways:
			<br>
			<codeblock>
				// in the index
				var adParams = {
					dateSettings: {
						dateOverride: ['2016-09-16 14:07:00', 'US/Eastern']
					}
				}

				// with a query string:
				// add this to your index file's url:
				?date=2017-05-17T17:45:00+00:00

				// NOTE: the browser address bar will automatically "url encode" some of the characters
				// so full url would look like:
				http://10.0.86.13:4200/build/300x250/index.html?date=2017-05-17T17%3A45%3A00%2B00%3A00
			</codeblock>

			<b>NOTE::</b> <i>Ads built before v2.8.0 (June 2017) use {@link DateUtils} whose query-string format is different.</i>
			<br><br>
	*/
export function getNow() {
	let date = _currentDate
	if (date == undefined) {
		date = new Date().toISOString().split('.')[0] + '+00:00'
	}
	// console.log('getNow()', date)

	return new TzDate({
		datetime: date,
		outputTimezone: Timezone.get('local'),
	})
}
