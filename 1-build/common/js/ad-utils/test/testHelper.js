require('babel-core/register')()
require('jsdom-global/register')

// mocking trace
global.trace = function(...args) {
	if (process.env.TRACE) console.log(...args)
}