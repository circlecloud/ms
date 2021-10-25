import { server, constants } from '@ccms/api'
import { provideSingleton } from '@ccms/container'

import * as reflect from '@ccms/common/dist/reflect'

const Sponge: typeof org.spongepowered.api.Sponge = org.spongepowered.api.Sponge
const Text: typeof org.spongepowered.api.text.Text = org.spongepowered.api.text.Text
const File = Java.type("java.io.File")

@provideSingleton(server.Server)
export class SpongeServer extends server.ReflectServer {
    private pluginsFolder: string

    constructor() {
        super()
        this.pluginsFolder = new File(base.getInstance().getClass().getProtectionDomain().getCodeSource().getLocation().getPath()).getParentFile().getCanonicalPath()
    }

    getPlayer(name: string) {
        return Sponge.getServer().getPlayer(name).orElse(null)
    }
    getVersion(): string {
        return `${Sponge.getPlatform().getImplementation().getName()} (${Sponge.getPlatform().getImplementation().getVersion()})`
    }
    getOnlinePlayers() {
        return Sponge.getServer().getOnlinePlayers()
    }
    getConsoleSender() {
        return Sponge.getServer().getConsole()
    }
    getService(service: string) {
        return Sponge.getServiceManager().provide(base.getClass(service)).orElse(null)
    }
    broadcast(message: string, permission: string) {
        return Sponge.getServer().getBroadcastChannel().permission(permission).send(Text.of(message) as any)
    }
    broadcastMessage(message: string) {
        return Sponge.getServer().getBroadcastChannel().TO_ALL.send(Text.of(message) as any)
    }
    dispatchCommand(sender: string | any, command: string): boolean {
        if (typeof sender === 'string') {
            sender = this.getPlayer(sender)
        }
        return Sponge.getCommandManager().process(sender, command).getSuccessCount().orElse(0) != 0
    }
    dispatchConsoleCommand(command: string): boolean {
        return Sponge.getCommandManager().process(Sponge.getServer().getConsole(), command).getSuccessCount().orElse(0) != 0
    }
    getPluginsFolder(): string {
        return this.pluginsFolder
    }
    getNativePluginManager() {
        return Sponge.getPluginManager() as any
    }
    getDedicatedServer() {
        return reflect.on(Sponge.getServer()).get()
    }
    getNettyPipeline() {
        return this.pipeline
    }
    getRootLogger() {
        return this.rootLogger
    }
}
