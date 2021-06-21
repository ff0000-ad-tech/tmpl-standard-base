/**
	@npmpackage
	@class DateFormatter

	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-dates">ad-dates</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { DateFormatter } from 'ad-dates'
		</codeblock>
		<br><br>
		
		This class provides a collection of year, month, date labels along with a utility for mananipulating
		a TzDate/Date object.		
*/
import { TextUtils } from '@ff0000-ad-tech/ad-utils'
import TzDate from './TzDate.js'

let _language = 'english'
let _languageLabels = {}

/**
	@memberOf DateFormatter	
	@method setLanguage
	@property {String} value
		The label associated with an added language object, such as 'english' or 'spanish'
	@desc
		Changes teh language used for date formatting
	<codeblock>
		DateFormatter.setLanguage(spanish)
	</codeblock>
*/
export function setLanguage(value) {
	_language = value || _language
}

/**
	@memberOf DateFormatter	
	@method addLanguage
	@property {Object} value
		A language object, such as labelSpanish.js
	@desc
		Adds a langauge option. 
	<codeblock>
		import { spanish } from 'ad-dates'
		DateFormatter.addLanguage(spanish)
	</codeblock>
*/
export function addLanguage(value) {
	for (let key in value) {
		_languageLabels[key] = value[key]
	}
}

/**
	@memberOf DateFormatter	
	@method getLabels
	@property {String} language
		The language that will be used.  Currently only "english". Otheres such as "spanish" must be imported and use addLanguage().  
		Defaults to the value set on the class level Dateformatter.langauge
	@returns {TzDate|Date}
	@desc
		Returns an objects that defines labels that date-messaging will use in the ad, used directly by DateSchedule and RecurringSchedule 
*/
export function getLabels(language) {
	return _languageLabels[language || _language]
}

/**
	@memberOf DateFormatter	
	@method getNumericSuffixFor
	@property {Number} value
		An integer
	@property {Boolean} includeValue
		Whether or not to include the number in the return. true = 1st; false = 1
	@returns {String}
	@desc
		Returns the numeric suffix, eg. st, nd, rd, th in the language set from DateManager

	<codeblock>
		const date = new TzDate({
			datetime: '2020-01-01T12:00:00+00:00'
		})
		const dateOf = DateFormatter.getNumericSuffixFor(date.getDate(), true) // 1st
		const suffix = DateFormatter.getNumericSuffixFor(date.getDate()) // st
	</codeblock>
*/
export function getNumericSuffixFor(value, includeValue) {
	value = value.toString()
	const lastNumber = value.slice(value.length - 1)
	const labels = getLabels()
	var output = labels.TH

	switch (lastNumber) {
		case '1':
			if (value != '11') output = labels.ST
			break
		case '2':
			if (value != '12') output = labels.ND
			break
		case '3':
			if (value != '13') output = labels.RD
			break
	}

	return (includeValue ? value : '') + output
}

