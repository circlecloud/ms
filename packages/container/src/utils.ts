const INJECTION = Symbol.for("INJECTION")

export function _proxyGetter(
    proto: any,
    key: string,
    resolve: () => any,
    doCache: boolean
) {
    function getter(this: object) {
        if (doCache && !Reflect.hasMetadata(INJECTION, this, key)) {
            Reflect.defineMetadata(INJECTION, resolve(), this, key)
        }
        if (Reflect.hasMetadata(INJECTION, this, key)) {
            return Reflect.getMetadata(INJECTION, this, key)
        } else {
            return resolve()
        }
    }

    function setter(this: object, newVal: any) {
        Reflect.defineMetadata(INJECTION, newVal, this, key)
    }

    Object.defineProperty(proto, key, {
        configurable: true,
        enumerable: true,
        get: getter,
        set: setter
    })
}
