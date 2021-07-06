/* -- GLOBAL UTILITIES --------------------------------------------
	*
	*		These methods are tightly coupled to FAT index:
	*			- window.environments
	*			- window.adParams		
	*
	*/
export function getDeployProfile(id) {
	// console.log('ad-global > getDeployProfile()')
	for (var i = 0; i < environments.length; i++) {
		if (environments[i].id === id) return environments[i]
	}
	return false
}

export function getQueryParams() {
	// console.log('ad-global > getQueryParams()')
	var queryParams = {}
	var query = window.location.href.split('?')
	if (query.length > 1) {
		var params = query[1].split('&')
		for (var i in params) {
			var keyValue = params[i].split('=')
			if (keyValue.length == 2) queryParams[keyValue[0]] = decodeURIComponent(keyValue[1])
		}
	}
	return queryParams
}

export function matchProtocolTo(_url) {
	// console.log('ad-global > matchProtocolTo()')
	var noProtocol = _url.search(/^\/\//) > -1
	if (_url.search(/^http/) > -1 || noProtocol) {
		var _secure = window.location.href.search(/^https/) > -1 || (window.adParams && adParams.forceHttps)
		var _httpProtocol = _secure ? 'https://' : 'http://'
		if (noProtocol) {
			_url = _url.replace(/^\/\//, _httpProtocol)
		}
		if (_url.search(/.*edgecastcdn/) > -1) {
			var _edgecastContext = _secure ? 'ne1.' + _url.match(/w(a|p)c/i)[0] + '.' : _url.match(/w(a|p)c\.[a-z0-9]*\./i)[0]
			_url = _httpProtocol + _edgecastContext + 'edgecastcdn' + _url.replace(/.*edgecastcdn/, '')
		} else if (_url.search(/.*paramount\.com/) > -1) {
			var _paramountContext = _secure ? 'paramountdlds-a.akamaihd.net' : 'downloads.paramount.com'
			_url = _httpProtocol + _paramountContext + _url.replace(/.*paramount\.com/, '')
		} else if (_url.search(/espn\.go\.com/) > -1 || _url.search(/secure\.espncdn\.com/) > -1) {
			_url = 'https://secure.espncdn.com' + _url.replace(/^.*\.com/, '')
		} else {
			_url = _url.replace(/^https?\:\/\//i, _httpProtocol)
		}
	}
	return _url
}

// check version against
export function isVersionOrNewer(version) {
	// console.log('ad-global > isVersionOrNewer()')
	const semver = version.split('.').map(function(v) {
		return parseInt(v)
	})
	if (adParams.version.major > semver[0]) {
		return true
	} else if (adParams.version.major === semver[0]) {
		if (adParams.version.minor > semver[1]) {
			return true
		} else if (adParams.version.minor > semver[1]) {
			if (adParams.version.patch >= semver[2]) {
				return true
			}
		}
	}
	return false
}
