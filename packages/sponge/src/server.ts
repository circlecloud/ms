import { server } from '@ms/api'
import { provideSingleton } from '@ms/container';

import * as fs from '@ms/common/dist/fs'

const Sponge = org.spongepowered.api.Sponge;
const TextSerializers = org.spongepowered.api.text.serializer.TextSerializers;
const URL = Java.type("java.net.URL");
const File = Java.type("java.io.File");

@provideSingleton(server.Server)
export class SpongeServer implements server.Server {
    private pluginsFolder: string;

    constructor() {
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
        throw new Error("Method not implemented.");
    }
    sendJson(sender: string | any, json: string): void {
        if (typeof sender === "string") {
            sender = this.getPlayer(sender)
        }
        sender.sendMessage(TextSerializers.JSON.deserialize(json))
    }
}
