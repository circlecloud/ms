import * as reflect from '@ccms/common/dist/reflect'
import { injectable, inject } from '@ccms/container'

import { NativePluginManager } from './native_plugin'
import { constants } from '../../constants'

export { NativePluginManager } from './native_plugin'

export namespace server {
    /**
     * Runtime ServerType
     */
    export const ServerType = Symbol("ServerType")
    /**
     * Runtime Console
     */
    export const Console = Symbol("Console")
    /**
     * Runtime Server Instance
     */
    export const ServerInstance = Symbol("ServerInstance")
    /**
     * MiaoScript Server
     */
    export abstract class Server {
        abstract getVersion(): string
        abstract getPlayer(name: string): any
        abstract getOnlinePlayers(): any[]
        abstract getConsoleSender(): any
        abstract getService(service: string): any
        abstract dispatchCommand(sender: string | any, command: string): boolean
        abstract dispatchConsoleCommand(command: string): boolean
        abstract getPluginsFolder(): string
        abstract getNativePluginManager(): NativePluginManager
        abstract getDedicatedServer?(): any
        abstract getNettyPipeline(): any
        abstract getRootLogger(): any
    }
    @injectable()
    export class ServerChecker {
        @inject(ServerType)
        private serverType: string
        check(servers: string[]) {
            // Not set servers -> allow
            if (!servers || !servers.length) return true
            // include !type -> deny
            let denyServers = servers.filter(svr => svr.startsWith("!"))
            if (denyServers.length !== 0) {
                return !denyServers.includes(`!${this.serverType}`)
            } else {
                // only include -> allow
                return servers.includes(this.serverType)
            }
        }
    }
    @injectable()
    export abstract class ReflectServer implements server.Server {
        protected pipeline: any
        protected rootLogger: any

        constructor() {
            this.reflect()
        }

        getVersion(): string {
            throw new Error("Method not implemented.")
        }
        getPlayer(name: string) {
            throw new Error("Method not implemented.")
        }
        getOnlinePlayers(): any[] {
            throw new Error("Method not implemented.")
        }
        getConsoleSender() {
            throw new Error("Method not implemented.")
        }
        getService(service: string) {
            throw new Error("Method not implemented.")
        }
        dispatchCommand(sender: any, command: string): boolean {
            throw new Error("Method not implemented.")
        }
        dispatchConsoleCommand(command: string): boolean {
            throw new Error("Method not implemented.")
        }
        getPluginsFolder(): string {
            throw new Error("Method not implemented.")
        }
        getNativePluginManager(): NativePluginManager {
            throw new Error("Method not implemented.")
        }
        getDedicatedServer() {
            throw new Error("Method not implemented.")
        }
        getNettyPipeline() {
            throw new Error("Method not implemented.")
        }
        getRootLogger() {
            throw new Error("Method not implemented.")
        }
        protected reflect() {
            try {
                let consoleServer = this.getDedicatedServer()
                this.reflectPipeline(consoleServer)
                this.reflectRootLogger(consoleServer)
            } catch (error) {
                console.error('Error When Reflect MinecraftServer!', error)
                console.ex(error)
            }
        }
        protected reflectPipeline(consoleServer: any) {
            let connection: any
            let promise: any
            for (const method of constants.Reflect.Method.getServerConnection) {
                try {
                    connection = reflect.on(consoleServer).call(method).get()
                    if (connection.class.name.indexOf('ServerConnection') !== -1
                        || connection.class.name.indexOf('NetworkSystem') !== -1) { break }
                    connection = undefined
                } catch (error) { }
            }
            if (!connection) { console.error("Can't found ServerConnection!"); return }
            for (const field of constants.Reflect.Field.listeningChannels) {
                try {
                    promise = reflect.on(connection).get(field).get().get(0)
                    if (promise.class.name.indexOf('Promise') !== -1) { break }
                    promise = undefined
                } catch (error) { }
            }
            if (!promise) { console.error("Can't found listeningChannels!"); return }
            this.pipeline = reflect.on(promise).get('channel').get().pipeline()
        }
        protected reflectRootLogger(consoleServer: any) {
            try {
                this.rootLogger = reflect.on(consoleServer).get('LOGGER').get().parent
            } catch (error) {
                try { this.rootLogger = reflect.on(consoleServer).get(0).get().parent } catch (error) { }
            }
            if (this.rootLogger && this.rootLogger.class.name.indexOf('Logger') === -1) {
                console.error('Error Logger Class: ' + this.rootLogger.class.name)
                this.rootLogger = undefined
            }
            // get root logger
            for (let index = 0; index < 5 && this.rootLogger.parent; index++) {
                this.rootLogger = this.rootLogger.parent
            }
            if (!this.rootLogger) { console.error("Can't found rootLogger!") }
        }
    }
}
