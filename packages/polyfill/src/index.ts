/// <reference types="@ccms/nashorn" />
import '@ccms/nodejs'
import i18n from '@ccms/i18n'
let polyfillStartTime = new Date().getTime()
i18n.initialize()
console.i18n("ms.polyfill.initialize")
import './openjdk-nashorn-shim'
import './es5-ext'
import './node-shim'
import './core-js'
//@ts-ignore
process.on('exit', () => require.disable())
global.setGlobal('Proxy', require('./proxy').Proxy)
global.setGlobal('XMLHttpRequest', require('./xml-http-request').XMLHttpRequest)
global.setGlobal('Buffer', require('./buffer').Buffer)
global.setGlobal('Blob', require('blob-polyfill').Blob)
console.i18n("ms.polyfill.completed", { time: (new Date().getTime() - polyfillStartTime) / 1000 })
export default true
