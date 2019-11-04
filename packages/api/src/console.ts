let Arrays = Java.type('java.util.Arrays');
let Level = Java.type('java.util.logging.Level');
let ignoreLogPrefix = ['java.', 'net.minecraft.', 'org.bukkit.', 'jdk.nashorn.', 'io.netty.'];

export class MiaoScriptConsole implements Console {
    Console: NodeJS.ConsoleConstructor;

    private _name: string = '';

    protected logger: any;
    protected prefix: string = '§6[§bMiaoScript§6]§r ';

    constructor(name?: string) {
        this.name = name;
        this.logger = global.logger;
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        if (name) {
            this._name = `[${name}] `;
            // noinspection JSUnusedGlobalSymbols
            this.prefix = `§6[§cMS§6][§b${name}§6]§r `;
        }
    }
    log(...args): void {
        this.logger.info(this.name + args.join(' '));
    }
    info(...args) {
        this.logger.info(this.name + args.join(' '));
    };
    warn(...args) {
        this.logger.warning(this.name + args.join(' '));
    };
    error(...args) {
        this.logger.log(Level.SEVERE, this.name + args.join(' '));
    };
    debug(...args) {
        if (global.debug) {
            this.logger.info(this.name + '[DEBUG] ' + args.join(' '));
        }
    };
    sender(...args) {
        this.info(args)
    }
    console(...args) {
        this.info(args)
    }
    object(obj) {
        for (var i in obj) {
            this.logger(i, '=>', obj[i])
        }
    };
    ex(ex: Error) {
        this.stack(ex).forEach(line => this.console(line))
    };
    stack(ex: Error): string[] {
        var stack = ex.getStackTrace();
        var cache = ['§4' + ex];
        //@ts-ignore
        if (stack.class) {
            stack = Arrays.asList(stack)
        }
        stack.forEach(function(trace) {
            if (trace.className.startsWith('<')) {
                var fileName = trace.fileName
                if (fileName.startsWith(root)) { fileName = fileName.split(root)[1] }
                cache.push(`    §e->§c ${fileName} => §4${trace.methodName}:${trace.lineNumber}`)
            } else {
                var className = trace.className;
                var fileName = trace.fileName
                if (className.startsWith('jdk.nashorn.internal.scripts')) {
                    className = className.substr(className.lastIndexOf('$') + 1)
                    if (fileName.startsWith(root)) { fileName = fileName.split(root)[1] }
                } else {
                    for (var prefix in ignoreLogPrefix) {
                        if (className.startsWith(ignoreLogPrefix[prefix])) {
                            return;
                        }
                    }
                }
                cache.push(`    §e->§c ${className}.${trace.methodName}(§4${fileName}:${trace.lineNumber}§c)`);
            }
        });
        return cache;
    }
    assert(value: any, message?: string, ...optionalParams: any[]): void {
        throw new Error("Method not implemented.");
    }
    clear(): void {
        throw new Error("Method not implemented.");
    }
    count(label?: string): void {
        throw new Error("Method not implemented.");
    }
    countReset(label?: string): void {
        throw new Error("Method not implemented.");
    }
    dir(obj: any, options?: NodeJS.InspectOptions): void {
        throw new Error("Method not implemented.");
    }
    dirxml(...data: any[]): void {
        throw new Error("Method not implemented.");
    }
    group(...label: any[]): void {
        throw new Error("Method not implemented.");
    }
    groupCollapsed(...label: any[]): void {
        throw new Error("Method not implemented.");
    }
    groupEnd(): void {
        throw new Error("Method not implemented.");
    }
    table(tabularData: any, properties?: string[]): void {
        throw new Error("Method not implemented.");
    }
    time(label?: string): void {
        throw new Error("Method not implemented.");
    }
    timeEnd(label?: string): void {
        throw new Error("Method not implemented.");
    }
    timeLog(label?: string, ...data: any[]): void {
        throw new Error("Method not implemented.");
    }
    trace(message?: any, ...optionalParams: any[]): void {
        throw new Error("Method not implemented.");
    }
    markTimeline(label?: string): void {
        throw new Error("Method not implemented.");
    }
    profile(label?: string): void {
        throw new Error("Method not implemented.");
    }
    profileEnd(label?: string): void {
        throw new Error("Method not implemented.");
    }
    timeStamp(label?: string): void {
        throw new Error("Method not implemented.");
    }
    timeline(label?: string): void {
        throw new Error("Method not implemented.");
    }
    timelineEnd(label?: string): void {
        throw new Error("Method not implemented.");
    }
}
