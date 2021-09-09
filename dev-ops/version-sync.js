const fs = require('fs')
const argv = require('minimist')(process.argv.slice(2))

const log = require('@ff0000-ad-tech/debug')('version-sync')

// load package
const pkgPath = argv.package || `./package.json`
const pkg = JSON.parse(fs.readFileSync(pkgPath))
if (!pkg.buildSource) {
	log(`package.json missing "buildSource" data -- cannot determine specific release name`)
	process.exit(1)
}
// build-source to package
if (argv.bsToPkg) {
	const pkgAlpha = pkg.version.replace(/-.*$/, '')
	pkg.version = `${pkgAlpha}-${pkg.buildSource.release}`
}
// package to build-source
if (argv.pkgToBs) {
	const bsBetaMatch = pkg.version.match(/-(.*)$/)
	if (!bsBetaMatch) {
		log(`package version must be released as a beta`)
		process.exit(1)
	}
	pkg.buildSource.release = bsBetaMatch[1]
}
// override package
if (argv.setPkg) {
	pkg.version = argv.setPkg
}
// write updated package
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
