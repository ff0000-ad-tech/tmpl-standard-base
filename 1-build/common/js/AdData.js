import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import * as Velvet from '@common/js/ad-velvet'
import { DateFormatter, DateSchedule, spanish, TzDate } from '@common/js/ad-dates'
import { ObjectUtils } from '@common/js/ad-utils'
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
export const isWide = adParams.adWidth > 300
export const isMobile = adParams.adHeight < 90 && adParams.adWidth < 400

export let networks = []
export let dateMessage = 'date message'
export let clickTag

// General
export let mainLogo
export let sponsorCopy
export let sponsorImage
export let bubbleImage
export let headline
export let players = []
export let teams = {}

export const prepareAdData = () => {
	console.warn('AdData.prepareAdData()')
	//PREPARE AND PROCESS YOUR VELVET DATA HERE
	////////////////////////////////////////////////////////
	//////////////////////// GENERAL //////////////////////
	////////////////////////////////////////////////////////
	mainLogo = ImageManager.addImageRequest({ src: Velvet.get('main_logo.logo.url'), imageId: 'main_logo' })
	sponsorCopy = Velvet.get('sponsor_copy')
	sponsorImage = ImageManager.addImageRequest({ src: Velvet.get('sponsor_image.image.url'), imageId: 'sponsor_image' })
	bubbleImage = ImageManager.addImageRequest({ src: Velvet.get('bubble_image.image.url'), imageId: 'bubble_image' })
	headline = Velvet.get('headline')

	////////////////////////////////////////////////////////
	//////////////////////// NETWORKS //////////////////////
	////////////////////////////////////////////////////////

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

	////////////////////////////////////////////////////////
	///////////////////// DATES / TUNEIN ///////////////////
	////////////////////////////////////////////////////////

	// ATTENTION: Only add this line IF there needs to be spanish language support
	// DateFormatter.addLanguage(spanish)

	// ATTENTION: replace tuneInRaw with a value coming from Velvet
	// let dayType = self.isWide && !self.isMobile ? 'DDDD' : 'DDD'
	let dayType = !isMobile ? 'DDDD' : 'DDD'
	dayType = '${' + dayType + '}'
	const tuneInRaw = Velvet.get('event_time')
	const spanStart = `<span style="font-size: 65%;">`
	const spanEnd = `</span>`

	function tweakLabel(date, label) {
		label = date.format(label)
		switch (label) {
			case 'tue':
				return 'tues'
			case 'thu':
				return 'thur'
			case 'sep':
				return 'sept'
			default:
				return label
		}
	}
	const schedule = new DateSchedule({
		target: new TzDate({
			datetime: tuneInRaw.datetime,
			outputTimezone: tuneInRaw.timezone,
		}),
		eventDuration: 180,
		isStandard: true,
		standardOverrides: {
			DATE: function (date) {
				return `${tweakLabel(date, dayType)}, ${tweakLabel(date, '${MMM}')} ${date.format('${D}')} ${date.format(
					'${t}'
				)}${spanStart}${date.format('${a}')}/${date.format('${z}')}${spanEnd}`
			},
			WEEK: function (date, label) {
				return `${tweakLabel(date, dayType)} ${date.format('${t}')}${spanStart}${date.format('${a}')}/${date.format('${z}')}${spanEnd}`
			},
			TOMORROW: function (date, label) {
				return `${label} ${date.format('${t}')}${spanStart}${date.format('${a}')}/${date.format('${z}')}${spanEnd}`
			},
			TODAY: function (date, label) {
				return `${label} ${date.format('${t}')}${spanStart}${date.format('${a}')}/${date.format('${z}')}${spanEnd}`
			},
			TONIGHT: function (date, label) {
				return `${label} ${date.format('${t}')}${spanStart}${date.format('${a}')}/${date.format('${z}')}${spanEnd}`
			},
			NOW: () => 'LIVE NOW',
			PAST: () => 'VIEW HIGHLIGHTS',
		},
	}).print()

	dateMessage = schedule.currentLabel
	console.warn('DATE MESSAGE=', dateMessage)

	////////////////////////////////////////////////////////
	//////////////////////// CLICKTAG //////////////////////
	////////////////////////////////////////////////////////
	// clicktag selection logic -- should all work automagically
	clickTag = (() => {
		const exitKeys = {
			ESPN_FFL_APP: ['up_url_fantasy_app', 'live_url_fantasy_app'],
			MRAID: ['up_url', 'app_url'], // deprecated, makes this build template compatible with a v2x cs-plugin-apply-networks
			MRAID_IOS: ['up_url_espn_app_ios', 'live_url_espn_app_ios'],
			MRAID_ANDROID: ['up_url_espn_app', 'live_url_espn_app'],
			ESPN: ['up_url', 'live_url'], // required fields in Velvet
		}
		const i = schedule.isLive ? 1 : 0
		let exit
		try {
			exit = Velvet.get(exitKeys[adParams.espnChannel][i])
		} catch (e) {
			if (adParams.espnChannel && adParams.espnChannel.match(/^MRAID$/)) {
				// also deprecated, supports ESPN App iOS exits, per an older Velvet Ad Template with only 3 exit-urls defined
				exit = Velvet.get(exitKeys.MRAID[i])
			} else {
				// default, off-channel DCM
				exit = Velvet.get(exitKeys.ESPN[i])
			}
		}
		return exit || clickTag
	})()

	console.warn('CLICKTAG=', clickTag)

	////////////////////////////////////////////////////////
	///////////////////////// PLAYERS //////////////////////
	////////////////////////////////////////////////////////
	const toPercentage = (str) => {
		str = str || '100'
		return parseFloat(str) / 100
	}

	const playersRaw = Velvet.get('players') || []
	for (let i = 1; i < 3; i++) {
		const teamStr = `team_${i}`
		const ogRank = Velvet.get(`${teamStr}.rank_manual`) // switched from "rank", bc Velvet is pulling blanks
		const rank = ogRank == null ? '' : `${spanStart}${ogRank}${spanEnd}`
		const space = rank.length ? ' ' : ''
		const teamName = Velvet.get(`${teamStr}.nickname`)

		teams[`team${i}`] = {
			// name: self.isWide && i > 1 ? `${teamName}${space}${rank}` : `${rank}${space}${teamName}`,
			name: `${rank}${space}${teamName}`,
			logo: ImageManager.addImageRequest({ src: Velvet.get(`${teamStr}.primary_logo.url`), imageId: `${teamStr}_logo` }),
			rank: ogRank,
			//
			color: Velvet.get(`${teamStr}.color`),
			alpha: toPercentage(Velvet.get(`${teamStr}.color_opacity`)),
			textColor: Velvet.get(`${teamStr}.text_color_override`),
			colorPrimary: Velvet.get(`${teamStr}.primary_color`),
			alphaPrimary: toPercentage(Velvet.get(`${teamStr}.primary_color_opacity`)),
			colorSecondary: Velvet.get(`${teamStr}.secondary_color`),
			alphaSecondary: toPercentage(Velvet.get(`${teamStr}.secondary_color_opacity`)),
		}

		const playerImage = Velvet.get(`${teamStr}.player_image`)

		// console.log(`%c player image...`, 'color: black; background-color: cyan; font-style: italic; padding: 0px;')
		// console.warn(playerImage)
		if (playerImage) {
			const playerUrl = Velvet.get(playerImage, 'url')
			// console.log(`%c player URL ...`, 'color: black; background-color: yellow; font-style: italic; padding: 0px;')
			// console.warn(playerUrl)
			if (playerUrl) {
				for (let p = 0, t = playersRaw.length; p < t; p++) {
					const teamPlayerImage = Velvet.get(playersRaw[p], 'player_image')
					if (!teamPlayerImage) continue
					const teamPlayerUrl = Velvet.get(teamPlayerImage, 'url')
					if (teamPlayerUrl && teamPlayerUrl.split('?')[0] === playerUrl.split('?')[0]) {
						players[p] = ObjectUtils.defaults(
							teams[`team${i}`],
							{
								player: ImageManager.addImageRequest({ src: playerUrl, imageId: `player${i}_image` }),
							},
							true
						)
						break
					}
				}
			}
		}
	}

	players = players.filter((data) => {
		if (data) return data
	})

	// tracking pixel
	if (Velvet.get('tracker_tag')) loadPixel(Velvet.get('tracker_tag'))
}
