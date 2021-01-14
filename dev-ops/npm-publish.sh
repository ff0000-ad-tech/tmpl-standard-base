# update package name
BRANCH=`git rev-parse --abbrev-ref HEAD`
node set-package-name.js --package ../package.json --branch ${BRANCH}
cd ..
git add package.json
git commit -m 'updates build-source info'
git push

# prompt version and publich to npm
echo Publishing to NPM
np --any-branch --no-release-draft

# get release version
PKG_NAME=`node -pe "require('./package.json').name"`
RELEASE_VERSION=`node -pe "require('./package.json').version"`

# note
echo
echo "Done.\033[1;31m Be sure to update BSA's version reference! \033[0m"
echo " https://github.com/ff0000-tech/build-source-assembler/blob/master/package.json"
echo "  \"buildSources\": {"
echo "    ..."
echo "    \033[1;32m\"$PKG_NAME\": \"$RELEASE_VERSION\" \033[0m"
echo "    ..."
echo "  }"