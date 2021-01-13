# update package name
node set-package-name.js --package ../package.json

# prompt version and publich to npm
echo Publishing to NPM
cd ..
np --any-branch