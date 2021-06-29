cd ..

# ensure branch build-source version is package version
node ./dev-ops/version-sync.js --package package.json --bsToPkg
# prompt next version
npx bump package.json
RELEASE_VERSION=`node -pe "require('./package.json').version"`
# propagate next version back to build-source
node ./dev-ops/version-sync.js --package package.json --pkgToBs 

# update package name
BRANCH=`git rev-parse --abbrev-ref HEAD`
node ./dev-ops/set-package-name.js --package package.json --branch $BRANCH --version $RELEASE_VERSION
# get package name
PKG_NAME=`node -pe "require('./package.json').name"`

# commit updates to package
git add -A
git commit -m 'updates build-source info'
git push

# publish to npm
npm publish --tag $BRANCH --access public 

# note
PLATFORM=`node -pe "require('./package.json').buildSource.platform"`
TEMPLATE=`node -pe "require('./package.json').buildSource.template"`
OPTION=`node -pe "require('./package.json').buildSource.option"`
echo
echo "Done.\033[1;31m Be sure to update BSA's version reference! \033[0m"
echo ""
echo " https://review.160over90.com/bsa/app"
echo "  Add New:"
echo "   \033[1;32m$PKG_NAME: $RELEASE_VERSION \033[0m"
echo ""
echo "  Update Existing:"
echo "   $PLATFORM : $TEMPLATE : $OPTION -> \033[1;32m$RELEASE_VERSION \033[0m"
echo ""
