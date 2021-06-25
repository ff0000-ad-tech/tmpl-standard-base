import { DpsManager } from '@ff0000-ad-tech/ad-dps'

import './bg.jpg'

const feeds = JSON.parse(
	'[{"label":"main","ssid":"1Iq_O9EoKeiweBgFyB-wv71OkRG7JbCO9Ngvviw2SWVk","sid":"0","rid":"58be0a35-4ba0-46a1-96c8-e22744fef08d","data":{"Group":"HTML","Label":"300x250","ID":"58be0a35-4ba0-46a1-96c8-e22744fef08d","bg":{"Sources":{"rubber_duck_la.jpg":"http://localhost:10200/dps/asset/1Iq_O9EoKeiweBgFyB-wv71OkRG7JbCO9Ngvviw2SWVk/60d115daacbd45eec8a44e94/rubber_duck_la.jpg"}},"cta":"FLOAT NOW"}}]'
)
DpsManager.setInlineFeeds(feeds)