/**
	@memberOf DateFormatter	
	@method format
	@property {TzDate} tzDate
		The date to format
	@property {String} format
		Pass in a mark up output of the date, including html, inline styling and spacing. In place of key data, use tokens from chart wrapped in ${}
	@property {Object} args
		Optional Object to change the outputTimezone, langouage of formatting
	@returns {String}
	@desc
		Formats a TzDate in any possible mutation by accepting tokens and strings<br>	
		<b>List of possible tokens to use:</b><br>
		<table>
			<tr><td>YYYY</td>	<td>Year as full Number</td><td>2018</td></tr>
			<tr><td>YY</td>		<td>Year as abbreviated Number</td> <td>18</td></tr>
			<tr><td>MMMM</td>	<td>Month as full String</td> <td>September</td></tr>
			<tr><td>MMM</td>	<td>Month as abbreviated String</td> <td>sept</td></tr>
			<tr><td>MM</td>		<td>Month as full Number</td> <td>08, 09, 10, 11</td></tr>
			<tr><td>M</td>		<td>Month as shortest Number</td> <td>8, 9, 10, 11</td></tr>
			<tr><td>DDDD</td>	<td>Day of the week as full String</td> <td>Monday</td></tr>
			<tr><td>DDD</td>	<td>Day of the week as abbreviated String</td> <td>mon</td></tr>
			<tr><td>DD</td>		<td>Date as full Number</td> <td>08, 09, 10, 11</td></tr>
			<tr><td>D</td>		<td>Date as shortest Number</td> <td>8, 9, 10, 11</td></tr>
			<tr><td>o</td>		<td>Date Suffix String</td> <td>st, nd, rd, th</td></tr>
			<tr><td>Do</td>		<td>Date AND Suffix as Number/String</td> <td>1st, 2nd, 3rd, 4th</td></tr>
			<tr><td>TT</td>		<td>Time (Hour:Minute) in full military time as String</td> <td>19:00, 20:15</td></tr>
			<tr><td>T</td>		<td>Time (Hour:Minute) in shortest military time as String</td> <td>19, 20:15</td></tr>
			<tr><td>tt</td>		<td>Time (Hour:Minute) in full standard time as String</td> <td>7:00, 8:15</td></tr>
			<tr><td>t</td>		<td>Time (Hour:Minute) in shortest standard time as String</td> <td>7, 8:15</td></tr>
			<tr><td>HH</td>		<td>Hour in full military time as Number</td> <td>0...23 > 08, 09, 10, 20, 21</td></tr>
			<tr><td>H</td>		<td>Hour in shortest military time as Number</td> <td>0...23 > 8, 9, 10, 20, 21</td></tr>
			<tr><td>hh</td>		<td>Hour in full standard time as Number</td> <td>1...12 > 08, 09, 10, 11</td></tr>
			<tr><td>h</td>		<td>Hour in shortest standard time as Number</td> <td>1...12 > 8, 9, 10, 11</td></tr>
			<tr><td>mm</td>		<td>Minute in full standard time as Number</td> <td>0...59 > 08, 09, 10, 11</td></tr>
			<tr><td>m</td>		<td>Minute in shortest standard time as Number</td> <td>0...59 > 8, 9, 10, 11</td></tr>
			<tr><td>ss</td>		<td>Second in full standard time as Number</td> <td>0...59 > 08, 09, 10, 11</td></tr>
			<tr><td>s</td>		<td>Second in shortest standard time as Number</td> <td>0...59 > 8, 9, 10, 11</td></tr>
			<tr><td>a</td>		<td>Meridiem as String</td> <td>am, pm</td></tr>
			<tr><td>z</td>		<td>Timezone abbreviation as String</td> <td>pt, mt, ct, et</td></tr>
			<tr><td>^</td>		<td>Special Character - add to the end of any token will run toUpperCase() the return as String</td> <td>${Do} = 1st, ${Do^} = 1ST</td></tr>						
		</table>

	<codeblock>
		const targetDate = new TzDate({
			datetime: ['2015-08-01 14:00:07', 'US/Eastern']
		})

		const asDateSlashed = targetDate.format('${M}/${D}/${YYYY}')
		// 8/1/2015

		const asDayOfMonth = targetDate.format('Watch this ${DDDD} the ${Do} of ${MMMM}')
		// Watch this Saturday the 1st of August

		const asTuneIn = targetDate.format('${M}/${D} <span style="color: red;">${t}${a^}</span>')
		// 8/1 <span style="color: red;">2PM</span>
	</codeblock>
*/
export function format(tzDate, format, args) {
	// args - language, weekday exceptions, month exceptions
	args = args || {}

	let tz = args.inTimezone || tzDate.outputTimezone
	let language = args.language

	let dateIn = tzDate.getIn(tz)
	//	console.log(".format('" + format + "')")

	let labels = getLabels(language)
	let month = dateIn.getMonth()
	let hours = dateIn.getHours()
	let minutes = dateIn.getMinutes()

	// ${YYYY}
	let result = format.replace(/\$\{(.*?)\}/g, (match, token) => {
		//	console.log('match:', match, '| token:', token)
		let output = token
		let trim = 0 // only used for year
		let padding
		let needsLabel
		let upper = false
		let keep = true
		let suffix = true

		// searches for ^ char for toUpperCase()
		token.replace(/(.+)(\^)/, (match3, token3) => {
			token = token3
			upper = true
			// console.log('\t\t\t', match3, token3)
		})

		// check for a set of 2, except Y. flags padding then converts to single character MM > M
		if (token.length == 2) {
			token.replace(/(?![Yo])([a-zA-Z]).*?\1/, (match2, token2) => {
				token = token2.substr(0, 1)
				// console.log('\t\t', match2, token2, token)
				padding = 2
			})
		}

		switch (token) {
			case 'YY':
				trim = -2
			case 'YYYY':
				output = ('' + dateIn.getFullYear()).slice(trim)
				break

			case 'M':
				output = month + 1
				break
			case 'MMM':
				output = labels.MONTHS_ABRV[month]
				break
			case 'MMMM':
				output = labels.MONTHS_FULL[month]
				break

			case 'D':
				output = dateIn.getDate()
				break
			case 'o':
				suffix = false
			case 'Do':
				output = getNumericSuffixFor(dateIn.getDate(), suffix)
				break
			case 'DDD':
				output = labels.WEEKDAYS_ABRV[dateIn.getDay()]
				break
			case 'DDDD':
				output = labels.WEEKDAYS_FULL[dateIn.getDay()]
				break

			// padding decides if keep minutes
			case 't': // t - 7, 8:15 | tt - 7:00, 8:15
				keep = false
			case 'T': // T - 19, 20:15 | TT - 19:00, 20:15
				output = hours
				if (!keep) {
					output %= 12
					if (output == 0) output = 12
				}
				if (minutes > 0) padding = true
				if (padding) output += ':' + TextUtils.pad(minutes, 2)
				break

			case 'H':
				output = hours
				break

			case 'h':
				output = hours % 12
				if (output == 0) {
					output = 12
				}
				break

			case 'm':
				output = minutes
				break

			case 's':
				output = dateIn.getSeconds()
				break

			case 'a':
				output = hours >= 12 ? 'pm' : 'am'
				break

			case 'z':
				output = tz.abbr[0] // some kind of flag for which one to use?
				break
		}

		if (padding) {
			output = TextUtils.pad(output, padding)
		}

		if (upper && typeof output == 'string') {
			// render text first for special characters
			const temp = document.createElement('div')
			temp.innerHTML = output
			output = temp.innerHTML.toLocaleUpperCase()
		}
		// console.log('\t', match, token, output)

		return output
	})

	return result
}
