import { server, constants } from '@ms/api'
import { provideSingleton } from '@ms/container';

import * as reflect from '@ms/common/dist/reflect'
import chat from './enhance/chat'

let Bukkit = org.bukkit.Bukkit;

@provideSingleton(server.Server)
export class BukkitServer implements server.Server {
    private pluginsFolder: string;
    private pipeline: any;

    constructor() {
        this.pluginsFolder = Bukkit.getUpdateFolderFile().getParentFile().getCanonicalPath();
        this.reflectPipeline()
    }

    getPlayer(name: string) {
        return Bukkit.getPlayer(name)
    }
    getVersion(): string {
        return Bukkit.getVersion()
    }
    getOnlinePlayers() {
        return Bukkit.getOnlinePlayers() as unknown as any[]
    }
    getConsoleSender() {
        return Bukkit.getConsoleSender()
    }
    getService(service: string) {
        return Bukkit.getServicesManager().getRegistration(base.getClass(service))?.getProvider()
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
        return this.pluginsFolder;
    }
    getNativePluginManager() {
        return Bukkit.getPluginManager() as any;
    }
    getNettyPipeline() {
        return this.pipeline;
    }
    sendJson(sender: string | any, json: object | string): void {
        if (typeof sender === "string") {
            sender = this.getPlayer(sender)
        }
        let result = chat.json(sender, json)
        if (result !== false) {
            this.dispatchConsoleCommand(result)
        }
    }

    private reflectPipeline() {
        let consoleServer = reflect.on(Bukkit.getServer()).get('console').get()
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
