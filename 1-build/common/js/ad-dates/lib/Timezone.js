/**
	@npmpackage
	@class Timezone
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-dates">ad-dates</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { Timezone } from 'ad-dates'
		</codeblock>
		<br><br>
		
		This class provides methods for accessing Timezone offsets, used by the TzDate class.

		<br><br>

		<b>Explicitly covered Timezones:</b><br>
		<table>
			<tr><td>US/Eastern</td></tr>
			<tr><td>US/Central</td></tr>
			<tr><td>US/Mountain</td></tr>
			<tr><td>US/Pacific</td></tr>
			<tr><td>US/Alaska</td></tr>
			<tr><td>US/Arizona</td></tr>
			<tr><td>US/Hawaii</td></tr>
			<tr><td>Australia/Brisbane</td></tr>
			<tr><td>Australia/Sydney</td></tr>
			<tr><td>America/Mexico_City</td></tr>
			<tr><td>America/Bogota</td></tr>
			<tr><td>America/Argentina/Buenos_Aires</td></tr>		
		</table>
*/
import * as DateUtils from './DateUtils.js'
import { TextUtils } from '@ff0000-ad-tech/ad-utils'

const dict = {
	'US/Eastern': 'et,edt,est|-4,-5',
	'US/Central': 'ct,cdt,cst|-5,-6',
	'US/Mountain': 'mt,mdt,mst|-6,-7',
	'US/Pacific': 'pt,pdt,pst|-7,-8',
	'US/Alaska': 'akt,akdt,akst|-8,-9',
	'US/Arizona': 'az|-7',
	'US/Hawaii': 'hast|-10',
	'Australia/Brisbane': 'aest|10',
	'Australia/Sydney': 'aedt,aest|10,11',
	'America/Mexico_City': 'mx|-5,-6',
	'America/Bogota': 'cot|-5',
	'America/Argentina/Buenos_Aires': 'art|-3',
}
const dlsStart = 2018
const dls = {
	// months|left days|right days

	// US: '03-11,11-04',
	// 2018 - 03-11,11-04
	// 2019 - 03-10,11-03
	// 2020 - 03-08,11-01
	// 2021 - 03-14,11-07
	// 2022 - 03-13,11-06
	// 2023 - 03-12,11-05
	// 2024 - 03-10,11-03
	// 2025 - 03-09,11-02
	US: '3,11|11,10,8,14,13,12,10,9|4,3,1,7,6,5,3,2',

	// Australia: '04-01,10-07',
	// 2018 - 04-01,10-07
	// 2019 - 04-07,10-06
	// 2020 - 04-05,10-04
	// 2021 - 04-04,10-03
	// 2022 - 04-03,10-02
	// 2023 - 04-02,10-01
	// 2024 - 04-07,10-06
	// 2025 - 04-06,10-05
	Australia: '4,10|1,7,5,4,3,2,7,6|7,6,4,3,2,1,6,5',

	// Mexico_City: '04-01,10-28'
	// 2018 - 04-01,10-28
	// 2019 - 04-07,10-27
	// 2020 - 04-05,10-25
	// 2021 - 04-04,10-31
	// 2022 - 04-03,10-30
	// 2023 - 04-02,10-29
	// 2024 - 04-07,10-27
	// 2025 - 04-06,10-26
	Mexico_City: '4,10|1,7,5,4,3,2,7,6|28,27,25,31,30,29,27,26',
}

let _local
let _tzDiff = [0, 0, 0] // used in DateSchedule for shifting upcoming dates

export function getTzDiff() {
	return _tzDiff
}

export function setLocal(val) {
	// console.log('setLocal()')
	_local = get(val)

	// get that timezone for the tz offset
	let tz = _local.value
	let tzOff = new Date().getTimezoneOffset()
	let hr = Math.floor(tzOff / 60)
	let min = tzOff % 60
	let valHr = Math.floor(tz)
	let valMin = (tz % 1) * 60
	let adjHr = -(valHr + hr)
	let adjMin = -(valMin + min)
	// if (tz == 0) {
	// 	// offset = 0 //UTC
	// } else
	if (tz > 0) {
		// acounts for time in the future from UTC
		adjHr = 24 + adjHr
	}
	// console.log('hr:', hr, 'min:', min, '| adjHr:', adjHr, 'adjMin:', adjMin)
	_tzDiff[0] = adjHr
	_tzDiff[1] = adjMin
	// console.log('Timezone.setLocal() ->', _local, val, tz, _tzDiff)
}

