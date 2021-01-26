/**
 * NOTE:
 * 		This is a proxy to:
 * 		@ff0000-ad-tech/wp-deploy-manager/webpack-config.js
 *
 * This provides visibility & flexibility as to where the full webpack-config.js lives,
 * whether installed as a template dependency or running externally.
 *
 * A similar one lives at the top of the @ff0000-ad-tech/wp-deploy-manager.
 */
const wp = require('./node_modules/@ff0000-ad-tech/wp-deploy-manager/webpack-config.js')

module.exports = (config) => {
	return wp.execute(config)
}
