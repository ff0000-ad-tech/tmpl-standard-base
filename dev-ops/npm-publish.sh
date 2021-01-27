cd ..

# ensure branch build-source version is package version
node ./dev-ops/version-sync.js --package package.json --bsToPkg
CURRENT_VERSION=`node -pe "require('./package.json').version"`

# prompt next version
npx bump package.json
RELEASE_VERSION=`node -pe "require('./package.json').version"`

# propagate next version back to build-source
# but restore the package-version to current,
# so the NP package doesn't insist on a new version :o
node ./dev-ops/version-sync.js --package package.json --pkgToBs --setPkg $CURRENT_VERSION

# update package name
BRANCH=`git rev-parse --abbrev-ref HEAD`
node ./dev-ops/set-package-name.js --package package.json --branch $BRANCH --version $RELEASE_VERSION

# update index settings with this version
node ./dev-ops/index-settings.js --version $RELEASE_VERSION
npx prettier --write ./1-build/300x250/index.html

# commit updates to package
git add -A
git commit -m 'updates build-source info'
git push

# get release name
PKG_NAME=`node -pe "require('./package.json').name"`
# prompt next version and publish to npm
np $RELEASE_VERSION --tag=$BRANCH --any-branch --no-release-draft --no-2fa || exit $?

# note
PLATFORM=`node -pe "require('./package.json').buildSource.platform"`
TEMPLATE=`node -pe "require('./package.json').buildSource.template"`
OPTION=`node -pe "require('./package.json').buildSource.option"`
echo
echo "Done.\033[1;31m Be sure to update BSA's version reference! \033[0m"
echo ""
echo " https://review.160over90.com/bsa"
echo " New:"
echo "  \033[1;32m\"$PKG_NAME\": \"$RELEASE_VERSION\" \033[0m"
echo " Existing:"
echo "  $PLATFORM : $TEMPLATE : $OPTION -> \033[1;32m$RELEASE_VERSION \033[0m"
echo ""
echo ""