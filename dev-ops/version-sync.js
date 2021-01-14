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
	pkg.version = pkg.buildSource.version
}
// package to build-source
else {
	pkg.buildSource.version = pkg.version
}
// write updated package
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
