const path = require('path')
const UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin
const log = require('@ff0000-ad-tech/debug').debug('webpack.config.js')

module.exports = env => {
	return {
		entry: path.resolve(__dirname, 'dist-entry.js'),
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'ad-global.inline.js',
			library: 'adGlobal',
			libraryTarget: 'umd'
		},
		plugins: [
			new UglifyJsPlugin({
				uglifyOptions: {
					drop_console: true
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
								presets: ['@babel/preset-env']
							}
						}
					]
				}
			]
		}
	}
}
