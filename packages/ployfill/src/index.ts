import './global'
import '@ms/nashorn'
import { XMLHttpRequest } from './xml-http-request'

let ployfillStartTime = new Date().getTime();
console.info('Initialization Java Nashorn ployfill. Please wait...');
// String contains ployfill
Object.defineProperty(String.prototype, 'contains', {
    value: function(searchString: string, position: number) {
        return String.prototype.indexOf.call(this, searchString, position) > -1;
    }
})
// ES6 Map Symbol ployfill
require('es6-map/implement');
require('es6-symbol/implement');
global.setGlobal('XMLHttpRequest', XMLHttpRequest)
console.info('Java Nashorn ployfill loading completed... Cost (' + (new Date().getTime() - ployfillStartTime) / 1000 + 's)!');
