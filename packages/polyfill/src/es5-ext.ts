// ES2015 String ployfill must force overwrite to js method
Object.defineProperty(String.prototype, 'contains', {
    value: require(`es5-ext/string/#/contains/shim`),
    configurable: true,
    enumerable: false,
    writable: true
})
Object.defineProperty(String.prototype, 'repeat', {
    value: require(`es5-ext/string/#/repeat/shim`),
    configurable: true,
    enumerable: false,
    writable: true
})
Object.defineProperty(String.prototype, 'startsWith', {
    value: require(`es5-ext/string/#/starts-with/shim`),
    configurable: true,
    enumerable: false,
    writable: true
})
Object.defineProperty(String.prototype, 'endsWith', {
    value: require(`es5-ext/string/#/ends-with/shim`),
    configurable: true,
    enumerable: false,
    writable: true
})

