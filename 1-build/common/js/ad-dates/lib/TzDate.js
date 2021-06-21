/**
	@npmpackage
	@class TzDate
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-dates">ad-dates</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { TzDate } from 'ad-dates'
		</codeblock>
		<br><br>
		
		This class is a wrapper for the Javascript "Date" object.

		<br><br>

		The standard Date object only returns the local time. TzDate returns that local time but adds the ability to 
		get that same date, time, and meridium in ANY timezone, without extra conversions.  Simply ask for anything
		in any timezone and it will return you the adjusted date/time while maintaining the original date.
		
		<br><br>
		
		One thing to understand is the difference between: the timezone the TzDate is being DECLARED in versus the timezone the 
		TzDate is DISPLAYING in. When creating a TzDate, you will be providing the date, time, and timezone of the DECLARED time. 
		A way to think of it would be: If you are in Los Angeles, you are in the US/Pacific timezone. So if you look at your calendar 
		and clock on the wall, you would enter that date, time and provide the timezone for US/Pacific.  
				
		<codeblock>
			const myDate = new TzDate({
				datetime: ['2017-05-18T12:00:00', 'US/Pacific']
			})
			console.log(myDate) // "Thu May 18 2017 12:00:00 GMT-0700 (PDT)"
			myDate.print() // "Thu May 18 2017 12:00:00 US/Pacific"
		</codeblock>
		
		<br>
		
		Tracing out a date can get confusing with that end part "GMT-0700 (PDT)". That is how the browser reports the local timezone.
		However, we need to be able to see the date clearly in any timezone.  The print() method allows for a clearer output specifically
		telling you what timezone you have asked for. Lets look at that same date in other timezones:
				
		<codeblock>
			myDate.print('US/Mountain') // "Thu May 18 2017 13:00:00 US/Mountain"
			myDate.print('US/Eastern') // "Thu May 18 2017 15:00:00 US/Eastern"
		</codeblock>

		<br>

		An important concept to understand is UTC = Universal Time Coordinated. All time is based off of "zero" point, which is also called 
		Greenwich Mean Time.  Let's look at our same time in UTC:

		<codeblock>
			myDate.print('UTC') // "Thu May 18 2017 19:00:00 UTC"
		</codeblock>

		<br>

		You can start to see how the timezones affect time by seeing that noon on the west coast is the same 7 PM (aka 19 hours) at the origin.
		So the time we first declared at the beginning could also be created as any of these other times that we have seen.  Remember that when
		a time is created, no matter what timezone, there is a different way of saying it, but the actual time is just a snap shot of a momnet 
		in time.  Let's look at how we could create the same date different ways:

		<codeblock>
			const myDate_eastern = new TzDate({
				datetime: ['2017-05-18T15:00:00', 'US/Eastern']
			})
			myDate_eastern.print() // "Thu May 18 2017 15:00:00 US/Eastern"
			myDate_eastern.print('US/Pacific') // "Thu May 18 2017 12:00:00 US/Pacific"
		</codeblock>

		<br>

		This time, we created the date as if we were on the east coast in the US/Eastern timezone, so the clock on the wall would say 3:00 PM.  
		Notice that all the outputs are all the same, that is because these dates are the same moment, just expressed differently.

		<br><br>

		Sometimes, you will create the date IN a specific timezone, but you always want to see it in another.  Lets take our first date we created.
		We could pass the timezone into the print() method everytime, but that can get repetitive and sometimes you don't have access to that timezone
		later on.  So you can create an outputTimezone for the date, so all methods will return in that timezone:

		<codeblock>
			const myDate = new TzDate({
				datetime: ['2017-05-18T12:00:00', 'US/Pacific'],
				outputTimezone: 'US/Eastern'
			})
			myDate.print() // "Thu May 18 2017 15:00:00 US/Eastern"
		</codeblock>

		<br>

		This can be also changed after the date was created, and again it will always output to that timezone.  BUT, if you pass in a timezone to a method,
		that will take priority:

		<codeblock>
			myDate.outputTimezone = 'US/Pacific'
			myDate.print() // "Thu May 18 2017 12:00:00 US/Pacific"

			myDate.print('US/Eastern') // "Thu May 18 2017 15:00:00 US/Eastern"
		</codeblock>

		<br><br>
		
		On to slightly more advanced concepts: ISO dates. Notice that the date strings we have been passing in so far have been in this format:
		
		<br>
		
		<codeblock>
			'2017-05-18T12:00:00' // Year - Month - Day T Hour : Minute : Second 
		</codeblock>
		
		<br>
		
		This is a partial ISO date string.  The last part that is missing is the timezone.  So our first date we created, in proper ISO would actually 
		look like this:

		<br>
		
		<codeblock>
			'2017-05-18T12:00:00-07:00' // Year - Month - Day T Hour : Minute : Second - US/Pacific Timezone
		</codeblock>
		
		<br>
		The -07:00 on the end is the timezone of the time.  Think of it like this: The date and time are what you see on that clock and calendar on your wall
		where you are currently standing.  That last part, the timezone, is saying how far FROM the origin (UTC) you are. Lets look at it as a simple math problem.

		<codeblock>
			 (origin zero point) - timezone = (date and time where you are)
								
								UTC - 07:00 = 2017-05-18T12:00:00
		
										UTC = 2017-05-18T12:00:00 + 07:00

										UTC = 2017-05-18T19:00:00+00:00
		</codeblock>

		<br>

		This proper ISO full datetime can be used when creating a TzDate, rather than the array if you are confident of the timezone:

		<codeblock>
			const myDate = new TzDate({
				datetime: '2017-05-18T12:00:00-07:00'
			})
			myDate.print() // "Thu May 18 2017 12:00:00 US/Pacific"
		</codeblock>

		<br><br>

		<b>Velvet JSON dates</b>

		<br><br>

		Dates that are in the Velvet JSON will be in proper ISO format AND there will be a timezone provided, like so:

		<codeblock>
		const jsonDateSnippet = {
			datetime : "2017-05-18T19:00:00+00:00",
			timezone : "US/Eastern"
		}
		</codeblock>

		<br>

		This is providing the date/time in UTC and then saying that the dates should be output in US/Eastern timezone.  So we would create our TzDate:

		<codeblock>
			const myDate = new TzDate({
				datetime: jsonDateSnippet.datetime,
				outputTimezone: jsonDateSnippet.timezone
			})
			myDate.print() // "Thu May 18 2017 15:00:00 US/Eastern"
		</codeblock>
		
*/
import * as DateFormatter from './DateFormatter.js'
import * as DateManager from './DateManager.js'
import * as DateUtils from './DateUtils.js'
import * as Timezone from './Timezone.js'
import { TextUtils } from '@ff0000-ad-tech/ad-utils'

