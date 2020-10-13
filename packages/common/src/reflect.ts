/// <reference types="@javatypes/jdk" />

const JavaClass = Java.type('java.lang.Class')
const JavaObject = Java.type('java.lang.Object')
const NoSuchFieldException = Java.type('java.lang.NoSuchFieldException')
const fieldCache = new Map<string, java.lang.reflect.Field>()
const methodCache = new Map<string, java.lang.reflect.Method>()

/**
 * 反射工具类
 * Created by MiaoWoo on 2017/2/9 0009.
 */
class Reflect {
    private obj: java.lang.Object
    private class: java.lang.Class<any>

    constructor(obj: any) {
        // if (obj === undefined || obj === null) { throw Error(`reflect object can't be ${obj}!`) }
        if (obj instanceof JavaClass) {
            this.obj = null
            this.class = obj
        } else {
            this.obj = obj
            if (obj !== null && obj !== undefined && obj.class) {
                this.class = obj.class
            }
        }
    }

    method(name: string, ...args: java.lang.Class<any>[]) {
        return declaredMethod(this.class, name, ...args)
    }

    methods() {
        return Java.from(declaredMethods(this.class))
    }

    field(nameOrIndex: string | java.lang.String | number, declared = false): java.lang.reflect.Field {
        if (nameOrIndex == undefined || nameOrIndex == null) throw new Error(`reflect field name can't be ${nameOrIndex} from ${this.class.getName()}!`)
        let key = this.class.getName() + ':' + nameOrIndex + ':' + declared
        if (fieldCache.has(key)) {
            return fieldCache.get(key)
        }
        let field = null
        if (typeof nameOrIndex == "number") {
            field = this.fields(declared)[nameOrIndex]
        } else {
            try {
                // Try getting a public field
                field = this.class.getField(nameOrIndex)
            } catch (ex) {
                // Try again, getting a non-public field
                field = declaredField(this.class, nameOrIndex)
            }
        }
        if (!field) throw new Error(`can't reflect field ${typeof nameOrIndex == "number" ? 'index' : 'name'} ${nameOrIndex} from ${this.class.getName()}!`)
        return accessible(field)
    }

    fields(declared = false): java.lang.reflect.Field[] {
        return Java.from(declared ? this.class.getDeclaredFields() : this.class.getFields())
    }

    values(declared = false) {
        return this.fields(declared).reduce((cache, field) => { return cache[field.getName()] = this.get(field.getName()).get() }, {}) as any
    }

    call(...args: any[]): Reflect {
        let params = args.slice(1)
        let method = accessible(declaredMethod(this.class, args[0], ...types(params)))
        let result = method.invoke(this.get(), params)
        return result && on(result)
    }

    get(): any
    get(index: number, declared?: boolean): Reflect
    get(prop: string): Reflect
    get(param?: string | number, declared: boolean = true): Reflect | any {
        if (arguments.length === 0) return this.obj
        return on(this.field(param, declared).get(this.obj))
    }

    set(param: string | number, value: any, declared: boolean = true): Reflect {
        this.field(param, declared).set(this.obj, value)
        return this
    }

    create(...args): Reflect {
        return on(declaredConstructor(this.class, args).newInstance(args))
    }
}

/**
 * Get an array of types for an array of objects
 */
function types(values: any[], def?: any) {
    if (values === null) {
        return []
    }
    let result: java.lang.Class<any>[] = []
    values.forEach(t => result.push((t || def) ? JavaObject.class : t instanceof JavaClass ? t : t.class))
    return result
}

function accessible<T extends java.lang.reflect.AccessibleObject>(accessible: T): T {
    if (!accessible?.isAccessible()) {
        accessible.setAccessible(true)
    }
    return accessible
}

function declaredConstructor(clazz, param) {
    let constructor
    try {
        constructor = clazz.getDeclaredConstructor(types(param))
    } catch (ex) {
        try {
            constructor = clazz.getDeclaredConstructor(types(param, true))
        } catch (ex) {
            constructor = clazz.getDeclaredConstructors()[0]
        }
    }
    return accessible(constructor)
}

function declaredField(clazz: java.lang.Class<any>, name: string | java.lang.String) {
    if (!clazz) { throw Error(`target class can't be ${clazz}!`) }
    let target = clazz
    let field = null
    // noinspection JSUnresolvedVariable
    while (target !== JavaObject.class) {
        try {
            field = target.getDeclaredField(name)
            if (field !== null) { break }
        } catch (e) {
            if (target === undefined) { break }
            target = target.getSuperclass()
        }
    }
    if (field === null) {
        throw new NoSuchFieldException(name + " is not found in " + clazz.getName())
    }
    return field
}

function declaredMethod(clazz: java.lang.Class<any>, nameOrIndex: string | number, ...clazzs: java.lang.Class<any>[]): java.lang.reflect.Method {
    let key = clazz.getName() + '.' + nameOrIndex + ':' + (clazzs || []).map(c => c.getName()).join(':')
    if (methodCache.has(key)) { return methodCache.get(key) }
    if (typeof nameOrIndex === "number") {
        methodCache.set(key, declaredMethods(clazz)[nameOrIndex])
    } else {
        try {
            methodCache.set(key, clazz.getMethod(nameOrIndex, clazzs as any))
        } catch (ex) {
            try {
                methodCache.set(key, clazz.getDeclaredMethod(nameOrIndex, clazzs as any))
            } catch (ex) {
                for (const m of Java.from(declaredMethods(clazz))) {
                    if (m.getName() == nameOrIndex) {
                        methodCache.set(key, m)
                        break
                    }
                }
            }
        }
    }
    if (!methodCache.has(key)) throw new Error(`can't reflect method ${typeof nameOrIndex == "number" ? 'index' : 'name'} ${nameOrIndex} from ${clazz.getName()}!`)
    return methodCache.get(key)
}

function declaredMethods(clazz: java.lang.Class<any>) {
    return clazz.getDeclaredMethods()
}

function mapToObject(javaObj) {
    if (!Java.isJavaObject(javaObj)) { throw new TypeError(`参数 ${javaObj} 不是一个Java对象!`) }
    let target = Proxy.newProxy(javaObj, {
        apply: (target, name, args) => { return args ? javaObj[name](args) : javaObj[name]() }
    })
    return target
}

function on(obj) {
    // if (!obj || !obj.class) { throw new TypeError(`参数 ${obj} 不是一个Java对象!`) }
    return new Reflect(obj)
}

export = {
    on,
    accessible,
    declaredMethods,
    mapToObject
}
