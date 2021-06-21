import * as DateManager from './DateManager.js'
import { TextUtils } from '@ff0000-ad-tech/ad-utils'

// export const MS_PER_SECOND = 1000
// export const MS_PER_MINUTE = 6e4 // 1000 * 60;
// export const MS_PER_HOUR = 36e5 // D.MS_PER_MINUTE * 60;
// export const MS_PER_DAY = 864e5 // D.MS_PER_HOUR * 24;
// export const MS_PER_WEEK = 6048e5 // D.MS_PER_DAY * 7;
const MS_PER = {
	SECOND: 1000,
	MINUTE: 6e4, // 1000 * 60;
	HOUR: 36e5, // D.MS_PER_MINUTE * 60;
	DAY: 864e5, // D.MS_PER_HOUR * 24;
	WEEK: 6048e5, // D.MS_PER_DAY * 7;
}

/**
    @memberOf DateUtils
    @method getTimeDifference
    @desc
        Returns an Object of the time remaining until the target date, with the day, hour, minute, second as numbers and output as a string '##:##:##:##'
        <br>
        Import from <a href="https://github.com/ff0000-ad-tech/ad-dates">ad-dates</a>
        <br>
		<codeblock>
			// importing into an ES6 class
			import { DateUtils } from 'ad-dates'
		</codeblock>
		<br><br>
    @returns {Object}
    @example		
        // to use as a countdown
        var targetDate = new TzDate({
            datetime : ['2017-06-06 11:37:00', 'US/Pacific']
        })

        // use FrameRate to set a ticker of once a second.
        FrameRate.register ( this, handleCountdown, 1 );
        function handleCountdown(){
            const countdownStr = DateUtils.getTimeDifference(DateManager.getNow(), targetDate)
            if (DateUtils.isPast(targetDate)) {
                FrameRate.unregister(this, handleCountdown, 1);
            }
        }
*/
export function getTimeDifference(startTime, endTime) {
	var diff = endTime.getTime() / 1000 - startTime.getTime() / 1000
	if (diff < 0) {
		diff = 0
	}
	// use the const obj instead
	var obj = {
		day: diff / (24 * 60 * 60),
		hour: (diff / (60 * 60)) % 24,
		minute: (diff / 60) % 60,
		second: diff % 60,
		output: '',
	}
	var label = ['day', 'hour', 'minute', 'second']
	for (var i = 0; i < 4; i++) {
		obj.output += TextUtils.pad(Math.floor(obj[label[i]]), 2)
		if (i < 3) obj.output += ':'
	}
	return obj
}

/**
	@memberOf DateUtils	
	@method adjust
	@property {TzDate|Date} date
		The date that will be the starting point for adjustment
	@property {Object} times
		An Object of time keys to adjust the date with. Positive numbers will increase the time, while negative numbers
		will decrement it. The accepted keys are: week, day, hour, minute, second
	@returns {TzDate|Date}
	@desc
		Returns the same type of Object provided: TzDate returns TzDate, Date returns Date

	<codeblock>
		// adjust the time of a TzDate
		var myTzDate = new TzDate({
			datetime: ['2017-12-31 12:00:00', 'utc']
		})
		var adjustedTzDate = DateUtils.adjust(myTzDate, { day:-1.5, hour:4.2, minute:90 });
		// Sat Dec 30 2017 05:42:00 UTC


		// adjust the time of a regualar Date object
		var myDate = new Date(2017,0,1)
		var adjustedDate = DateUtils.adjust(myDate, { day:-1.5, hour:4.2, minute:90 });
		// Fri Dec 30 2016 17:42:00 GMT-0800 (PST)
	</codeblock>
*/
export function adjust(date, times) {
	let dateAdj
	if (date._isTzDate) {
		dateAdj = date.clone()
	} else {
		dateAdj = new Date(date)
	}

	for (var key in times) {
		//var cons = 'MS_PER_' + key.toUpperCase()
		let val = MS_PER[key.toUpperCase()]
		let add = times[key] * val
		// console.log( 'key:', key, times[key] )
		// console.log( '\tcons:', cons )
		// console.log( '\tval:', val )
		// console.log( '\tadd:', add )
		dateAdj.setTime(dateAdj.getTime() + add)
	}
	// console.log( 'date:', date )
	// console.log( 'dateAdj:', dateAdj )
	return dateAdj
}

/** 
    @memberOf DateUtils	
    @method isPast
    @param {Date} date
        date to be compared
    @param {Date} context
        date to compare against, generally {@link DateUtils}
    @returns {boolean}
    @desc
        Returns true for a date that has passed the context.
*/
export function isPast(date, context) {
	if (context == undefined) {
		context = DateManager.getNow()
	}
	// console.log( 'isPast()\n\t', date, '|', date.toFullDateTime(), '\n\t', context, '|', context.toFullDateTime() )

	// make it > and = to account for schedules a time such as 8:00pm vs 8:00pm should comes as true, not needing to set it as 8:00:01pm
	return context.getTime() >= date.getTime()
}
