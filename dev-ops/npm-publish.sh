cd ..

# ensure branch build-source version is package version
node ./dev-ops/version-sync.js --package ../package.json --bsToPkg

# prompt next version
npx bump package.json

# propagate next version back to build-source :o
node ./dev-ops/version-sync.js --package ../package.json

# get release version & name
RELEASE_VERSION=`node -pe "require('./package.json').version"`
PKG_NAME=`node -pe "require('./package.json').name"`

# update package name
BRANCH=`git rev-parse --abbrev-ref HEAD`
node ./dev-ops/set-package-name.js --package ../package.json --branch $BRANCH --version $RELEASE_VERSION

# commit updates to package
git add package.json
git commit -m 'updates build-source info'
git push

# prompt next version and publish to npm
echo Publishing to NPM
np $RELEASE_VERSION --any-branch --no-release-draft

# note
echo
echo "Done.\033[1;31m Be sure to update BSA's version reference! \033[0m"
echo " https://github.com/ff0000-tech/build-source-assembler/blob/master/package.json"
echo "  \"buildSources\": {"
echo "    ..."
echo "    \033[1;32m\"$PKG_NAME\": \"$RELEASE_VERSION\" \033[0m"
echo "    ..."
echo "  }"