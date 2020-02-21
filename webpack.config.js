const wp = require('./node_modules/@ff0000-ad-tech/wp-deploy-manager/webpack.config.js')

module.exports = config => {
	return wp.execute(config, __dirname)
}
