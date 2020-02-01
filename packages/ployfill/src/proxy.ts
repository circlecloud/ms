let createProxy = eval(`
    function(handle){ return new JSAdapter(handle) }
`)
export interface ProxyHandle extends ProxyHandler<any> {
    // get: (target: any, name: string) => any
    // set: (target: any, name: string, value: any) => boolean
    // construct: (target: any, ...args: any[]) => any
    // has: (target: any, name: string) => boolean
    // ownKeys: (target: any) => string[]
    values: (target: any) => any[];
    // call: (target: any, name: string, ...args: any[]) => any
    // deleteProperty: (target: any, name: string) => boolean
}
export class Proxy {
    static newProxy(target: any, handle: Partial<ProxyHandle>): any {
        return new Proxy(target, handle)
    }
    constructor(target: any, handle: Partial<ProxyHandle>) {
        return createProxy({
            __get__: (name: string) => handle.get ? handle.get(target, name, undefined) : target[name],
            __put__: (name: string, value: any) => handle.set ? handle.set(target, name, value, undefined) : target[name] = value,
            __call__: (name: string, ...args: any) => handle.apply ? handle.apply(target, name, args) : target[name].apply(target, args),
            __new__: (...args: any) => handle.construct ? handle.construct(target, args, target) : new target(...args),
            __getIds__: () => handle.ownKeys ? handle.ownKeys(target) : Object.keys(target),
            __getValues__: () => handle.values ? handle.values(target) : Object.values(target),
            __has__: (name: string) => handle.has ? handle.has(target, name) : Object.getOwnPropertyDescriptor(target, name) != undefined,
            __delete__: (name: string) => handle.deleteProperty ? handle.deleteProperty(target, name) : delete target[name]
        })
    }
}
