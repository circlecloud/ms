import i18m from '@ccms/i18n'
import { SourceMapBuilder } from 'source-map-builder'
import * as base64 from 'base64-js'

const Arrays = Java.type('java.util.Arrays')
const Level = Java.type('java.util.logging.Level')
const Paths = Java.type('java.nio.file.Paths')
const ignoreLogPrefix = ['java.', 'javax.', 'sun.', 'net.minecraft.', 'org.bukkit.', 'jdk.internal.dynalink.', 'jdk.nashorn.', 'org.openjdk.nashorn', 'io.netty.', 'org.spongepowered.', 'org.apache', 'org.springframework']

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

const sourceMaps: { [key: string]: SourceMapBuilder } = {}
const sourceFileMaps: { [key: string]: string } = {}

global.setGlobal('MiaoScriptSourceMaps', sourceMaps)
global.setGlobal('MiaoScriptSourceFileMaps', sourceFileMaps)

export namespace jsconsole {
    export function readSourceMap(fileName: string, lineNumber: any) {
        try {
            if (fileName.endsWith('js') || fileName.endsWith('ms')) {
                if (sourceMaps[fileName] === undefined) {
                    sourceMaps[fileName] = null
                    let sourceLine = base.read(fileName).split('\n')
                    let lastLine = sourceLine[sourceLine.length - 1] || sourceLine[sourceLine.length - 2]
                    // lastLine is similar //# sourceMappingURL=data:application/json;base64,
                    if (lastLine.startsWith('//# sourceMappingURL=')) {
                        let sourceContent = null
                        let sourceMappingURL = lastLine.split('sourceMappingURL=', 2)[1]
                        if (sourceMappingURL.startsWith('data:application/json;base64,')) {
                            sourceContent = String.fromCharCode(...Array.from(base64.toByteArray(sourceMappingURL.split(',', 2)[1])))
                        } else if (sourceMappingURL.startsWith('http://') || sourceMappingURL.startsWith('https://')) {
                            // TODO
                        } else {
                            let file = Paths.get(Paths.get(fileName, '..', sourceMappingURL).toFile().getCanonicalPath()).toFile()
                            if (file.exists()) {
                                sourceContent = base.read(file)
                                sourceFileMaps[fileName] = file.getCanonicalPath()
                            } else if (global.debug) {
                                console.debug('readSourceMap can\'t found', fileName, 'source map file', sourceMappingURL)
                            }
                        }
                        if (sourceContent) {
                            sourceMaps[fileName] = new SourceMapBuilder(JSON.parse(sourceContent))
                        }
                    }
                }
                if (sourceMaps[fileName]) {
                    let sourceMapping = sourceMaps[fileName].getSource(lineNumber, 25, true, true)
                    if (sourceMapping) {
                        fileName = Paths.get(fileName, '..', sourceMapping.sourcePath).toFile().getCanonicalPath()
                        lineNumber = sourceMapping.mapping.sourceLine
                    }
                }
            }
        } catch (error: any) {
            console.debug('search source map', fileName, 'line', lineNumber, 'error:', error)
            if (global.debug) {
                console.ex(error)
            }
        }
        return {
            fileName,
            lineNumber
        }
    }

    export function getStackTrace(ex: Error, color: boolean = true): string[] {
        if (!ex) return []
        let stack = ex.getStackTrace()
        let cache = [(color ? '§c' : '') + ex]
        //@ts-ignore
        if (stack.class) {
            stack = Arrays.asList(stack)
        }
        stack.forEach(trace => {
            if (!trace.fileName || trace.fileName.startsWith('jar:file:') || trace.fileName.startsWith('file:')) { return }
            if (trace.className.startsWith('<')) {
                let { fileName, lineNumber } = readSourceMap(trace.fileName, trace.lineNumber)
                if (fileName.startsWith(root)) { fileName = fileName.split(root)[1] }
                if (color) {
                    cache.push(`    §e->§c ${fileName}:${lineNumber}(${trace.lineNumber}) => §4${trace.methodName}`)
                } else {
                    cache.push(`    -> ${fileName}:${lineNumber}(${trace.lineNumber}) => ${trace.methodName}`)
                }
            } else {
                let className = trace.className
                var fileName = trace.fileName as string
                var lineNumber = trace.lineNumber
                if (className.startsWith('jdk.nashorn.internal.scripts') || className.startsWith('org.openjdk.nashorn.internal.scripts')) {
                    className = className.substr(className.lastIndexOf('$') + 1)
                    var { fileName, lineNumber } = readSourceMap(fileName, lineNumber)
                    if (fileName.startsWith(root)) { fileName = fileName.split(root)[1] }
                } else {
                    if (!global.debug) {
                        for (let prefix in ignoreLogPrefix) {
                            if (className.startsWith(ignoreLogPrefix[prefix])) {
                                return
                            }
                        }
                    } else if (className.startsWith('jdk.nashorn.internal.') || className.startsWith('org.openjdk.nashorn.internal.')) {
                        return
                    }
                }
                if (color) {
                    cache.push(`    §e->§c ${className}.${trace.methodName}(§4${fileName}:${lineNumber}§c)`)
                } else {
                    cache.push(`    -> ${className}.${trace.methodName}(${fileName}:${lineNumber})`)
                }
            }
        })
        return cache
    }
}

