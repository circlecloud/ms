import { XMLHttpRequest as xhr } from '@ms/ployfill'

declare global {
    namespace NodeJS {
        interface Global {
            logger: any;
            debug: boolean;
            noop: Function;
            console: Console;
            XMLHttpRequest: typeof xhr;
        }
    }
    var root: string;
    var base: Core;
    var XMLHttpRequest: typeof xhr;
    var ScriptEngineContextHolder: any;
    function engineLoad(str: string): any;
    interface Core {
        getClass(name: String);
    }
    interface Console {
        ex(err: Error): void;
        stack(err: Error): string[];
        sender(...args: any): void;
        console(...args: any): void;
    }
}
export { }
