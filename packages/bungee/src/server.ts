import { server } from '@ms/api'
import { injectable } from '@ms/container';

let Bungee: net.md_5.bungee.api.ProxyServer = base.getInstance().getProxy();

@injectable()
export class BungeeServer implements server.Server {
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
        return false
    }
    dispatchConsoleCommand(command: string): boolean {
        return false
    }
    sendJson(sender: string | any, json: string): void {
        throw new Error("Method not implemented.");
    }
}
