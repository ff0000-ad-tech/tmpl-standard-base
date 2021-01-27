const fs = require('fs')
const argv = require('minimist')(process.argv.slice(2))
const requireFromString = require('require-from-string')

const commentHooks = require('@ff0000-ad-tech/comment-hooks')

const log = require('@ff0000-ad-tech/debug')('index-settings')

/** NOTE:
 * 	At this time, only version is updated
 *	in Red.Settings.ad_params
 */
if (!argv.version) {
	log(`--version is required`)
	process.exit()
}
// index path
const indexPath = argv.index || `./1-build/300x250/index.html`
const adParamsHook = 'Red.Settings.ad_params'
try {
	// load index
	const index = fs.readFileSync(indexPath, 'utf8')
	// find settings obj
	const adParamsRegex = commentHooks.getRegexForHook(adParamsHook)
	const matches = index.match(adParamsRegex)
	// settings obj can be parsed with a little node-require trickery
	const adParams = requireFromString(`${matches.groups.content} module.exports = adParams;`)
	// set version
	adParams.version = argv.version
	// update ad-params in index
	const adParamsStr = `var adParams = ${JSON.stringify(adParams, null, '\t')}`
	const formatted = `/*-- ${adParamsHook}.start --*/\n` + `${adParamsStr}\n` + `/*-- ${adParamsHook}.end --*/`
	const updateIndex = index.replace(adParamsRegex, formatted)
	// write updated index
	log(`Updating settings at ${indexPath}`)
	fs.writeFileSync(indexPath, updateIndex)
} catch (err) {
	log(`Unable to set version in ${indexPath}`)
	log(err)
}
