import { provideSingleton } from "@ccms/container"
import { plugin } from "@ccms/api"

type CommandExec = (sender: any, _: any, command: string, args: string[]) => boolean
type TabCompleter = (sender: any, _: any, command: string, args: string[]) => string[]
type CommandStore = { [key: string]: SpringCommand }

@provideSingleton(CommandMap)
export class CommandMap {
    private commands: CommandStore = {}
    private pluginCommands: { [key: string]: CommandStore } = {}

    register(plugin: plugin.Plugin, command: string) {
        let springCommand = new SpringCommand(plugin, command)
        this.commands[command] = springCommand
        if (!this.pluginCommands[plugin.description.name]) { this.pluginCommands[plugin.description.name] = {} }
        this.pluginCommands[plugin.description.name][command] = springCommand
        return springCommand
    }

    unregister(plugin: plugin.Plugin, command: string) {
        delete this.commands[command]
        delete this.pluginCommands[plugin.description.name][command]
    }

    dispatch(sender: any, command: string, args: string[]): boolean {
        if (command === "help") {
            sender.sendMessage('§e--------- §rHelp: Index §e---------------------------')
            sender.sendMessage('Use /help [n] to get page n of help.')
            for (const cmdName of Object.getOwnPropertyNames(this.commands)) {
                sender.sendMessage(`§6/${cmdName}: §rA command provided by plugin §b${this.commands[cmdName].plugin.description.name}§r.`)
            }
            return
        }
        let exists = this.commands[command]
        if (exists) {
            try {
                return exists.executor(sender, '', command, Java.to(args))
            } catch (error) {
                console.ex(error)
            }
            return true
        } else {
            sender.sendMessage && sender.sendMessage(`Unknown command. Type "/help" for help.`)
            return false
        }
    }

    tabComplate(sender: any, input: string, index?: number): string[] {
        if (index == 0) { return Object.keys(this.commands).concat('help') }
        let [command, ...args] = input.split(' ')
        let exists = this.commands[command]
        if (exists && exists.tabCompleter) {
            try {
                if (args.length !== index) { args.push('') }
                return exists.tabCompleter(sender, '', command, Java.to(args))
            } catch (error) {
                console.ex(error)
            }
        }
        return []
    }
}

export class SpringCommand {
    public plugin: plugin.Plugin
    public name: string
    public executor: CommandExec
    public tabCompleter: TabCompleter

    constructor(plugin: plugin.Plugin, command: string, description: string = '暂无描述!') {
        this.plugin = plugin
        this.name = command
    }

    setExecutor = (executor: CommandExec) => this.executor = executor
    setTabCompleter = (tabCompleter: TabCompleter) => this.tabCompleter = tabCompleter
    toString = () => `SpringCommand(${this.name})`
}