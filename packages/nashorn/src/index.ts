declare global {
    const __FILE__: string
    const __LINE__: number
    const __DIR__: string
    const Packages: any

    function print(...message: any[]): void
    function load(script: string | object)
    function loadWithNewGlobal(script: string | object)
    function exit(code?: number)
    function quit(code?: number)
    function JavaImporter(...className: string[])

    namespace Java {
        function type<T = any>(clazz: string): T
        function from<T = any>(javaObj: T[]): T[]
        function to<T = any>(array: T[], type?: T): T[]
        function extend(...parentTypes: any[]): any
        function synchronized(func: () => void, lock: any): Function
        function isJavaObject(obj: any): boolean
        function asJSONCompatible<T = any>(obj: T): T
        //@ts-ignore
        // function super(type: any);
    }

    interface Error {
        readonly class?: any
        readonly lineNumber?: number
        readonly columnNumber?: number
        readonly fileName?: string
        dumpStack?: Function
        printStackTrace?: Function
        getStackTrace?: () => any[]
    }

    interface String {
        trimLeft(): string
        trimRight(): string
    }

    interface Object {
        setPrototypeOf(obj: object, prototype: object): void
        bindProperties(to: object, from: object): void
    }

    namespace NodeJS {
        interface Global {
            scope: string
            logger: any
            debug: boolean
            /**
             * 引擎日志等级
             */
            ScriptEngineLoggerLevel: string
            /**
             * 引擎配置
             */
            ScriptEngineConfig: any
            /**
             * 引擎版本
             */
            ScriptEngineVersion: string
            /**
             * 引擎渠道
             */
            ScriptEngineChannel: string
            /**
             * 慢执行检测时间
             */
            ScriptSlowExecuteTime: number
            ScriptEngineStartTime: number
            /**
             * 设置全局对象
             * @param key 对象名称
             * @param value 对象值
             * @param config 对象属性
             * @returns
             */
            setGlobal: (key: string, value: any, config?: PropertyDescriptor & ThisType<any>) => void
            noop: () => void
            console: Console
        }
        interface Process {
            on(event: string, listener: any): this
            emit(event: string, ...message: any): this
        }
    }
    const root: string
    const base: Core
    const ScriptEngineContextHolder: any
    function engineLoad(str: string | { script: string, name: string }): any
    interface Core {
        version: string
        getClass(name: String): any
        getProxyClass(): any
        getJavaScriptTaskClass(): any
        getInstance(): any
        loadMavenDepend(groupId: string, artifactId: string, version: string): [any, any]
        read(path: string): string
        save(path: string, content: string): void
        delete(path: string): void
    }
    interface Console {
        prefix: string
        ex(err: Error): void
        stack(err: Error, color?: boolean): string[]
        sender(sender: any, ...args: any): void
        sender(...args: any): void
        console(...args: any): void
        i18n(name: string, ...params: any[]): void
    }
    interface ProxyConstructor {
        newProxy<T extends object>(target: T, handler: ProxyHandle<T>): T
    }
}
export interface ProxyHandle<T = any> extends ProxyHandler<any> {
    setPrototypeOf?(target: T, v: any): any
    // get: (target: any, name: string) => any
    // set: (target: any, name: string, value: any) => boolean
    // construct: (target: any, ...args: any[]) => any
    // has: (target: any, name: string) => boolean
    // ownKeys: (target: any) => string[]
    values?: (target: T) => any[]
    // call: (target: any, name: string, ...args: any[]) => any
    // deleteProperty: (target: any, name: string) => boolean
}
export { }
