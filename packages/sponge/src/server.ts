import { server } from '@ms/api'
import { provideSingleton } from '@ms/container';

import * as reflect from '@ms/common/dist/reflect'

const refList: Array<{ server: string, future: string }> = [
    { server: 'an', future: 'g' },//spigot 1.12.2
    { server: 'getServerConnection', future: 'f' },//after spigot 1.14.4
    { server: 'func_147137_ag', future: 'field_151274_e' }//catserver 1.12.2
]

const Sponge = org.spongepowered.api.Sponge;
const TextSerializers = org.spongepowered.api.text.serializer.TextSerializers;
const File = Java.type("java.io.File");

@provideSingleton(server.Server)
export class SpongeServer implements server.Server {
    private pluginsFolder: string;
    private pipeline: any;

    constructor() {
        this.pluginsFolder = new File(base.getInstance().getClass().getProtectionDomain().getCodeSource().getLocation().getPath()).getParentFile().getCanonicalPath()
        this.reflectPipeline()
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
    dispatchCommand(sender: string | any, command: string): boolean {
        if (typeof sender === 'string') {
            sender = this.getPlayer(sender)
        }
        return Sponge.getCommandManager().process(sender, command).getQueryResult()
    }
    dispatchConsoleCommand(command: string): boolean {
        return Sponge.getCommandManager().process(Sponge.getServer().getConsole(), command).getQueryResult()
    }
    getPluginsFolder(): string {
        return this.pluginsFolder;
    }
    getNativePluginManager() {
        return Sponge.getPluginManager() as any;
    }
    getNettyPipeline() {
        return this.pipeline;
    }
    sendJson(sender: string | any, json: string): void {
        if (typeof sender === "string") {
            sender = this.getPlayer(sender)
        }
        sender.sendMessage(TextSerializers.JSON.deserialize(json))
    }
    private reflectPipeline() {
        let consoleServer = reflect.on(Sponge.getServer()).get()
        let promise: any;
        for (const ref of refList) {
            try {
                promise = reflect.on(consoleServer).call(ref.server).get(ref.future).get().get(0); break;
            } catch (error) {
            }
        }
        if (!promise) { throw Error(`Can't found ServerConnection or ChannelFuture !`) }
        this.pipeline = reflect.on(promise).get('channel').get().pipeline()
    }
}
