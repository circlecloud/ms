import { server } from '@ms/api'
import { provideSingleton } from '@ms/container';

import * as reflect from '@ms/common/dist/reflect'
import chat from './enhance/chat'

const refList: Array<{ server: string, future: string }> = [
    { server: 'an', future: 'g' },//spigot 1.12.2
    { server: 'getServerConnection', future: 'f' },//after spigot 1.14.4
    { server: 'func_147137_ag', future: 'field_151274_e' }//catserver 1.12.2
]

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
