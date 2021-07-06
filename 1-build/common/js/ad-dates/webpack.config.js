const path = require('path')
const UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin
const log = require('@ff0000-ad-tech/debug').debug('webpack.config.js')

const DM = require('@ff0000-ad-tech/wp-deploy-manager')

// prettier-ignore
const babelOptions = {
	"presets": [
		[
			"env",
			{
				"loose": true,
				"modules":false
			}
		]
	],
	"plugins": [ "transform-class-properties" ]
}

module.exports = config => {
	// if (config) {
	// 	config = JSON.parse(config)
	// } else {
	// 	config = {}
	// }

	const isDebug = config.environment == 'debug'
	const removeConsole = !isDebug
	console.log('config:', config, '| isDebug:', isDebug, '| removeConsole:', removeConsole)

	return {
		entry: path.resolve(__dirname, `./dist-entry.js`),
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'ad-dates.' + config.environment + '.js'
			// libraryTarget: 'umd'
		},
		resolve: {
			alias: DM.aliases.getTopLevel(path.resolve(__dirname, 'node_modules/@ff0000-ad-tech'))
		},
		plugins: [
			new UglifyJsPlugin({
				compress: {
					drop_console: removeConsole,
					warnings: removeConsole
				}
			})
		],
		module: {
			rules: [
				{
					test: request => {
						log('test()', request.includes('ad-dates'), request.endsWith('index.js'), '|', request)
						return request.includes('ad-dates') && request.endsWith('index.js')
					},
					use: [
						{
							loader: '@ff0000-ad-tech/webpack-rollup-babel-loader',
							options: {
								babelOptions: {
									presets: babelOptions.presets
								}
							}
						}
					]
				},
				{
					test: /\.js$/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								plugins: babelOptions.plugins
							}
						}
					]
				}
			]
		}
	}
}
