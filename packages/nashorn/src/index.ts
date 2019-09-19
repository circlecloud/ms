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
        trimLeft();
        trimRight();
    }

    interface Object {
        setPrototypeOf(obj: object, prototype: object);
        bindProperties(to: object, from: object);
    }
}

export { };
