/// <reference types="@ccms/nashorn" />

import i18n from '@ccms/i18n'
let ployfillStartTime = new Date().getTime()
i18n.initialize()
console.i18n("ms.ployfill.initialize")
require('./es5-ext')
require('./node-shim')
require('core-js')
//@ts-ignore
process.on('exit', () => require.disable())
global.setGlobal('Proxy', require('./proxy').Proxy)
global.setGlobal('XMLHttpRequest', require('./xml-http-request').XMLHttpRequest)
global.setGlobal('Blob', require('blob-polyfill').Blob)
console.i18n("ms.ployfill.completed", { time: (new Date().getTime() - ployfillStartTime) / 1000 })
