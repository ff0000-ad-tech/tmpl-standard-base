const fs = require('fs')
const argv = require('minimist')(process.argv.slice(2))

const log = require('@ff0000-ad-tech/debug')('name-sync')

// load package
const pkgPath = argv.package || `./package.json`
const pkg = JSON.parse(fs.readFileSync(pkgPath))
if (!pkg.buildSource) {
	log(`package.json missing "buildSource" data -- cannot determine specific release name`)
	process.exit(1)
}
// build release name
const sanitize = (label) => {
	return label.toLowerCase().replace(/[^a-z0-9_.-]+/g, '-')
}
const platform = sanitize(pkg.buildSource.platform) || 'standard'
const template = sanitize(pkg.buildSource.template) || 'base'
const option = sanitize(pkg.buildSource.option) || ''
// update package name
pkg.name = `@ff0000-ad-tech/tmpl-${platform}-${template}${option ? `-${option}` : ``}`
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
