import { server } from '@ccms/api'
import { provideSingleton } from '@ccms/container'

let Nukkit: cn.nukkit.Server = base.getInstance().getServer()
const File = Java.type("java.io.File")

@provideSingleton(server.Server)
export class NukkitServer implements server.Server {
    private pluginsFolder: string

    constructor() {
        this.pluginsFolder = new File(base.getInstance().getClass().getProtectionDomain().getCodeSource().getLocation().getPath()).getParentFile().getCanonicalPath()
    }

    getPlayer(name: string) {
        return Nukkit.getPlayerExact(name)
    }
    getVersion(): string {
        return Nukkit.getVersion()
    }
    getOnlinePlayers() {
        return Nukkit.getOnlinePlayers().values()
    }
    getConsoleSender() {
        return Nukkit.getConsoleSender()
    }
    getService(service: string) {
        return Nukkit.getServiceManager().getProvider(base.getClass(service))
    }
    broadcast(message: string, permission: string) {
        return Nukkit.broadcast(message, permission)
    }
    broadcastMessage(message: string) {
        return Nukkit.broadcastMessage(message)
    }
    dispatchCommand(sender: string | any, command: string): boolean {
        if (typeof sender === 'string') {
            sender = this.getPlayer(sender)
        }
        return Nukkit.dispatchCommand(sender, command)
    }
    dispatchConsoleCommand(command: string): boolean {
        return Nukkit.dispatchCommand(Nukkit.getConsoleSender(), command)
    }
    getPluginsFolder(): string {
        return this.pluginsFolder
    }
    getNativePluginManager() {
        return Nukkit.getPluginManager() as any
    }
    getNettyPipeline() {
        throw new Error("Method not implemented.")
    }
    getRootLogger() {
        return Packages.org.apache.logging.log4j.LogManager.getRootLogger()
    }
}
