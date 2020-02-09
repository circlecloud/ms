/// <reference path="./global.ts" />
/// <reference types='@ms/nashorn' />
let ployfillStartTime = new Date().getTime();
console.info('Initialization Java Nashorn ployfill. Please wait...');
require('./es5-ext');
require('core-js');
global.setGlobal('Proxy', require('./proxy').Proxy)
global.setGlobal('XMLHttpRequest', require('./xml-http-request').XMLHttpRequest)
global.setGlobal('Blob', require('blob-polyfill').Blob)
console.info('Java Nashorn ployfill loading completed... Cost (' + (new Date().getTime() - ployfillStartTime) / 1000 + 's)!');
