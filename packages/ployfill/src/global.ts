import { XMLHttpRequest as xhr } from './xml-http-request'
declare global {
    namespace NodeJS {
        interface Global {
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
    var XMLHttpRequest: typeof xhr;
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
    }
}
export { }