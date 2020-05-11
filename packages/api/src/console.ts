import i18m from '@ccms/i18n'
import { SourceMapBuilder } from 'source-map-builder'
import * as base64 from 'base64-js'

const Arrays = Java.type('java.util.Arrays');
const Level = Java.type('java.util.logging.Level');
const Paths = Java.type('java.nio.file.Paths');
const ignoreLogPrefix = ['java.', 'net.minecraft.', 'org.bukkit.', 'jdk.nashorn.', 'io.netty.', 'org.spongepowered.'];

enum LogLevel {
    ALL,
    TRACE,
    DEBUG,
    INFO,
    WARN,
    ERROR,
    FATAL,
    OFF
}

export class MiaoScriptConsole implements Console {
    Console: NodeJS.ConsoleConstructor;

    private sourceMaps: { [key: string]: SourceMapBuilder } = {};
    private sourceFileMaps: { [key: string]: string } = {};
    private _name: string = '';
    private _level: LogLevel = LogLevel.INFO;

    protected logger: any;
    protected prefix: string = '§6[§bMiaoScript§6]§r ';

    constructor(name?: string) {
        this.name = name;
        this.logger = global.logger;
        if (global.debug) {
            this._level = LogLevel.DEBUG
        }
        if (global.level?.toUpperCase() === "TRACE") {
            this._level = LogLevel.TRACE
        }
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
    log(...args: any[]): void {
        this.logger.info(this.name + args.join(' '));
    }
    info(...args: any[]) {
        this.logger.info(this.name + args.join(' '));
    }
    warn(...args: any[]) {
        this.logger.warning(this.name + args.join(' '));
    }
    error(...args: any[]) {
        this.logger.log(Level.SEVERE, this.name + args.join(' '));
    }
    debug(...args: any[]) {
        if (global.debug) {
            this.logger.info(this.name + '[DEBUG] ' + args.join(' '));
        }
    }
    trace(...args: any[]): void {
        if (this._level <= LogLevel.TRACE) {
            this.logger.info(this.name + '[TRACE] ' + args.join(' '));
        }
    }
    sender(...args) {
        this.info(args)
    }
    console(...args) {
        this.info(args)
    }
    i18n(name: string, param?: { [key: string]: any }) {
        this.console(i18m.translate(name, param))
    }
    object(obj) {
        for (const i in obj) {
            this.info(i, '=>', obj[i])
        }
    }
    ex(ex: Error) {
        this.stack(ex).forEach(line => this.console(line))
    }
    readSourceMap(fileName: string, lineNumber: number) {
        try {
            if (fileName.endsWith('js')) {
                if (this.sourceMaps[fileName] === undefined) {
                    this.sourceMaps[fileName] = null
                    let sourceLine = base.read(fileName).split('\n');
                    let lastLine = sourceLine[sourceLine.length - 1]
                    if (lastLine.startsWith('//# sourceMappingURL=')) {
                        let sourceContent = null;
                        let sourceMappingURL = lastLine.split('sourceMappingURL=', 2)[1];
                        if (sourceMappingURL.startsWith('data:application/json;base64,')) {
                            sourceContent = String.fromCharCode(...Array.from(base64.toByteArray(sourceMappingURL.split(',', 2)[1])))
                        } else if (sourceMappingURL.startsWith('http')) {
                            // TODO
                        } else {
                            let file = Paths.get(Paths.get(fileName, '..', sourceMappingURL).toFile().getCanonicalPath()).toFile();
                            if (file.exists()) { sourceContent = base.read(file) }
                        }
                        if (sourceContent) {
                            this.sourceMaps[fileName] = new SourceMapBuilder(JSON.parse(sourceContent))
                            this.sourceFileMaps[fileName] = Paths.get(fileName, '..', this.sourceMaps[fileName].sources[0]).toFile().getCanonicalPath();
                        }
                    }
                }
                if (this.sourceMaps[fileName]) {
                    let sourceMapping = this.sourceMaps[fileName].getSource(lineNumber, 25, true, true);
                    fileName = this.sourceFileMaps[fileName]
                    if (sourceMapping && lineNumber != sourceMapping.mapping.sourceLine) { lineNumber = sourceMapping.mapping.sourceLine; }
                }
            }
        } catch (error) {
            console.debug('search source map', fileName, 'line', lineNumber, 'error:', error)
        }
        return {
            fileName,
            lineNumber
        }
    }
    stack(ex: Error): string[] {
        let stack = ex.getStackTrace();
        let cache = ['§c' + ex];
        //@ts-ignore
        if (stack.class) {
            stack = Arrays.asList(stack)
        }
        stack.forEach(trace => {
            if (!trace.fileName || trace.fileName.startsWith('jar:file:')) { return }
            if (trace.className.startsWith('<')) {
                let { fileName, lineNumber } = this.readSourceMap(trace.fileName, trace.lineNumber)
                if (fileName.startsWith(root)) { fileName = fileName.split(root)[1] }
                cache.push(`    §e->§c ${fileName} => §4${trace.methodName}:${lineNumber}`)
            } else {
                let className = trace.className;
                var fileName = trace.fileName as string;
                if (className.startsWith('jdk.nashorn.internal.scripts')) {
                    className = className.substr(className.lastIndexOf('$') + 1)
                    var { fileName, lineNumber } = this.readSourceMap(trace.fileName, trace.lineNumber)
                    if (fileName.startsWith(root)) { fileName = fileName.split(root)[1] }
                } else {
                    for (let prefix in ignoreLogPrefix) {
                        if (className.startsWith(ignoreLogPrefix[prefix])) {
                            return;
                        }
                    }
                }
                cache.push(`    §e->§c ${className}.${trace.methodName}(§4${fileName}:${lineNumber}§c)`);
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
