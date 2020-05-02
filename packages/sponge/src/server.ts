import { server, constants } from '@ccms/api'
import { provideSingleton } from '@ccms/container';

import * as reflect from '@ccms/common/dist/reflect'

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
        let connection: any;
        let promise: any;
        for (const method of constants.Reflect.Method.getServerConnection) {
            try {
                connection = reflect.on(consoleServer).call(method).get()
                if (connection.class.name.indexOf('ServerConnection') !== -1) { break; }
                connection = undefined;
            } catch (error) { }
        }
        if (!connection) { console.error("Can't found ServerConnection!"); return }
        for (const field of constants.Reflect.Field.listeningChannels) {
            try {
                promise = reflect.on(connection).get(field).get().get(0);
                if (promise.class.name.indexOf('Promise') !== -1) { break; }
                promise = undefined;
            } catch (error) { }
        }
        if (!promise) { console.error("Can't found listeningChannels!"); return }
        this.pipeline = reflect.on(promise).get('channel').get().pipeline()
    }
}