function TzDate(args) {
	args = args || {}

	let _outputTimezone = 'local'
	let _dateString = args.datetime
	if (Array.isArray(_dateString)) {
		_dateString = args.datetime[0]
		_outputTimezone = args.datetime[1]

		// if +/-##:## timzone is set this will define find the corresponding timezone and assign it,
		// thus ignoring the second param if is an Array: [ datetimeString, timezone ]
		let currentTzString = _dateString.match(/(\+|\-)([0-9]{2})\:([0-9]{2})/g)
		if (!currentTzString) {
			const asObj = Timezone.get(_outputTimezone)
			const asISO = Timezone.toISO(asObj)
			_dateString += asISO
		}
	}

	if (typeof _dateString === 'string') {
		// make there is a "T" to follow proper ISO format.  No "T" will create Invalid Dates in Safari
		_dateString = _dateString.replace(/(\T|\s)/g, 'T')
	}

	// console.log('> outputTimezones:', args.defaultTimezone, DateManager.defaultTimezone)
	if (args.outputTimezone) {
		_outputTimezone = args.outputTimezone
	} else if (DateManager.getDefaultTimezone()) {
		_outputTimezone = DateManager.getDefaultTimezone()
		//} else if (adParams.defaultTimezone) {
		// _outputTimezone = adParams.defaultTimezone
	}
	// console.log('> _dateString:', _dateString)
	// _outputTimezone assigned at the bottom
	var T = new Date(_dateString)

	// ---------------------------------------------------------------------------------------------------------------
	// GETTER | SETTER
	Object.defineProperties(T, {
		/**
			@memberOf TzDate
			@var {object|string|number} outputTimezone
			@desc
				Getter|Setter : Change the timezone that all methods will default return the date/time in. Does NOT change the date, just how it is output.
			@example
				// get
				console.log(myDate.outputTimezone)

				// set
				myDate.outputTimezone = 'US/Eastern'
		*/
		outputTimezone: {
			get: () => {
				return _outputTimezone
			},
			set: (value) => {
				_outputTimezone = Timezone.get(value)
			},
		},
	})

	// ---------------------------------------------------------------------------------------------------------------
	// PUBLIC METHODS

	/**
		@memberOf TzDate
		@method clone
		@desc
			A shorthand for making a new TzDate with the same datetime and outputTimezone
		@returns {TzDate}
		@property {object|string|number} newTimezone
			Change the outputTimezone of the new reeturned TzDate
		@example
			var myCopy = myDate.clone()
			myCopy.print()
	*/
	T.clone = (newTimezone) => {
		newTimezone = newTimezone || T.outputTimezone
		return new TzDate({
			datetime: T,
			outputTimezone: newTimezone,
		})
	}

	/**
		@memberOf TzDate
		@method getHoursIn
		@desc
			Similar to Date.getHours(), but this will return the hours in a specified timezone, 
			defaulting to the outputTimezone of the instance
		@returns {number}
		@property {object|string|number} inTimezone
			The timezone at which you would like the hours, if null, will use the outputTimezone
		@property {boolean} inMilitary
			Whether the hours should be in military 24 hour or standard 12 hour. true = base 24, false = base 12. Default is false.
		@example
			var hours = myDate.getHoursIn('US/Eastern', false)
	*/
	T.getHoursIn = (inTimezone, inMilitary) => {
		let date = T.getIn(inTimezone)
		let time = date.getHours()

		if (inMilitary != true && time > 12) {
			time = time % 12
		}
		return time
	}

	/**
		@memberOf TzDate
		@method format
		@desc
			Direct usage of DateFormatter.format()
		@returns {String}
		@property {String} format
			Pass in a mark up output of the date, including html, inline styling and spacing. In place of key data, use tokens from chart wrapped in ${}
		@property {Object} args
			Optional Object to change the outputTimezone, language of formatting
		@example
			const output = myDate.format('${M}/${D}/${YYYY}')
	*/
	T.format = (format, args) => {
		return DateFormatter.format(T, format, args)
	}

	/**
		@memberOf TzDate
		@method getIn
		@desc
			If you need the actual TzDate object with the adjust time applied. 
			<br><span style="color:#ff0000">WARN: This will return a TzDate with a different base time.
			This method is mostly used by other internal methods and DateSchedule. This should be used with caution.</span>
		@returns {TzDate}
		@property {object|string|number} inTimezone
			The timezone at which you would like the TzDate CHANGED to
		@example
			var changedDate = myDate.getIn('US/Eastern')
	*/
	T.getIn = (inTimezone) => {
		// console.log(':::::::::::::::::::::::::: TzDate.getIn()')
		let utcString = T.toISOString().split('.')[0]
		// console.log('   :::::::::::: utcString:', utcString, '|', T)

		// console.log('   :: Timezone._trueLOCAL:', Timezone._trueLOCAL)

		let localTimezone = Timezone.toISO(Timezone.get('trueLocal', T))
		// console.log('   :::::::: localTimezone:', localTimezone)

		let tz = Timezone.get(inTimezone || T.outputTimezone, T)
		// console.log('   ::::::::::::::::::: tz:', tz)

		let dateInLocal = utcString + localTimezone
		// console.log('   :::::::::: dateInLocal:', dateInLocal)

		let utcDateAdjusted = new Date(utcString + localTimezone)
		// console.log('   ::::: utcDateAdjusted:', utcDateAdjusted, 'in', tz.label)

		let adjustIn = DateUtils.adjust(utcDateAdjusted, { hour: tz.value })
		// console.log('   :::::::::::: adjustIn:', adjustIn)
		return adjustIn
	}

	/**
		@memberOf TzDate
		@method print
		@desc
			Is a shorthand for .toFullDateTime()
		@returns {string}
		@property {object|string|number} inTimezone
			The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
		@example
			myDate.print('US/Eastern')
	*/
	T.print = (inTimezone) => {
		const fullDateTime = T.toFullDateTime(inTimezone)
		console.log(fullDateTime)
		return fullDateTime
	}

	/**
		@memberOf TzDate	
		@method toFullDateTime
		@property {Timezone|object|string|number} inTimezone
			The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
		@returns {string}
		@desc
			Returns a string in the format of "Weekday Mon DD YYYY HH:MM:SS Timezone"
	*/
	T.toFullDateTime = (inTimezone) => {
		inTimezone = inTimezone || T.outputTimezone

		let utcDateAdjusted = T.getIn(inTimezone)
		let utcDateAdjString = utcDateAdjusted.toString().split('GMT')[0] + inTimezone.label
		// console.log('\t  inTimezone:', inTimezone)
		// console.log('\t  utcDateAdjusted:', utcDateAdjusted.toString())
		// console.log('\t  utcDateAdjString:', utcDateAdjString)
		return utcDateAdjString
	}

	/**
		@memberOf TzDate	
		@method toSimpleDate
		@property {Timezone|object|string|number} inTimezone
			The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
		@returns {string}
		@desc
			Returns a string in the format "MM/DD" 
	*/
	T.toSimpleDate = (inTimezone) => {
		const tzDate = T.getIn(inTimezone)
		return tzDate.getMonth() + 1 + '/' + tzDate.getDate()
	}

	/**
		@memberOf TzDate	
		@method toDate
		@property {Timezone|object|string|number} inTimezone
			The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
		@returns {string}
		@desc
			Returns a string in the format "MM/DD/YYYY" 
	*/
	T.toDate = (inTimezone) => {
		const tzDate = T.getIn(inTimezone)
		return T.toSimpleDate(inTimezone) + '/' + tzDate.getFullYear()
	}

	/**
		@memberOf TzDate	
		@method toDateTime
		@property {Timezone|object|string|number} inTimezone
			The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
		@returns {string}
		@desc
			Returns a string in the format "MM/DD/YYYY HH:MMa/p" 
	*/
	T.toDateTime = (inTimezone) => {
		return T.toDate(inTimezone) + ' ' + T.toTime(inTimezone)
	}

	/**
		@memberOf TzDate	
		@method toSimpleDateTime
		@property {Timezone|object|string|number} inTimezone
			The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
		@returns {string}
		@desc
			Returns a string in the format "MM/DD HH:MM" 
	*/
	T.toSimpleDateTime = function () {
		return T.toSimpleDate() + ' ' + T.toTime()
	}

	/**
		@memberOf TzDate	
		@method toTime
		@property {Timezone|object|string|number} inTimezone
			The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
		@returns {string}
		@desc
			Returns a string in the format "HH:MM AM/PM" 
	*/
	T.toTime = (inTimezone) => {
		return T.toSimpleTime(inTimezone) + ' ' + T.toMeridiem(inTimezone)
	}

	/**
		@memberOf TzDate	
		@method toSimpleTime
		@property {Timezone|object|string|number} inTimezone
			The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
		@property {boolean} inMilitary
			Whether the hours should be in military 24 hour or standard 12 hour. true = base 24, false = base 12. Default is false.
		@returns {string}
		@desc
			Returns a string in the format "HH:MM" 

		@example
			myDate.toSimpleTime();
			myDate.toSimpleTime('US/Pacific')
			myDate.toSimpleTime('US/Pacific', true)
	*/
	T.toSimpleTime = (inTimezone, inMilitary) => {
		let tzDate = T.getIn(inTimezone)

		let hours = T.getHoursIn(inTimezone, inMilitary)
		if (hours == 0 && !inMilitary) {
			hours = 12
		}
		if (inMilitary) {
			hours = TextUtils.pad(hours, 2)
		}

		return hours + ':' + TextUtils.pad(tzDate.getMinutes(), 2)
	}

	/**
		@memberOf TzDate	
		@method toMeridiem
		@property {Timezone|object|string|number} inTimezone
			The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.

		@property {boolean} includeTimezone
			Whether to include the timezone, defaults to false
		@returns {string}
		@desc
			Returns the meridiem "am", "pm" or "am/et", "am/et"

		@example
			myDate.toMeridiem();
			// returns "am" or "pm"

			myDate.toMeridiem('US/Pacific')
			// returns "am" or "pm", of the datetime in Pacific Timezone

			myDate.toMeridiem('US/Pacific', true)
			// returns "am/pt" or "pm/pt", of the datetime in Pacific Timezone
			
			myDate.toMeridiem(null, true)
			// returns "am/et" or "pm/et", of the datetime in the outputTimezone
	*/
	T.toMeridiem = (inTimezone, includeTimezone) => {
		let tz = inTimezone || T.outputTimezone
		let tzDate = T.getIn(tz)
		return (tzDate.getHours() >= 12 ? 'pm' : 'am') + (includeTimezone == true ? '/' + tz.abbr[0] : '')
	}

	/**
		@memberOf TzDate	
		@method toShortestTime
		@property {Timezone|object|string|number} inTimezone
			The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
		@property {boolean} inMilitary
			Whether the hours should be in military 24 hour or standard 12 hour. true = base 24, false = base 12. Default is false.
		@returns {string}
		@desc
			Returns a string in the format "HH:MM", but if there are no minutes will return "HH"
	*/
	T.toShortestTime = (inTimezone, inMilitary) => {
		// will remove minutes if they are 0
		let timeStr = T.toSimpleTime(inTimezone, inMilitary)
		let adjustedTime = timeStr.replace(/:00$/g, '')
		return adjustedTime
	}

	T.toDateTimeISO = (inTimezone) => {
		const date = T.toDate(inTimezone)
		let dateSplit = date.split('/')
		let year = dateSplit[2]
		let month = TextUtils.pad(dateSplit[0], 2)
		let day = TextUtils.pad(dateSplit[1], 2)
		return year + '-' + month + '-' + day + 'T' + T.toSimpleTime(inTimezone, true) + ':00'
	}

	T.toISO = () => {
		return T.toDateTimeISO(T.outputTimezone) + Timezone.toISO(T.outputTimezone)
	}

	// ---------------------------------------------------------------------------------------------------------------
	// PROTECTED PROPERTIES
	T._isTzDate = true

	// ---------------------------------------------------------------------------------------------------------------
	// INIT
	// initial set of outputTimezone from String to Timezone Object
	T.outputTimezone = _outputTimezone
	// console.log('_outputTimezone:', _outputTimezone)
	// console.log('_dateString:', _dateString)

	return T
}

export default TzDate
