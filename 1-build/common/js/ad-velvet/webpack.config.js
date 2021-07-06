const path = require('path')
const UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const IndexPlugin = require('@ff0000-ad-tech/wp-plugin-index')
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

const dirs = DM.aliases.getTopLevel(path.resolve(__dirname, 'node_modules/@ff0000-ad-tech'))
module.exports = config => {
	const isDebug = config.environment == 'debug'
	const removeConsole = !isDebug
	console.log('config:', config, '| isDebug:', isDebug, '| removeConsole:', removeConsole)

	return {
		entry: path.resolve(__dirname, 'index.js'),
		output: {
			path: path.resolve(__dirname, 'bundles'),
			filename: 'Velvet.' + config.environment + '.js',
			library: 'Velvet',
			// allows named imports from globally available ad package
			libraryTarget: 'umd'
		},
		resolve: {
			alias: dirs
		},

		externals: {
			// object values in externals object MUST be valid variable name.
			// This will scope any export to the module, but since ad-date is re-assigned to window during
			// dist process, set external scope to window to maintain that
			'ad-dates': 'window'
		},

		plugins: [
			new UglifyJsPlugin({
				compress: {
					drop_console: removeConsole,
					warnings: removeConsole
				}
			}),
			// new HtmlWebpackPlugin(), // TODO: pass in a template with sample code
			new IndexPlugin(null, {
				source: {
					path: `./tmpl/velvet-enabler.js`
				},
				inject: {
					'ad-dates': path.resolve(
						__dirname,
						'node_modules/@ff0000-ad-tech/ad-dates/dist/ad-dates.' + config.environment + '.js'
					),
					Velvet: './bundles/Velvet.' + config.environment + '.js'
				},
				output: {
					path: './dist/velvet-enabler' + (isDebug ? '.debug' : '') + '.js'
				}
			})
		],
		module: {
			rules: [
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
				},
				{
					test: request => {
						// console.log('test()', request.includes('ad-velvet'), request.endsWith('index.js'), '|', request.split('1-build')[1])
						return request.includes('ad-velvet') && request.endsWith('index.js')
					},
					use: [
						{
							loader: '@ff0000-ad-tech/webpack-rollup-babel-loader',
							options: {
								babelOptions: {
									presets: babelOptions.presets
								},
								// basically a copy of Webpack externals
								globals: {
									'ad-dates': 'window' //'adDates'
								},
								// here, list package names for Rollup to assume have already been loaded externally
								external: ['ad-dates']
							}
						}
					]
				}
			]
		}
	}
}
