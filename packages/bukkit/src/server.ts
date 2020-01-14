import { server } from '@ms/api'
import { injectable } from '@ms/container';

import chat from './enhance/chat'

let Bukkit = org.bukkit.Bukkit;

@injectable()
export class BukkitServer implements server.Server {
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
    sendJson(sender: string | any, json: object | string): void {
        if (typeof sender === "string") {
            sender = this.getPlayer(sender)
        }
        let result = chat.json(sender, json)
        if (result !== false) {
            this.dispatchConsoleCommand(result)
        }
    }
}