export class MiaoScriptConsole implements Console {
    Console: any
    memory: any

    private _name: string = ''
    private _level: LogLevel = LogLevel.INFO

    protected logger: any

    public prefix: string = '§6[§bMiaoScript§6]§r '

    constructor(name?: string) {
        this.name = name
        this.logger = global.logger
        if (global.debug) {
            this._level = LogLevel.DEBUG
        }
        if (global.level?.toUpperCase() === "TRACE") {
            this._level = LogLevel.TRACE
        }
    }

    get name() {
        return this._name
    }

    set name(name: string) {
        if (name) {
            this._name = `[${name}] `
            this.prefix = `§6[§cMS§6][§b${name}§6]§r `
        }
    }

    log(...args: any[]): void {
        this.logger.info(this.name + args.join(' '))
    }
    info(...args: any[]) {
        this.logger.info(this.name + args.join(' '))
    }
    warn(...args: any[]) {
        this.logger.warning(this.name + args.join(' '))
    }
    error(...args: any[]) {
        this.logger.log(Level.SEVERE, this.name + args.join(' '))
    }
    debug(...args: any[]) {
        if (global.debug) {
            this.logger.info(this.name + '[DEBUG] ' + args.join(' '))
        }
    }
    trace(...args: any[]): void {
        if (this._level <= LogLevel.TRACE) {
            this.logger.info(this.name + '[TRACE] ' + args.join(' '))
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
    stack(ex: Error, color: boolean = true): string[] {
        return jsconsole.getStackTrace(ex, color)
    }
    assert(value: any, message?: string, ...optionalParams: any[]): void {
        throw new Error("Method not implemented.")
    }
    clear(): void {
        throw new Error("Method not implemented.")
    }
    count(label?: string): void {
        throw new Error("Method not implemented.")
    }
    countReset(label?: string): void {
        throw new Error("Method not implemented.")
    }
    dir(obj: any, options?: any): void {
        throw new Error("Method not implemented.")
    }
    dirxml(...data: any[]): void {
        throw new Error("Method not implemented.")
    }
    exception(message?: string, ...optionalParams: any[]): void {
        throw new Error('Method not implemented.')
    }
    group(...label: any[]): void {
        throw new Error("Method not implemented.")
    }
    groupCollapsed(...label: any[]): void {
        throw new Error("Method not implemented.")
    }
    groupEnd(): void {
        throw new Error("Method not implemented.")
    }
    table(tabularData: any, properties?: string[]): void {
        throw new Error("Method not implemented.")
    }
    time(label?: string): void {
        throw new Error("Method not implemented.")
    }
    timeEnd(label?: string): void {
        throw new Error("Method not implemented.")
    }
    timeLog(label?: string, ...data: any[]): void {
        throw new Error("Method not implemented.")
    }
    markTimeline(label?: string): void {
        throw new Error("Method not implemented.")
    }
    profile(label?: string): void {
        throw new Error("Method not implemented.")
    }
    profileEnd(label?: string): void {
        throw new Error("Method not implemented.")
    }
    timeStamp(label?: string): void {
        throw new Error("Method not implemented.")
    }
    timeline(label?: string): void {
        throw new Error("Method not implemented.")
    }
    timelineEnd(label?: string): void {
        throw new Error("Method not implemented.")
    }
}
