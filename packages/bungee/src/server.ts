import { server, task } from '@ccms/api'
import { provideSingleton, inject, postConstruct } from '@ccms/container'

import * as reflect from '@ccms/common/dist/reflect'

let Bungee: net.md_5.bungee.api.ProxyServer = base.getInstance().getProxy()

@provideSingleton(server.Server)
export class BungeeServer implements server.Server {
    private pluginsFolder: string
    private pipeline: any
    private rootLogger: any

    @inject(task.TaskManager)
    private task: task.TaskManager

    constructor() {
        this.pluginsFolder = Bungee.getPluginsFolder().getCanonicalPath()
    }

    @postConstruct()
    initialize() {
        let count = 0
        let wait = this.task.create(() => {
            try {
                // @ts-ignore
                this.pipeline = reflect.on(base.getInstance().getProxy()).get('listeners').get().toArray()[0].pipeline()
                wait.cancel()
            } catch (ex) {
                count++
                if (count > 50) {
                    console.error('Reflect BungeeCord netty channel pipeline error time > 50times. Err: ' + ex)
                    wait.cancel()
                } else {
                    console.warn('Wait BungeeCord start ready to get netty channel pipeline. Err: ' + ex)
                }
            }
        }).later(10).timer(20).submit()
        try {
            this.rootLogger = Bungee.getLogger()
        } catch (error) {
            console.error("Can't found rootLogger!")
        }
    }

    getPlayer(name: string) {
        return Bungee.getPlayer(name)
    }
    getVersion(): string {
        return Bungee.getVersion()
    }
    getOnlinePlayers() {
        return Bungee.getPlayers()
    }
    getConsoleSender() {
        return Bungee.getConsole()
    }
    getService(service: string) {
        throw new Error("Method not implemented.")
    }
    dispatchCommand(sender: string | any, command: string): boolean {
        if (typeof sender === 'string') {
            sender = this.getPlayer(sender)
        }
        return Bungee.getPluginManager().dispatchCommand(sender, command)
    }
    dispatchConsoleCommand(command: string): boolean {
        return Bungee.getPluginManager().dispatchCommand(Bungee.getConsole(), command)
    }
    getPluginsFolder(): string {
        return this.pluginsFolder
    }
    getNativePluginManager() {
        return Bungee.getPluginManager() as any
    }
    getNettyPipeline() {
        return this.pipeline
    }
    getRootLogger() {
        return this.rootLogger
    }
}
