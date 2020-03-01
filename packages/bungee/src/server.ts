import { server } from '@ms/api'
import { provideSingleton } from '@ms/container';

let Bungee: net.md_5.bungee.api.ProxyServer = base.getInstance().getProxy();

@provideSingleton(server.Server)
export class BungeeServer implements server.Server {
    private pluginsFolder: string;

    constructor() {
        this.pluginsFolder = Bungee.getPluginsFolder().getCanonicalPath();
    }

    getPlayer(name: string) {
        return Bungee.getPlayer(name);
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
        throw new Error("Method not implemented.");
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
        return this.pluginsFolder;
    }
    getNativePluginManager() {
        throw new Error("Method not implemented.");
    }
    sendJson(sender: string | any, json: string): void {
        throw new Error("Method not implemented.");
    }
}