/**
	@memberOf Timezone	
	@method get
	@property {object|string} timezone
		The timezone constant, label or value of the Timezone object desired.
	@returns {string}
	@desc
		Returns an object with the timezone's label and value 
*/
export function get(timezone, context) {
	// console.log(Array(80).join('~'), '\n~~| Timezone |~~:', 'get()', timezone, context)
	let choice = timezone

	if (timezone == 'local' || timezone == undefined) {
		// check for the timezone being set externally from DateManager
		if (_local) {
			// console.log('\t if _local:', _local)
			choice = typeof _local == 'string' ? _local : _local.label
		} else {
			choice = getTrueLocal(context)
		}
	} else if (timezone == 'UTC' || timezone.label == 'UTC' || timezone == 'utc') {
		// console.log('return UTC\n', Array(80).join('`'))
		return { label: 'UTC', abbr: ['utc'], value: 0 }
	} else if (timezone == 'trueLocal') {
		choice = getTrueLocal(context)
		// console.log('\t else if trueLocal:', choice)
	}

	// then check if a string abbr is provided first
	if (typeof choice == 'string') {
		if (choice.length < 5) {
			let choiceAbbr = getByAbbr(choice)
			// console.log('\t\t choiceAbbr:', choiceAbbr)
			if (choiceAbbr) {
				choice = choiceAbbr
			}
		}
	} else {
		choice = timezone.label
	}
	// console.log('\t choice:', choice)
	let output = {}

	// proeceed with dictionary lookup
	let tzDataRaw = dict[choice]
	// console.log('\t tzDataRaw:', tzDataRaw)

	if (tzDataRaw) {
		const tzDataSplit = tzDataRaw.split('|')
		// console.log('\t tzDataSplit:', tzDataSplit)
		output.label = choice
		output.abbr = tzDataSplit[0].split(',')

		const dlsSplit = tzDataSplit[1].split(',')
		//console.log('\t dlsSplit:', dlsSplit)

		// check if it has 2 values
		if (dlsSplit.length > 1) {
			//console.log('\t\t dlsSplit.length > 1')
			let now = context || new Date()
			let year = now.getFullYear()
			// check for past dates, specifically for DateSchedule
			if (year < 2018) year = 2018

			let labelSplit = choice.split('/')
			// console.log('\t\t labelSplit:', labelSplit, '| year:', year)

			let dataDls = getDLS(labelSplit[0], year)
			// console.log('\t\t dataDls:', dataDls)

			// check here if the dls key is not found on the first value, i.e. Mexico_City
			if (!dataDls) {
				// dataDls = dls[labelSplit[1]]
				dataDls = getDLS(labelSplit[1], year)
				if (!dataDls) {
					// no dls found, throw error?
				}
			}
			//console.log('\t\t -> dataDls:', dataDls)
			let dateSplit = dataDls.split(',')
			// console.log('\t\t  dateSplit:', dateSplit)

			let first = new Date(year + '-' + dateSplit[0] + 'T03:00:00' + toISO(dlsSplit[1])) //+11:00')
			let second = new Date(year + '-' + dateSplit[1] + 'T03:00:00' + toISO(dlsSplit[0])) //+10:00')

			let nowAdj = DateUtils.adjust(now, { hour: dlsSplit[0] })
			// console.log('\t\t     now:', now)
			// console.log('\t\t    UTC month:', now.getUTCMonth() + 1)
			// console.log('\t\t    UTC  date:', now.getUTCDate())
			// console.log('\t\t    UTC hours:', now.getUTCHours())
			// console.log('\t\t     nowAdj:', nowAdj)
			// console.log('\t\t    UTC month:', nowAdj.getUTCMonth() + 1)
			// console.log('\t\t    UTC  date:', nowAdj.getUTCDate())
			// console.log('\t\t    UTC hours:', nowAdj.getUTCHours())
			// console.log('\t\t   first:', first)
			// console.log('\t\t  second:', second)
			let isBetween = now.getTime() > first.getTime() && now.getTime() < second.getTime()
			let tzIndex = isBetween ? 0 : 1
			// console.log('\t\t tzIndex:', tzIndex)
			output.value = dlsSplit[tzIndex]
		} else {
			output.value = dlsSplit[0]
		}
	} else {
		// determine based on machine info
		output.label = choice
		output.abbr = [choice.toLowerCase()]
		output.value = -(new Date().getTimezoneOffset() / 60)
	}
	// console.log('\t output:', output)

	// console.log('return output\n', Array(80).join('`'))
	return output
}

export function toISO(timezone) {
	const num = isNaN(timezone) ? timezone.value : timezone
	let hours = num > 0 ? Math.floor(num) : Math.ceil(num)
	let minutes = (num % 1) * 60
	minutes = num > 0 ? Math.floor(minutes) : Math.ceil(minutes)

	const operator = num < 0 ? '-' : '+'
	return operator + TextUtils.pad(Math.abs(hours), 2) + ':' + TextUtils.pad(Math.abs(minutes), 2)
}

function getByAbbr(timezone) {
	let choice
	const tzLc = timezone.toLowerCase()
	for (let item in dict) {
		const abbrs = dict[item].split('|')[0].split(',')
		// console.log('\t -->', item, dict[item], abbrs, timezone, tzLc)
		if (abbrs.indexOf(tzLc) >= 0) {
			choice = item
			break
		}
	}
	return choice
}

function getTrueLocal(context) {
	// calculate the local based on the context
	let localNow = context || new Date()
	// get a true local now to extract the timezone abbr
	const dateString = localNow.toTimeString()
	// console.log('  -- dateString:', dateString)
	let tzStr = dateString.split('(')[1]
	tzStr = tzStr.substr(0, tzStr.length - 1)
	// console.log('  ------- tzStr:', tzStr)
	// IE & Edge print timezones as words, not abbreviated, so strip it down to just abbreviation
	return tzStr.replace(/[a-z\.\s]/g, '')
}

function getDLS(str, year) {
	// console.log('getDLS()', str, year)
	if (typeof dls[str] == 'string') {
		// time to parse

		// breaks into months, left day, right day
		let valueSplit = dls[str].split('|').map((str) => {
			return str.split(',').map((val) => {
				const padVal = TextUtils.pad(val, 2)
				return padVal
			})
		})

		dls[str] = {}
		const month = valueSplit[0]
		const day = valueSplit[2]
		valueSplit[1].map((val, i) => {
			dls[str][dlsStart + i] = month[0] + '-' + val + ',' + month[1] + '-' + day[i]
		})

		// console.log(valueSplit)
		// console.log(dls[str])
	}
	// get based on year
	if (dls[str]) {
		return dls[str][year]
	}
	return undefined
}
