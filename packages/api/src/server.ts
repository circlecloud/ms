import * as reflect from '@ccms/common/dist/reflect'
import { injectable, Autowired, ContainerInstance, Container, postConstruct } from '@ccms/container'

import { constants } from './constants'

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
    export interface NativePlugin {
        name: string
        version: string
        authors?: string | string[]
        enable: boolean
        depends?: string[]
        softDepends?: string[]
        /**
         * 插件本体
         */
        origin: any
        [key: string]: any
    }

    @injectable()
    export abstract class NativePluginManager {
        list(): NativePlugin[] {
            throw new Error("Method not implemented.")
        }
        has(name: string): boolean {
            return true
        }
        get(name: string): NativePlugin {
            throw new Error("Method not implemented.")
        }
        enable(name: string): NativePlugin {
            throw new Error("Method not implemented.")
        }
        disable(name: string): NativePlugin {
            throw new Error("Method not implemented.")
        }
        reload(name: string): NativePlugin {
            throw new Error("Method not implemented.")
        }
        delete(name: string): boolean {
            throw new Error("Method not implemented.")
        }
    }

    /**
     * MiaoScript Server
     */
    @injectable()
    export abstract class Server {
        getVersion(): string {
            throw new Error("Method not implemented.")
        }
        getPlayer(name: string): any {
            throw new Error("Method not implemented.")
        }
        getOnlinePlayers(): any[] {
            throw new Error("Method not implemented.")
        }
        getConsoleSender(): any {
            throw new Error("Method not implemented.")
        }
        getService(service: string): any {
            throw new Error("Method not implemented.")
        }
        broadcast(message: string, permission: string) {
            throw new Error("Method not implemented.")
        }
        broadcastMessage(message: string) {
            throw new Error("Method not implemented.")
        }
        dispatchCommand(sender: string | any, command: string): boolean {
            throw new Error("Method not implemented.")
        }
        dispatchConsoleCommand(command: string): boolean {
            throw new Error("Method not implemented.")
        }
        getPluginsFolder(): string {
            throw new Error("Method not implemented.")
        }
        getDedicatedServer?(): any {
            throw new Error("Method not implemented.")
        }
        getNettyPipeline(): any {
            throw new Error("Method not implemented.")
        }
        getRootLogger(): any {
            throw new Error("Method not implemented.")
        }
    }

    @injectable()
    export class ServerChecker {
        @Autowired(ServerType)
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
    export class NativePluginChecker {
        @Autowired(NativePluginManager)
        private nativePluginManager: NativePluginManager

        check(plugins: string[]) {
            // Not set plugins -> allow
            if (!plugins || !plugins.length) return true
            for (const plugin of plugins) {
                if (!this.nativePluginManager.has(plugin)) { return false }
            }
            return true
        }
    }

    @injectable()
    export abstract class ReflectServer extends server.Server {
        @Autowired(ContainerInstance)
        private container: Container

        protected pipeline: any
        protected rootLogger: any

        constructor() {
            super()
        }

        @postConstruct()
        protected reflect() {
            try {
                let consoleServer = this.getDedicatedServer()
                this.reflectPipeline(consoleServer)
                this.reflectRootLogger(consoleServer)
            } catch (error: any) {
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
                } catch (error: any) {
                    if (global.debug) {
                        console.ex(error)
                    }
                }
            }
            if (!connection) { console.error("Can't found ServerConnection!"); return }
            for (const field of constants.Reflect.Field.listeningChannels) {
                try {
                    promise = reflect.on(connection).get(field).get().get(0)
                    if (promise.class.name.indexOf('Promise') !== -1) { break }
                    promise = undefined
                } catch (error: any) {
                    if (global.debug) {
                        console.ex(error)
                    }
                }
            }
            if (!promise) { console.error("Can't found listeningChannels!"); return }
            this.pipeline = reflect.on(promise).get('channel').get().pipeline()
            this.container.bind(constants.ServiceIdentifier.NettyPipeline).toConstantValue(this.pipeline)
        }
        protected reflectRootLogger(consoleServer: any) {
            try {
                this.rootLogger = reflect.on(consoleServer).get('LOGGER').get()
            } catch (error: any) {
                if (global.debug) {
                    console.ex(error)
                }
                try {
                    this.rootLogger = reflect.on(consoleServer).get(0).get()
                } catch (error: any) {
                    if (global.debug) {
                        console.ex(error)
                    }
                }
            }
            if (this.rootLogger.class.name.indexOf('slf4j') !== -1) {
                try {
                    let LogManager = Java.type('org.apache.logging.log4j.LogManager')
                    this.rootLogger = LogManager.getLogger('ROOT')
                } catch (error: any) {
                    if (global.debug) {
                        console.ex(error)
                    }
                }
            }
            if (this.rootLogger && this.rootLogger.class.name.indexOf('Logger') === -1) {
                console.error('Error Logger Class: ' + this.rootLogger.class.name)
                this.rootLogger = undefined
            }
            if (!this.rootLogger) { console.error("Can't found rootLogger!") }
            // get root logger
            for (let index = 0; index < 5 && this.rootLogger.parent; index++) {
                this.rootLogger = this.rootLogger.parent
            }
            this.container.bind(constants.ServiceIdentifier.RootLogger).toConstantValue(this.rootLogger)
        }
    }
}
