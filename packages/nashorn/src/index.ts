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
            level: string
            ScriptEngineVersion: string
            ScriptEngineStartTime: number
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
        getClass(name: String): any
        getProxyClass(): any
        getInstance(): any
        read(path: string): string
        save(path: string, content: string): void
        delete(path: string): void
    }
    interface Console {
        ex(err: Error): void
        stack(err: Error, color?: boolean): string[]
        sender(sender: any, ...args: any): void
        sender(...args: any): void
        console(...args: any): void
        i18n(name: string, ...params: any[]): void
    }
    interface ProxyConstructor {
        newProxy<T extends object>(target: T, handler: ProxyHandler<T>): T
    }
}

export { }
