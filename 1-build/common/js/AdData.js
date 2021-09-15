import { DpsManager } from '@ff0000-ad-tech/ad-dps'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import { DateManager, DateSchedule, TzDate } from './ad-dates'
/**
 * TODO:
 *	Dynamic HTML:
 *		a. DPS needs to publish feeds/assets to a CDN
 */

/**
	EXTRACT JSON DATA
	Prepare dynamic data here.
 */
export let timeblock, hasDoubleHeader
export let matchup1Player1, matchup1Player2
export let matchup2Player1, matchup2Player2
export const requestDynamicImages = async () => {
	timeblock = getCurrentTimblock()
	console.log(timeblock)
	hasDoubleHeader = timeblock['Matchup 1'] && timeblock['Matchup 2']
	if (timeblock['Matchup 1']) {
		matchup1Player1 = DpsManager.addSourceImageRequest(timeblock['Matchup 1']['Player 1'].Sources)
		matchup1Player2 = DpsManager.addSourceImageRequest(timeblock['Matchup 1']['Player 2'].Sources)
	}
	if (timeblock['Matchup 2']) {
		matchup2Player1 = DpsManager.addSourceImageRequest(timeblock['Matchup 2']['Player 1'].Sources)
		matchup2Player2 = DpsManager.addSourceImageRequest(timeblock['Matchup 2']['Player 2'].Sources)
	}
}

const getCurrentTimblock = () => {
	// get "schedule" feed from DPS
	const dpsSchedule = DpsManager.getData('schedule')
	// locate current row, based on "Start Date" and "Timezone" columns
	const rows = Object.values(dpsSchedule)
	const nextRowIndex = rows.findIndex((row) => {
		const localNow = DateManager.getNow()
		const startDate = new TzDate({
			datetime: [row['Start Date'], row['Timezone']],
		})
		console.log(startDate)
		startDate.print()
		// if this timeblock has not yet started, stop looping
		return localNow < startDate.getTime()
	})
	// since next-row hasn't started, try to return the previous...or default to the first row
	return nextRowIndex > 0 ? rows[nextRowIndex - 1] : rows[0]
}

// export const dpsdata = {
// 	matchups: [
// 		{
// 			player1: 'V. WILLIAMS sdfgsd sdfgdfs',
// 			player1ranking: '',
// 			player2: 'GAUFF',
// 			player2ranking: '',
// 			vs: 'VS',
// 		},
// 		{
// 			player1: 'DJOKOVIC',
// 			player1ranking: '1',
// 			player2: 'FEDERER',
// 			player2ranking: '2',
// 			vs: 'VS',
// 		},
// 	],
// }

// Dates
// Standard Schedule
export let schedule, dateMessage, dateHour
export const prepareDateSchedule = () => {
	schedule = new DateSchedule({
		target: new TzDate({
			datetime: ['2021-06-29 20:00:00', 'US/Eastern'],
			outputTimezone: 'local',
		}),
		isStandard: true,
		standardOverrides: {
			DATE: (date) => date.format('${M}/${D} ${t} ${a^}'), // 8/1 8 PM
			TOMORROW: (date, label) => label + date.format(' ${t}<br>${a^}'), // Tomorrow 8 PM
			WEEK: (date, label) => label + date.format('${DDDD^} ${t} ${a^}'), // SATURDAY 8 PM
			NOW: 'Watch Live Now',
		},
	})
	schedule.print()
	dateMessage = schedule.currentLabel
	dateHour = schedule.target.toDateTime()
}
