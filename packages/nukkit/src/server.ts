import { server } from '@ms/api'
import { provideSingleton } from '@ms/container';

let Nukkit: cn.nukkit.Server = base.getInstance().getServer();

@provideSingleton(server.Server)
export class NukkitServer implements server.Server {
    getPlayer(name: string) {
        return Nukkit.getPlayer(name)
    }
    getVersion(): string {
        return Nukkit.getVersion()
    }
    getOnlinePlayers() {
        return Nukkit.getOnlinePlayers() as unknown as any[]
    }
    getConsoleSender() {
        return Nukkit.getConsoleSender()
    }
    getService(service: string) {
        return Nukkit.getServiceManager().getProvider(base.getClass(service))
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
    sendJson(sender: string | any, json: object | string): void {
        throw new Error("Method not implemented.");
    }
}
