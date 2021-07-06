import * as DM from './lib/data-manager.js'
import * as C from './lib/capture.js'
import * as EC from './lib/event-controller.js'
import * as E from './lib/events.js'
import G from './lib/get.js'
import * as F from './lib/format.js'

export const init = DM.init
export const isPreviewLocation = DM.isPreviewLocation
export const addEventListener = EC.add
export const removeEventListener = EC.remove
export const events = E
export const capture = C
export const get = G
export const convertBreaks = F.convertBreaks
