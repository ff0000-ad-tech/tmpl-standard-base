/**
	@npmpackage
	@class RecurringSchedule
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-dates">ad-dates</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { RecurringSchedule } from 'ad-dates'
		</codeblock>
		<br><br>
		
		This class is for determining the next showtime for events that repeat on a weekly basis. For example, you have a tune-in that
		is every Friday at 6pm, and you want your date messaging to update dynamically.
		
		<codeblock>
			var schedule = new RecurringSchedule({	
				tuneins: [
					{	
						days: ['Friday'],
						startTime: '18:00',
						eventDuration : 60
					}
				]
			});			
		</codeblock>
		<br>

		For more complex schedules( like sports tournaments ), a more complex model might look like this
		<codeblock>
			var schedule = new RecurringSchedule({	
				tuneins: [
					{	
						days: ['Friday','Saturday','Sunday'],
						startTime: '21:00',
						eventDuration : 60,
						timezone: 'US/Eastern'
					},
					{	
						days: ['Monday','Tuesday','Wednesday','Thursday'],
						startTime: '18:00',
						eventDuration : 75,
						timezone: 'US/Eastern'
					}
				]
			});
		</codeblock>
		<br>
		
		Just like DateSchedule, this uses the standard schedule to create the date messaging, which is accessed with
		the same methods.
		<codeblock>
			schedule.print()
			schedule.currentSchedule.print()
			schedule.currentSchedule.target.print()
			console.log(schedule.current)
			schedule.currentDate.print()
			console.log(schedule.currentLabel)
		</codeblock>
*/
import * as DateManager from './DateManager.js'
import * as DateFormatter from './DateFormatter.js'
import * as DateUtils from './DateUtils.js'
import TzDate from './TzDate.js'
import DateSchedule from './DateSchedule.js'

var RecurringSchedule = function(dateModel) {
	var R = this

	var _schedule

	// ---------------------------------------------------------------------------------------------------------------
	// PUBLIC METHODS
	Object.defineProperties(R, {
		/**
			@memberOf RecurringSchedule
			@var {object} currentSchedule
				Getter : A DateSchedule is created for the current date, allowing for the standard messaging to be created
			@example
				mySchedule.currentSchedule.print()
		*/
		currentSchedule: {
			get: function() {
				var curStart = _schedule.current.date
				var current = new DateSchedule({
					target: curStart,
					isStandard: true,
					eventDuration: curStart.eventDuration,
					callback: curStart.callback
				})

				if (current.isComplete) {
					var nextStart = _schedule.next.date

					current = new DateSchedule({
						target: nextStart,
						isStandard: true,
						eventDuration: nextStart.eventDuration,
						callback: nextStart.callback
					})
				}

				return current
			}
		},

		/**
			@memberOf RecurringSchedule
			@var {object} current
				Getter : An object of the current date, label and optional callback
			@example
				mySchedule.current.date
				mySchedule.current.label
				mySchedule.current.callback()
		*/
		current: {
			get: function() {
				return R.currentSchedule.current
			}
		},

		/**
			@memberOf RecurringSchedule
			@var {TzDate} currentDate
				Getter : Is direct access to the current date, same as mySchedule.current.date
			@example
				mySchedule.currentDate
		*/
		currentDate: {
			get: function() {
				return R.current.date
			}
		},

		/**
			@memberOf RecurringSchedule
			@var {String} currentLabel
				Getter : Is direct access to the current label, same as mySchedule.current.label
			@example
				mySchedule.currentLabel
		*/
		currentLabel: {
			get: function() {
				return R.current.label
			}
		}
	})

	// ---------------------------------------------------------------------------------------------------------------
	// PUBLIC METHODS

	/**
		@memberOf RecurringSchedule
		@method print
		@desc
			Traces out all dates in order 
		
		<codeblock>
			// called on Thursday 2017-06-01 14:08:00-07:00
			mySchedule.print();

			// DateSchedule.print(), length: 8
			//  - 0 Sat Jan 01 2000 00:00:00 UTC label: 1/1 12:00 am
			//  - 1 Thu Jun 01 2017 18:00:00 US/Eastern label: undefined
			//  - 2 Fri Jun 02 2017 21:00:00 US/Eastern label: undefined
			//  - 3 Sat Jun 03 2017 21:00:00 US/Eastern label: undefined
			//  - 4 Sun Jun 04 2017 21:00:00 US/Eastern label: undefined
			//  - 5 Mon Jun 05 2017 18:00:00 US/Eastern label: undefined
			//  - 6 Tue Jun 06 2017 18:00:00 US/Eastern label: undefined
			//  - 7 Wed Jun 07 2017 18:00:00 US/Eastern label: undefined
		</codeblock>
	*/
	R.print = function() {
		_schedule.print()
	}

	// ---------------------------------------------------------------------------------------------------------------
	// PRIVATE METHODS

	// loop all the events and create actual date objects representing the next show
	function parseModel() {
		var now = DateManager.getNow()

		var labels = DateFormatter.getLabels().WEEKDAYS_FULL

		_schedule = new DateSchedule()

		// tuneins array of objects
		var tuneins = dateModel.tuneins
		for (var k = 0; k < tuneins.length; k++) {
			var tuneinObj = tuneins[k]
			var days = tuneinObj.days

			var dayOfWeek = now.getDay()

			// days array of strings
			for (var q = 0; q < days.length; q++) {
				var dayLabel = days[q]
				var labelIndex = labels.indexOf(dayLabel)
				var dayShift = labelIndex - dayOfWeek

				var date = new TzDate({
					datetime: [now.toDateTimeISO().split('T')[0] + 'T' + tuneinObj.startTime + ':00', tuneinObj.timezone]
				})

				date = DateUtils.adjust(date, { day: dayShift })

				if (DateUtils.isPast(date, now)) {
					// now check if it is past the duration
					var temp = DateUtils.adjust(date, { minute: tuneinObj.eventDuration })
					if (DateUtils.isPast(temp, now)) {
						// if so, add a week to it
						date = DateUtils.adjust(date, { day: 7 })
					}
				}

				date.eventDuration = tuneinObj.eventDuration
				date.callback = tuneinObj.callback

				console.log('\t', date.print())
				_schedule.addDate(date) //, '', tuneinObj.callback );
			}
		}
	}

	// ---------------------------------------------------------------------------------------------------------------
	// INIT
	parseModel()
}

export default RecurringSchedule
