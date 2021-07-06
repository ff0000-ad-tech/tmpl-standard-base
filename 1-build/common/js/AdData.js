import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import * as Velvet from '@common/js/ad-velvet'
import { DateFormatter, DateSchedule, spanish, TzDate } from '@common/js/ad-dates'
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
	// ImageManager.addImageRequest({ src: '/path/to/asset', imageId: 'my-dynamic-image' })
}

/**
	DEFINE and EXPORT global Ad-Data
 */
export const copy = [
	'WHY PAY MORE\nFOR ELECTRICITY?',
	'MAKE THE MOST OF YOUR\nENERGY AND MONEY',
	'CHOOSE SMART SAVINGS\nWITH DISCOUNT POWER.',
]
export const fonts = {
	primary: 'template_font',
}
export const colors = {}

// // ATTENTION: Only add this line IF there needs to be spanish language support
// // DateFormatter.addLanguage(spanish)

// // ATTENTION: replace tuneInRaw with a value coming from Velvet
// const tuneInRaw = { datetime: '2018-01-01T00:00:00+00:00', timezone: 'US/Pacific' }
// const schedule = new DateSchedule({
// 	target: new TzDate({
// 		datetime: tuneInRaw.datetime,
// 		outputTimezone: tuneInRaw.timezone,
// 	}),
// 	isStandard: true,
// 	standardOverrides: {
// 		DATE: (date) => date.format('${M}/${D}'),
// 	},
// }).print()

// // clicktag selection logic -- should all work automagically
// clickTag = (() => {
// 	const exitKeys = {
// 		ESPN_FFL_APP: ['up_url_fantasy_app', 'live_url_fantasy_app'],
// 		MRAID: ['up_url', 'app_url'], // deprecated, makes this build template compatible with a v2x cs-plugin-apply-networks
// 		MRAID_IOS: ['up_url_espn_app_ios', 'live_url_espn_app_ios'],
// 		MRAID_ANDROID: ['up_url_espn_app', 'live_url_espn_app'],
// 		ESPN: ['up_url', 'live_url'], // required fields in Velvet
// 	}
// 	const i = schedule.isLive ? 1 : 0
// 	let exit
// 	try {
// 		exit = Velvet.get(exitKeys[adParams.espnChannel][i])
// 	} catch (e) {
// 		if (adParams.espnChannel && adParams.espnChannel.match(/^MRAID$/)) {
// 			// also deprecated, supports ESPN App iOS exits, per an older Velvet Ad Template with only 3 exit-urls defined
// 			exit = Velvet.get(exitKeys.MRAID[i])
// 		} else {
// 			// default, off-channel DCM
// 			exit = Velvet.get(exitKeys.ESPN[i])
// 		}
// 	}
// 	return exit || clickTag
// })()

// // tracking pixel
// if (Velvet.get('tracker_tag')) loadPixel(Velvet.get('tracker_tag'))
