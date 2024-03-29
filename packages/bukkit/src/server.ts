import { server } from '@ccms/api'
import { provideSingleton } from '@ccms/container'

import * as reflect from '@ccms/common/dist/reflect'

const Bukkit: typeof org.bukkit.Bukkit = Java.type('org.bukkit.Bukkit')

@provideSingleton(server.Server)
export class BukkitServer extends server.ReflectServer {
    private pluginsFolder: string

    constructor() {
        super()
        this.pluginsFolder = Bukkit.getUpdateFolderFile().getParentFile().getCanonicalPath()
    }

    getPlayer(name: string) {
        return Bukkit.getPlayerExact(name)
    }
    getVersion(): string {
        return Bukkit.getVersion()
    }
    getOnlinePlayers() {
        return Bukkit.getOnlinePlayers()
    }
    getConsoleSender() {
        return Bukkit.getConsoleSender()
    }
    getService(service: string) {
        return Bukkit.getServicesManager().getRegistration(base.getClass(service))?.getProvider()
    }
    broadcast(message: string, permission: string) {
        return Bukkit.broadcast(message, permission)
    }
    broadcastMessage(message: string) {
        return Bukkit.broadcastMessage(message)
    }
    dispatchCommand(sender: string | any, command: string): boolean {
        if (typeof sender === 'string') {
            sender = this.getPlayer(sender)
        }
        return Bukkit.dispatchCommand(sender, command)
    }
    dispatchConsoleCommand(command: string): boolean {
        return Bukkit.dispatchCommand(Bukkit.getConsoleSender(), command)
    }
    getPluginsFolder(): string {
        return this.pluginsFolder
    }
    getNativePluginManager() {
        return Bukkit.getPluginManager() as any
    }
    getDedicatedServer() {
        return reflect.on(Bukkit.getServer()).get('console').get()
    }
    getNettyPipeline() {
        return this.pipeline
    }
    getRootLogger() {
        return this.rootLogger
    }
}
