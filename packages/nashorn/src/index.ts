declare global {
    const __FILE__: string;
    const __LINE__: number;
    const __DIR__: string;
    let Packages: any;

    function print(...message: any[]): void;
    function load(script: string | object);
    function loadWithNewGlobal(script: string | object);
    function exit(code?: number);
    function quit(code?: number);
    function JavaImporter(...className: string[]);

    namespace Java {
        function type(clazz: string): any;
        function from(javaObj: any): any[];
        function to(array: any[]): any;
        function extend(...parentTypes: any[]);
        //@ts-ignore
        // function super(type: any);
    }

    interface Error {
        readonly lineNumber?: number;
        readonly columnNumber?: number;
        readonly fileName?: string;
        dumpStack?: Function;
        printStackTrace?: Function;
        getStackTrace?: () => any[];
    }

    interface String {
        trimLeft(): string;
        trimRight(): string;
    }

    interface Object {
        setPrototypeOf(obj: object, prototype: object): void;
        bindProperties(to: object, from: object): void;
    }

    namespace NodeJS {
        interface Global {
            scope: string;
            logger: any;
            debug: boolean;
            level: string;
            NashornEngineStartTime: number;
            setGlobal: (key: string, value: any) => void;
            noop: () => void;
            console: Console;
        }
    }
    var root: string;
    var base: Core;
    var ScriptEngineContextHolder: any;
    function engineLoad(str: string): any;
    interface Core {
        getClass(name: String): any;
        getProxyClass(): any;
        getInstance(): any;
        read(path: string): string;
        save(path: string, content: string): void;
        delete(path: string): void;
    }
    interface Console {
        ex(err: Error): void;
        stack(err: Error): string[];
        sender(...args: any): void;
        console(...args: any): void;
        i18n(name: string, ...params: any[]): void;
    }
}

export { };
