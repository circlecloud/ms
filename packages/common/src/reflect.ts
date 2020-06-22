/// <reference types="@javatypes/jdk" />

/**
 * 反射工具类
 * Created by MiaoWoo on 2017/2/9 0009.
 */
const JavaClass = Java.type('java.lang.Class')
const JavaObject = Java.type('java.lang.Object')
const NoSuchFieldException = Java.type('java.lang.NoSuchFieldException')
const methodCache = []

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

    field(name: string | java.lang.String): Reflect {
        try {
            // Try getting a public field
            let field = this.class.getField(name)
            return on(field.get(this.obj))
        } catch (ex) {
            // Try again, getting a non-public field
            return on(accessible(declaredField(this.class, name)).get(this.obj))
        }
    }

    fields(declared = false): java.lang.reflect.Field[] {
        return Java.from(declared ? this.class.getDeclaredFields() : this.class.getFields())
    }

    values(declared = false) {
        return this.fields(declared).reduce((cache, field) => { return cache[field.getName()] = this.field(field.getName()).get() }, {}) as any
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
        if (param == undefined || param == null) return this.obj
        if (typeof param == "number") {
            return on(accessible(this.fields(declared)[param]).get(this.obj))
        }
        if (typeof param == "string") {
            return this.field(param)
        }
    }

    set(name: any, value: any): Reflect {
        accessible(declaredField(this.class, name)).set(this.obj, value)
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
    if (accessible === null) {
        return null
    }
    if (!accessible.isAccessible()) {
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

function declaredMethod(clazz: java.lang.Class<any>, name: string, ...clazzs: java.lang.Class<any>[]): java.lang.reflect.Method {
    let key = clazz.getName() + '.' + name + ':' + (clazzs || []).join(':')
    if (!methodCache[key]) {
        try {
            methodCache[key] = clazz.getMethod(name, ...clazzs)
        } catch (ex) {
            try {
                methodCache[key] = clazz.getDeclaredMethod(name, clazzs as any)
            } catch (ex) {
                for (const m of Java.from(declaredMethods(clazz))) {
                    if (m.getName() == name) {
                        methodCache[key] = m
                        break
                    }
                }
            }
        }
    }
    return methodCache[key]
}

function declaredMethods(clazz: java.lang.Class<any>) {
    return clazz.getDeclaredMethods()
}

let classMethodsCache: any[] = []

function mapToObject(javaObj) {
    if (!javaObj || !javaObj.class) { throw new TypeError(`参数 ${javaObj} 不是一个Java对象!`) }
    let target = {}
    getJavaObjectMethods(javaObj).forEach(t => mapMethod(target, javaObj, t))
    return target
}

function getJavaObjectMethods(javaObj) {
    let className = javaObj.class.name
    if (!classMethodsCache[className]) {
        let names: any[] = []
        let methods = javaObj.class.methods
        for (let i in methods) {
            names.push(methods[i].name)
        }
        classMethodsCache[className] = names
    }
    return classMethodsCache[className]
}

function mapMethod(target, source, name) {
    target[name] = function __SimpleDynamicMethod__(...args) {
        if (args.length > 0) {
            return source[name](args)
        } else {
            return source[name]()
        }
    }
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
