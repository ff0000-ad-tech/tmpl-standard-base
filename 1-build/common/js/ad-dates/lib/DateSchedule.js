/**
	@npmpackage
	@class DateSchedule
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-dates">ad-dates</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { DateSchedule } from 'ad-dates'
		</codeblock>
		<br><br>
		
		This class creates a schedule of dates that will be compared agains the currentdate/time. There are 2 ways to use 
		this class: standard and custom.
		
		<br><br>

		<b>AdData.js:</b><br>
		It is recommended that you centralize your schedule in AdData. This way changes to the schedule can easily 
		be achieved with one common update.<br>

		<br><br>
		
		<b>Standard</b><br>
		This will create a schedule of dates leading up to the target date, which was formerly achieved by using		
		the selectMessageForDate() method.  This standard way will produce a schedule pre-populated with:
		
		<table>
			<tr><td>DATE</td><td>returns the target date, using the toSimpleDateTime() for anything further than a week out from the target</tr></td>
			<tr><td>WEEK</td><td>returns the day of the week the target date is, ie Wednesday</tr></td>
			<tr><td>TOMORROW</td><td>returns the word "Tomorrow", beginning at midnight the day before the target date</tr></td>
			<tr><td>TODAY</td><td>returns the string "Today", beginning at midnight on the target date</tr></td>
			<tr><td>TONIGHT</td><td>returns the string "Tonight", beginning at the time set with tonightStartsAt</tr></td>
			<tr><td>NOW</td><td>returns the string "Live Now"</tr></td>
			<tr><td>PAST</td><td>returns the string "Past", called after NOW plus the eventDuration value</tr></td>
		</table>

		<codeblock>
			// Standard Schedule
			this.schedule = new DateSchedule({
				target: new TzDate({
					datetime: ['2015-08-01 20:00:00', 'US/Eastern'],
					outputTimezone: 'local'
				}),
				isStandard: true
			})
			this.schedule.print()

			this.dateMessage = this.schedule.currentLabel
			this.dateHour = this.schedule.target.toDateTime()
		</codeblock>

		Each standard label can be overridded by either assigning a different string or by passing in a callback function
		that will return a differently formatted message. Note each callback gets fired at runtime, creating each label.

		<codeblock>
			this.schedule = new DateSchedule({
				target: new TzDate({
					datetime: ['2015-08-01 20:00:00', 'US/Eastern'],
					outputTimezone: 'local'
				}),
				eventDuration: 120,
				isStandard: true,
				standardOverrides: {
					DATE: date => date.format('${M}/${D} ${t} ${a^}'), // 8/1 8 PM
					TOMORROW: (date, label) => label + date.format(' ${t} ${a^}'), // Tomorrow 8 PM
					WEEK: date => date.format('${DDDD^} ${t} ${a^}'), // SATURDAY 8 PM
					NOW: 'Watch Live Now'
				}
			})
			this.schedule.print()

			this.dateMessage = this.schedule.currentLabel
		</codeblock>

		<br><br>

		<b>Custom</b><br>
		This is used to set a specific list of dates to check now against, returning the latest.

	<codeblock>
		this.schedule = new DateSchedule()
		this.schedule.addDate(
			new TzDate({
				datetime: ['2015-08-01 12:00:00', 'US/Eastern'],
				outputTimezone: 'local'
			}),
			"Hey I'm the first date"
		)
		this.schedule.addDate(
			new TzDate({
				datetime: ['2015-08-05 14:00:00', 'utc'],
				outputTimezone: 'US/Pacific'
			}),
			"I'm the last date"
		)
		this.schedule.print()
	</codeblock>

		The schedule can also be used to call different markup builds.  Use the third param of addDates() to pass in
		a callback, then simply call it from Control.preMarkup() or where ever makes sense.

	<codeblock>
		this.schedule = new DateSchedule()
		this.schedule.addDate(
			new TzDate({
				datetime: ['2015-08-01 12:00:00', 'US/Eastern'],
				outputTimezone: 'local'
			}),
			"Hey I'm the first date",
			View.buildFromDate0
		)
		this.schedule.addDate(
			new TzDate({
				datetime: ['2015-08-05 14:00:00', 'utc'],
				outputTimezone: 'US/Pacific'
			}),
			"I'm the last date",
			View.buildFromDate1
		)
		this.schedule.print()
	</codeblock>

		<b>build.js:</b><br>
		In <u>build.View</u>, you can write functions that build out the DOM for each of your states.

	<codeblock>
		this.buildFromDate0 = function() {
			console.log('View.buildFromDate0()')
			// Markup...
		}
		this.buildFromDate1 = function() {
			console.log('View.buildFromDate1()')
			// Markup...
		}
	</codeblock>

		In <u>build.Control</u> or <u>build.buildMarkup</u>, you simply call the callback of the current date on the schedule.  This will
		find the current added date object and fire that callback

	<codeblock>
		const message = adData.schedule.current.callback()
		console.log(message)

		const myTextField = new UITextField({
			target: T,
			id: 'my-textfield',
			css: {
				width: 300,
				height: 90
			},
			fontSize: 30,
			fontFamily: 'template_font',
			format: TextFormat.INLINE,
			alignText: Align.CENTER,
			text: message.label
		})
	</codeblock>

	@param {object} arg
		Settings are passed in via this object, see Properties for more info:

	@property {TzDate} target
		The date that the schedule will count down to
	@property {boolean} isStandard
		If true, will create a standard schedule with default messaging
	@property {number} eventDuration
		In a standard schedule, the amount of minutes after the target time the PAST messaging shows. Defaults to 120 which is 2 hours
	@property {string} tonightStartsAt
		In a standard schedule, when the today message changes to tonight. If the target time is before this value, tonight will never show. Defaults to '17:50' which is 5:30PM
	@property {boolean} hasOneDayOf
		In a standard schedule, will determine if only 'tonight' OR 'today' will show, or if it is possible to have both. For example, in ESPN units, the need is that 
		only one of the options will show at midnight day of the event. So if the event is before the tonightStartsAt value, it will only show 'today', while if it is after
		it will only show 'tonight'.  If this is set to false, it will allow for both following the logic of tonightStartsAt.  Defaults to true.
	@property {object} standardOverrides
		An object to overwrite any of the standard labels. Using the standard keys, apply a new label string or callback function passing in the target date
		

*/
import * as DateFormatter from './DateFormatter.js'
import * as DateUtils from './DateUtils.js'
import TzDate from './TzDate.js'
import * as Timezone from './Timezone.js'
import { MathUtils, TextUtils } from '@ff0000-ad-tech/ad-utils'

