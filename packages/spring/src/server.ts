import { server } from '@ccms/api'
import { provideSingleton, inject } from '@ccms/container'
import { NativePluginManager } from '@ccms/api'
import { CommandMap } from './internal/command'

@provideSingleton(server.Server)
export class SpringServer implements server.Server {
    @inject(CommandMap)
    private commandMap: CommandMap

    getVersion(): string {
        return "SpringFramework"
    }
    getPlayer(name: string) {
        throw new Error("Method not implemented.")
    }
    getOnlinePlayers(): any[] {
        throw new Error("Method not implemented.")
    }
    getConsoleSender() {
        return {
            name: 'CONSOLE',
            sendMessage: (message: string) => console.console(message)
        }
    }
    getService(service: string) {
        throw new Error("Method not implemented.")
    }
    dispatchCommand(sender: any, command: string): boolean {
        let cmd_args = command.split(" ")
        return this.commandMap.dispatch(sender, cmd_args.shift(), cmd_args || [])
    }
    dispatchConsoleCommand(command: string): boolean {
        return this.dispatchCommand(this.getConsoleSender(), command)
    }
    getPluginsFolder(): string {
        throw new Error("Method not implemented.")
    }
    getNativePluginManager(): NativePluginManager {
        throw new Error("Method not implemented.")
    }
    getNettyPipeline() {
        return base.getInstance().getAutowireCapableBeanFactory()
    }
    getRootLogger() {
        return Packages.org.slf4j.LoggerFactory.getLogger("root") || global.logger
    }
}
