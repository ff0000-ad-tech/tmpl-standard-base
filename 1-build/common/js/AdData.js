import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import * as Velvet from '@common/js/ad-velvet'
import { DateFormatter, DateSchedule, spanish, TzDate } from '@common/js/ad-dates'

// STANDARD STUFF
export const copy = [
	'WHY PAY MORE\nFOR ELECTRICITY?',
	'MAKE THE MOST OF YOUR\nENERGY AND MONEY',
	'CHOOSE SMART SAVINGS\nWITH DISCOUNT POWER.',
]

export const fonts = {
	primary: 'template_font',
}
export const colors = {}

// ESPN STUFF
export let networks = []

export const prepareAdData = () => {
	console.warn('AdData.prepareAdData()')
	//PREPARE AND PROCESS YOUR VELVET DATA HERE

	// Get the networks from the velvet data
	const networksRaw = Velvet.get('networks')

	networks = networksRaw.map((elem) => {
		// Add the image request
		ImageManager.addImageRequest({ src: elem.light.value.url, imageId: elem.name.value })

		// Return object containing the image name for use with ImageManager.get() and the image url
		return {
			name: elem.name.value,
			url: elem.light.value.url,
		}
	})
}

// export const requestDynamicImages = async () => {
// ImageManager.addImageRequest({ src: '/path/to/asset', imageId: 'my-dynamic-image' })
// }

// Dates
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