export default function DateSchedule(arg) {
	arg = arg || {}

	const D = this

	let _dates = []
	let _labelOverrides = {}
	let _targetDate
	let _skipToday = false

	// used by a recurring schedule to pass the callback to the standard schedule it creates
	let _callback = arg.callback || function () {}

	let _tonightStartsAt = arg.tonightStartsAt || '17:30'
	let _hasOneDayOf = arg.hasOneDayOf != false
	let _eventDuration = arg.eventDuration || 120

	// ---------------------------------------------------------------------------------------------------------------
	// GETTERS
	Object.defineProperties(D, {
		/**
			@memberOf DateSchedule
			@var {TzDate} target
				Getter : The target date of a standard schedule
			@example
				mySchedule.target.print()
		*/
		target: {
			get: () => _targetDate,
		},

		/**
			@memberOf DateSchedule
			@var {object} current
				Getter : An object of the current date, label and optional callback
			@example
				mySchedule.current.date
				mySchedule.current.label
				mySchedule.current.callback()
		*/
		current: {
			get: () => _dates[D.currentIndex],
		},

		/**
			@memberOf DateSchedule
			@var {TzDate} currentDate
				Getter : Is direct access to the current date, same as mySchedule.current.date
			@example
				mySchedule.currentDate
		*/
		currentDate: {
			get: () => D.current.date,
		},

		/**
			@memberOf DateSchedule
			@var {String} currentLabel
				Getter : Is direct access to the current label, same as mySchedule.current.label
			@example
				mySchedule.currentLabel
		*/
		currentLabel: {
			get: () => D.current.label,
		},

		/**
			@memberOf DateSchedule
			@var {Number} currentIndex
				Getter : The index, zero based, of the current date
			@example
				mySchedule.currentIndex
		*/
		currentIndex: {
			get: () => {
				let currentIndex = -1
				for (let i = 0, l = _dates.length; i < l; i++) {
					if (!DateUtils.isPast(_dates[i].date)) {
						break
					}
					currentIndex = i
				}
				return currentIndex
			},
		},

		/**
			@memberOf DateSchedule
			@var {object} next
				Getter : An object of the next date, label and optional callback
			@example
				mySchedule.next.date
				mySchedule.next.label
				mySchedule.next.callback()
		*/
		next: {
			get: () => _dates[D.nextIndex],
		},

		/**
			@memberOf DateSchedule
			@var {TzDate} nextDate
				Getter : Is direct access to the next date, same as mySchedule.next.date
			@example
				mySchedule.nextDate
		*/
		nextDate: {
			get: () => D.next.date,
		},

		/**
			@memberOf DateSchedule
			@var {String} nextLabel
				Getter : Is direct access to the next label, same as mySchedule.next.label
			@example
				mySchedule.nextLabel
		*/
		nextLabel: {
			get: () => D.next.label,
		},

		/**
			@memberOf DateSchedule
			@var {Number} nextIndex
				Getter : The index, zero based, of the next date
			@example
				mySchedule.nextIndex
		*/
		nextIndex: {
			get: () => MathUtils.restrict(D.currentIndex + 1, 0, _dates.length - 1),
		},

		/**
			@memberOf DateSchedule
			@var {Boolean} isLive
				Getter : When using a standard schedule, whether or not the target date has been passed, but not passed the eventDuration
			@example
				mySchedule.isLive
		*/
		isLive: {
			get: () => D.current.standardKey == 'NOW',
		},

		/**
			@memberOf DateSchedule
			@var {Boolean} isComplete
				Getter : When using a standard schedule, whether or not the target date and eventDuration has been passed
			@example
				mySchedule.isComplete
		*/
		isComplete: {
			get: () => D.current.standardKey == 'PAST',
		},
	})

	// ---------------------------------------------------------------------------------------------------------------
	// PUBLIC METHODS
	/**
		@memberof DateSchedule
		@method addDate
		@param {TzDate|Date|Object} tzDate
			Expected to be either a Date object, a TzDate or an Object for creating a date from the target using DateFormatter.adjust() 
		@param {String|function} label
			Optionally specify a label as a  String or creeate a function to format the date using the TxDate methods
		@param {function} callback
			Optionally a function that can be called when this date is the current. Does NOT auto fire, must me called.
		@desc
			Add a date to the schedule, which can be either a TzDate or an object to create a date from the target
		
		@example
			// start with a target date
			const schedule = new DateSchedule({
				target: new TzDate({
					datetime: ['2017-08-01 08:00:00', 'US/Eastern'],
					outputTimezone: 'local'
				})
			})

			// add TzDate
			schedule.addDate(
				new TzDate({
					datetime: '2017-04-01T14:00:00+00:00',
					outputTimezone: 'US/Eastern'
				})
			)

			// creates a date 1 day before and 4 hours ahead of the target date
			schedule.addDate({ day: -1, hour: 4 })

			// uses a callback to get a custom date message
			schedule.addDate(
				new TzDate({
					datetime: '2017-06-01T22:00:00+00:00',
					outputTimezone: 'local'
				}),
				function(date) {
					return date.toSimpleTime() + ' ' + date.toMeridiem() + '!!'
				}
			)

			// add a message and a callback
			schedule.addDate(
				new TzDate({
					datetime: '2017-05-01T17:00:00+00:00',
					outputTimezone: 'US/Pacific'
				}),
				'Custom Message',
				function() {
					console.log('i am the callback')
				}
			)

			schedule.print()
			// DateSchedule.print(), length: 7
			//  - 0 Sat Jan 01 2000 00:00:00 UTC label: 1/1 12:00 am
			//  - 1 Sat Apr 01 2017 10:00:00 US/Eastern label: undefined
			//  - 2 Mon May 01 2017 10:00:00 US/Pacific label: Custom Message
			//  - 3 Thu Jun 01 2017 15:00:00 Local label: 3:00 pm!!
			//  - 4 Mon Jul 31 2017 09:00:00 Local label: undefined
			//  - 5 Tue Aug 01 2017 05:00:00 Local label: Live Now
			//  - 6 Tue Aug 01 2017 07:00:00 Local label: Past				
			
	*/
	D.addDate = function (tzDate, label, callback) {
		let standardKey = arguments[3]

		let dateUTC = tzDate
		let skipDate = false
		let makeClone = true

		if (!tzDate._isTzDate) {
			// is an Object of adjusting values
			// take targetDate and add or subtract from there to create the date
			let clonedDate = _targetDate

			switch (standardKey) {
				case 'PAST':
					makeClone = false
					break
				case 'TONIGHT':
					// construct a date with the tonightStartsAt value
					let reconstructedDate = _targetDate.toDateTimeISO().split('T')[0] + 'T'

					let timeSplit = _tonightStartsAt.split(':')
					for (let i = 0; i < 3; i++) {
						reconstructedDate += TextUtils.pad(timeSplit[i] || 0, 2) + ':'
					}
					reconstructedDate = reconstructedDate.slice(0, -1)

					clonedDate = new TzDate({
						datetime: [reconstructedDate, _targetDate.outputTimezone],
					})

					// check if the time is before the tonight starts at, if so, skip this label
					skipDate = clonedDate.getTime() > _targetDate.getTime()

					// skip today if you do NOT skip tonight
					_skipToday = !skipDate

					// override date with a zeroed out one if you skip today and want only one day of message
					makeClone = _hasOneDayOf && _skipToday
					break

				case 'TODAY':
					// check if tonight exists & if hasOneDayOf
					skipDate = _hasOneDayOf && _skipToday
					break
			}

			if (makeClone) {
				// copies the target date to display in the local time
				clonedDate = _targetDate.clone(Timezone.get('local'))
				// zeros out the dates based on timezone difference
				clonedDate.setHours.apply(clonedDate, Timezone.getTzDiff())
			}

			dateUTC = DateUtils.adjust(clonedDate, tzDate)
			//console.log( '\t >', dateUTC, clonedDate, tzDate )
		}

		let labelOG = label
		if (standardKey) {
			const override = _labelOverrides[standardKey]
			if (override != undefined) {
				label = override
			} else {
				if (typeof label === 'string') {
					label = DateFormatter.getLabels()[standardKey]
				}
			}
		}

		if (typeof label === 'function') {
			const dateToPass = standardKey && _targetDate ? _targetDate : dateUTC
			let labelToPass = standardKey ? (standardKey == 'WEEK' ? labelOG.call(D, dateToPass) : DateFormatter.getLabels()[standardKey]) : null
			// console.log(standardKey, '|', dateToPass, '|', labelToPass)
			label = label.call(D, dateToPass, labelToPass)
		}

		if (!skipDate) {
			_dates.push({
				date: dateUTC,
				label: label,
				standardKey: standardKey,
				callback: callback || function () {},
			})
			_dates.sort((a, b) => {
				const at = a.date.getTime()
				const bt = b.date.getTime()
				if (at < bt) return -1
				if (at > bt) return 1
				return 0
			})
		}

		return dateUTC
	}

	/**
		@memberOf DateSchedule
		@method print
		@desc Traces out all dates in order. Can be called on the instantiation as it returns itself 
		@returns The DateSchedule instance
		@example
			// standard schedule
			const schedule = new DateSchedule({
				target: new TzDate({
					datetime: ['2017-08-01 20:00:00', 'US/Eastern'],
					outputTimezone: 'local'
				}), 
				isStandard: true
			}).print()
			// DateSchedule.print(), length: 7
			//  - 0 Sat Jan 01 2000 00:00:00 UTC label: 8/1 5:00 pm
			//  - 1 Tue Jul 25 2017 17:00:00 Local label: Tuesday
			//  - 2 Mon Jul 31 2017 00:00:00 Local label: Tomorrow
			//  - 3 Tue Aug 01 2017 00:00:00 Local label: Today
			//  - 4 Tue Aug 01 2017 10:30:00 Local label: Tonight
			//  - 5 Tue Aug 01 2017 17:00:00 Local label: Live Now
			//  - 6 Tue Aug 01 2017 19:00:00 Local label: Past
			
	*/
	D.print = function () {
		const l = _dates.length
		console.log('DateSchedule.print(), length:', l)
		for (let i = 0; i < l; i++) {
			console.log(' -', i, _dates[i].date.toFullDateTime(), 'label:', _dates[i].label)
		}
		return D
	}

	/**
		@memberOf DateSchedule
		@method getDates
		@desc
			Returns an Array copy of the dates, leaving the original untouched.
		@returns {Array}		
		@example
			schedule.getDates()
	*/
	D.getDates = (includeData) => {
		includeData = !!includeData
		let dates = []
		for (let i = 0, l = _dates.length; i < l; i++) {
			dates.push(includeData ? _dates[i] : _dates[i].date)
		}
		// console.log('DateSchedule.getDates(), includeData:', includeData, '|', dates)
		return dates
	}

	// ---------------------------------------------------------------------------------------------------------------
	// INIT
	const sl = arg.standardOverrides
	if (sl) {
		for (let key in sl) {
			_labelOverrides[key] = sl[key]
		}
	}

	if (arg.target) {
		_targetDate = D.addDate(arg.target, '', _callback, 'NOW')

		D.addDate({ minute: _eventDuration }, '', _callback, 'PAST')
	}

	// upcoming, starting point
	D.addDate(
		new TzDate({
			datetime: '2000-01-01T00:00:00+00:00',
			outputTimezone: 'UTC',
		}),
		(date) => date.toSimpleDateTime(),
		_callback,
		'DATE'
	)

	if (_targetDate && arg.isStandard == true) {
		D.addDate({}, '', _callback, 'TONIGHT')
		D.addDate({}, '', _callback, 'TODAY')
		D.addDate({ hour: -24 }, '', _callback, 'TOMORROW')
		D.addDate(
			{ hour: -24 * 6 },
			// date => DateFormatter.getLabels().WEEKDAYS_FULL[date.getIn(_targetDate.outputTimezone).getDay()],
			(date) => DateFormatter.format(date, '${DDDD}', { inTimezone: _targetDate.outputTimezone }),
			_callback,
			'WEEK'
		)
	}
}
