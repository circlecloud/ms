import '@ms/core'
/**
 * 反射工具类
 * Created by 蒋天蓓 on 2017/2/9 0009.
 */
var JavaClass = Java.type('java.lang.Class');
var JavaObject = Java.type('java.lang.Object')
var NoSuchFieldException = Java.type('java.lang.NoSuchFieldException');
var methodCache = [];

class Reflect {
    private obj: any;
    private class: any

    constructor(obj: any) {
        if (obj instanceof JavaClass) {
            this.obj = null;
            this.class = obj;
        } else {
            this.obj = obj;
            if (obj !== null && obj !== undefined && obj.class) {
                this.class = obj.class;
            }
        }
    }

    method(...args: any[]) {
        return declaredMethod(this.class, args[0], types(args.slice(1)));
    }

    methods() {
        return Java.from(declaredMethods(this.class));
    }

    field(name): Reflect {
        try {
            // Try getting a public field
            var field = this.class.field(name);
            return on(field.get(this.obj));
        } catch (ex) {
            // Try again, getting a non-public field
            return on(accessible(declaredField(this.class, name)).get(this.obj));
        }
    };

    fields(declared = false) {
        return Java.from(declared ? this.class.declaredFields : this.class.fields);
    }

    values(declared = false) {
        var cache = {};
        this.fields(declared).forEach(fed => cache[fed.name] = this.field(fed.name).get())
        return cache;
    }

    call(...args): Reflect {
        var params = args.slice(1);
        var method = accessible(declaredMethod(this.class, args[0], types(params)));
        let result = method.invoke(this.get(), params);
        return result && on(result);
    };

    get(...args): Reflect | any {
        return args.length === 1 ? this.field(args[0]) : this.obj;
    };

    // noinspection JSUnusedGlobalSymbols
    set(name, value): Reflect {
        accessible(declaredField(this.class, name)).set(this.obj, value);
        return this;
    };

    create(...args): Reflect {
        return on(declaredConstructor(this.class, args).newInstance(args));
    };
}

/**
 * Get an array of types for an array of objects
 */
function types(values, def?) {
    if (values === null) {
        return [];
    }
    var result = [];
    values.forEach(t => result.push((t || def) ? JavaObject.class : t instanceof JavaClass ? t : t.class));
    return result;
}

function accessible(accessible) {
    if (accessible === null) {
        return null;
    }
    if (!accessible.isAccessible()) {
        accessible.setAccessible(true);
    }
    return accessible;
}

function declaredConstructor(clazz, param) {
    var constructor;
    try {
        constructor = clazz.getDeclaredConstructor(types(param));
    } catch (ex) {
        try {
            constructor = clazz.getDeclaredConstructor(types(param, true));
        } catch (ex) {
            constructor = clazz.getDeclaredConstructors()[0];
        }
    }
    return accessible(constructor);
}

function declaredField(clazz, name) {
    var clazzt = clazz;
    var field = null;
    // noinspection JSUnresolvedVariable
    while (clazzt !== JavaObject.class) {
        try {
            field = clazzt.getDeclaredField(name);
            if (field !== null) {
                break;
            }
        } catch (e) {
            clazzt = clazzt.getSuperclass();
        }
    }
    if (field === null) {
        throw new NoSuchFieldException(name + " is not found in " + clazz.name);
    }
    return field;
}

function declaredMethod(clazz, name, clazzs) {
    var key = clazz.name + '.' + name + ':' + (clazzs || []).join(':');
    if (!methodCache[key]) {
        try {
            methodCache[key] = clazz.getMethod(name, clazzs);
        } catch (ex) {
            try {
                methodCache[key] = clazz.getDeclaredMethod(name, clazzs);
            } catch (ex) {
                for (const m of Java.from(declaredMethods(clazz))) {
                    if (m.name == name) {
                        methodCache[key] = m;
                        break;
                    }
                }
            }
        }
    }
    return methodCache[key];
}

function declaredMethods(clazz) {
    return clazz.declaredMethods;
}

var classMethodsCache = [];

function mapToObject(javaObj) {
    if (!javaObj || !javaObj.class) { throw new TypeError(`参数 ${javaObj} 不是一个Java对象!`) }
    var target = {};
    getJavaObjectMethods(javaObj).forEach(t => mapMethod(target, javaObj, t));
    return target;
}

function getJavaObjectMethods(javaObj) {
    var className = javaObj.class.name;
    if (!classMethodsCache[className]) {
        var names = [];
        var methods = javaObj.class.methods;
        for (var i in methods) {
            names.push(methods[i].name);
        }
        classMethodsCache[className] = names;
    }
    return classMethodsCache[className];
}

function mapMethod(target, source, name) {
    target[name] = function __SimpleDynamicMethod__(...args) {
        if (args.length > 0) {
            return source[name](args);
        } else {
            return source[name]();
        }
    };
}

function on(obj) {
    // if (!obj || !obj.class) { throw new TypeError(`参数 ${obj} 不是一个Java对象!`) }
    return new Reflect(obj);
}

export = {
    on,
    accessible,
    declaredMethods,
    mapToObject
};
