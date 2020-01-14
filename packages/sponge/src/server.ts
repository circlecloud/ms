import { server } from '@ms/api'
import { injectable } from '@ms/container';

let Sponge = org.spongepowered.api.Sponge;
let TextSerializers = org.spongepowered.api.text.serializer.TextSerializers;

@injectable()
export class SpongeServer implements server.Server {
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
    sendJson(sender: string | any, json: string): void {
        if (typeof sender === "string") {
            sender = this.getPlayer(sender)
        }
        sender.sendMessage(TextSerializers.JSON.deserialize(json))
    }
}
