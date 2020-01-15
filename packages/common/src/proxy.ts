let createProxy = eval(`
    function(handle){ return new JSAdapter(handle) }
`)
export interface ProxyHandle {
    get: (target: any, name: string) => any
    set: (target: any, name: string, value: any) => void
    construct: (target: any, ...args: any[]) => any
    has: (target: any, name: string) => boolean
    ownKeys: (target: any) => string[]
    values: (target: any) => any[];
    call: (target: any, name: string, ...args: any[]) => any
    delete: (target: any, name: string) => boolean
}
export class Proxy {
    static newProxy(target: any, handle: Partial<ProxyHandle>) {
        return createProxy({
            __get__: (name: string) => handle.get ? handle.get(target, name) : target[name],
            __put__: (name: string, value: any) => handle.set ? handle.set(target, name, value) : target[name] = value,
            __call__: (name: string, ...args: any) => handle.call ? handle.call(target, name, ...args) : target[name](...args),
            __new__: (...args: any) => handle.construct ? handle.construct(target, ...args) : new target(...args),
            __getIds__: () => handle.ownKeys ? handle.ownKeys(target) : Object.keys(target),
            __getValues__: () => handle.values ? handle.values(target) : Object.values(target),
            __has__: (name: string) => handle.has ? handle.has(target, name) : Object.getOwnPropertyDescriptor(target, name) != undefined,
            __delete__: (name: string) => handle.delete ? handle.delete(target, name) : delete target[name]
        })
    }
}
