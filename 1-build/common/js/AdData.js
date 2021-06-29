import { DpsManager } from '@ff0000-ad-tech/ad-dps'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import { DateSchedule, TzDate } from './ad-dates'
/**
 * TODO:
 *	Dynamic HTML:
 *		a. DPS needs to publish feeds/assets to a CDN
 */

/**
	EXTRACT JSON DATA
	Prepare dynamic data here.
 */
export const requestDynamicImages = async () => {
	// preload dynamic images, will be available on ImageManager
	// const mainSource = DpsManager.getData('main', 'bg.Sources')
	// DpsManager.addImageRequest(mainSource, 'bg')
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

