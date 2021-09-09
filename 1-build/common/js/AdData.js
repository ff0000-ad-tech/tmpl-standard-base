import { DpsManager } from '@ff0000-ad-tech/ad-dps'
import { ImageManager } from '@ff0000-ad-tech/ad-assets'
import * as Velvet from '@ff0000-ad-tech/ad-velvet'
import { DateFormatter, DateSchedule, spanish, TzDate } from '@ff0000-ad-tech/ad-dates'
import { ObjectUtils } from '@ff0000-ad-tech/ad-utils'

/**
 * TODO:
 *	Dynamic HTML:
 *		a. DPS needs to publish feeds/assets to a CDN
 */

/**
	EXTRACT JSON DATA
	Prepare dynamic data here.
 */
export let bgImage
export const requestDynamicImages = async () => {
	// preload dynamic images, will be available on ImageManager
	const mainSource = DpsManager.getData('main', 'bg.Sources')
	bgImage = DpsManager.addSourceImageRequest(mainSource)
}

export const copy = [
	'WHY PAY MORE\nFOR ELECTRICITY?',
	'MAKE THE MOST OF YOUR\nENERGY AND MONEY',
	'CHOOSE SMART SAVINGS\nWITH DISCOUNT POWER.',
]
export const fonts = {
	primary: 'template_font',
}
export const colors = {}

// VELVET
export let mainLogo
export let sponsorCopy
export let sponsorImage
export let headline
export let hasHeadline = false

export let networks = []
export let dateMessage = 'date message'
export let teams = {}
export let players = {}

export let clickTag

export const processVelvetAdData = async () => {
	console.warn('AdData.processVelvetAdData()')
	//PREPARE AND PROCESS YOUR VELVET DATA HERE
	////////////////////////////////////////////////////////
	//////////////////////// GENERAL //////////////////////
	////////////////////////////////////////////////////////
	mainLogo = ImageManager.addImageRequest({
		src: Velvet.get('main_logo.logo.url'),
		imageId: 'main_logo',
	})
	sponsorCopy = Velvet.get('sponsor_copy')
	sponsorImage = ImageManager.addImageRequest({
		src: Velvet.get('sponsor_image.image.url'),
		imageId: 'sponsor_image',
	})
	headline = Velvet.get('headline')
	hasHeadline = headline || sponsorCopy ? true : false

	////////////////////////////////////////////////////////
	//////////////////////// NETWORKS //////////////////////
	////////////////////////////////////////////////////////

	const getScale = (name) => {
		let scaleFactor = 1
		switch (name) {
			case 'ESPN':
			case 'ESPN+':
			case 'ESPN Play':
				scaleFactor = 0.5
				break
			default:
				break
		}
		return scaleFactor
	}
	// Get the networks from the velvet data
	const networksRaw = Velvet.get('networks')
	networks = networksRaw.map((elem) => {
		const scaleFactor = getScale(elem.name.value)
		// Add the image request
		const imageId = ImageManager.addImageRequest({
			src: elem.dark.value.url,
			imageId: elem.dark.value.name,
		})
		// Return object containing the image name for use with ImageManager.get() and the image url
		return {
			name: elem.name.value,
			url: elem.dark.value.url,
			imageId,
			scaleFactor,
		}
	})

	////////////////////////////////////////////////////////
	///////////////////// DATES / TUNEIN ///////////////////
	////////////////////////////////////////////////////////

	// ATTENTION: Only add this line IF there needs to be spanish language support
	// DateFormatter.addLanguage(spanish)

	// ATTENTION: replace tuneInRaw with a value coming from Velvet
	// let dayType = self.isWide && !self.isMobile ? 'DDDD' : 'DDD'
	// let dayType = !isMobile ? 'DDDD' : 'DDD'
	let dayType = 'DDDD'
	if (adParams.adWidth == '728') {
		dayType = 'DDD'
	}
	if (adParams.adWidth == '300') {
		dayType = 'DDD'
	}
	if (adParams.adWidth == '320') {
		dayType = 'DDD'
	}

	dayType = '${' + dayType + '}'
	const tuneInRaw = Velvet.get('event_time')
	const spanStart = `<span style="font-size: 65%;">`
	const spanEnd = `</span>`

	const tweakLabel = (date, label) => {
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
				return `${tweakLabel(date, dayType)}, ${date.format('${t}')}${spanStart}${date.format('${a}')}/${date.format('${z}')}${spanEnd}`
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

	////////////////////////////////////////////////////////
	///////////////////////// PLAYERS //////////////////////
	////////////////////////////////////////////////////////
	const toPercentage = (str) => {
		str = str || '100'
		return parseFloat(str) / 100
	}

	for (let i = 1; i < 3; i++) {
		const teamStr = `team_${i}`
		const ogRank = Velvet.get(`${teamStr}.rank_manual`) // switched from "rank", bc Velvet is pulling blanks
		const rank = ogRank == null ? '' : `${spanStart}${ogRank}${spanEnd}`
		// const rank = ogRank == null ? '' : `${spanStart}${ogRank}${spanEnd}`
		// const space = rank.length ? ' ' : ''
		const teamName = Velvet.get(`${teamStr}.nickname`)
		const abbreviation = Velvet.get(`${teamStr}.abbreviation`)

		teams[`team${i}`] = {
			name: teamName,
			abbreviation: abbreviation,
			// name: `${rank}${space}${teamName}`,
			logo: ImageManager.addImageRequest({
				src: Velvet.get(`${teamStr}.primary_logo.url`),
				imageId: `${teamStr}.primary_logo`,
			}),
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

		const playersRaw = Velvet.get('players') || []
		const playerImage = Velvet.get(`${teamStr}.player_image`)
		if (playerImage) {
			const playerUrl = Velvet.get(playerImage, 'url')
			if (playerUrl) {
				for (let p = 0, t = playersRaw.length; p < t; p++) {
					const teamPlayerImage = Velvet.get(playersRaw[p], 'player_image')
					if (!teamPlayerImage) continue
					const teamPlayerUrl = Velvet.get(teamPlayerImage, 'url')
					if (teamPlayerUrl && teamPlayerUrl.split('?')[0] === playerUrl.split('?')[0]) {
						players[`player${i}`] = ObjectUtils.defaults(
							teams[`team${i}`],
							{
								playerImage: ImageManager.addImageRequest({
									src: playerUrl,
									imageId: `player${i}image`,
								}),
							},
							true
						)
						teams[`team${i}`].player = ImageManager.addImageRequest({
							src: playerUrl,
							imageId: `player${i}image`,
						})
						break
					}
				}
			}
		}
	}

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

	// tracking pixel
	if (Velvet.get('tracker_tag')) {
		loadPixel(Velvet.get('tracker_tag'))
	}
}
