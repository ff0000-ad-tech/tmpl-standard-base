import * as adGlobal from './src/ad-global.js'
;['getDeployProfile', 'getQueryParams', 'matchProtocolTo', 'isVersionOrNewer'].forEach(function(method) {
	window[method] = adGlobal[method]
})
