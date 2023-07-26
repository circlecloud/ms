import { command, plugin, server } from '@ccms/api'
import { provideSingleton, Autowired } from '@ccms/container'
import { interfaces } from './interfaces'
import { getPluginCommandMetadata, getPluginTabCompleterMetadata } from './utils'

@provideSingleton(PluginCommandManager)
export class PluginCommandManager {
    @Autowired()
    private CommandManager: command.Command
    @Autowired()
    private ServerChecker: server.ServerChecker

    constructor() {
        process.on('plugin.before.enable', this.registryCommand.bind(this))
        process.on('plugin.after.disable', this.unregistryCommand.bind(this))
    }

    public registryCommand(pluginInstance: plugin.Plugin, executor: any = pluginInstance) {
        let cmds = getPluginCommandMetadata(executor)
        let tabs = getPluginTabCompleterMetadata(executor)
        for (const cmd of cmds) {
            if (!this.ServerChecker.check(cmd.servers)) {
                console.debug(`[${pluginInstance.description.name}] ${cmd.target.constructor.name} incompatible command ${cmd.name} server(${cmd.servers}) ignore.`)
                continue
            }
            for (let command of [cmd.name, ...cmd.alias]) {
                let [cmdExecutor, cmdCompleter] = this.generateAutoMainCommand(pluginInstance, executor, cmd, tabs.get(command))
                this.CommandManager.on(pluginInstance, command, {
                    cmd: cmdExecutor.bind(executor),
                    tab: cmdCompleter?.bind(executor)
                })
            }
        }
    }

    public unregistryCommand(pluginInstance: plugin.Plugin, executor: any = pluginInstance) {
        let cmds = getPluginCommandMetadata(executor)
        for (const cmd of cmds) {
            if (!this.ServerChecker.check(cmd.servers)) {
                console.debug(`[${pluginInstance.description.name}] ${cmd.target.constructor.name} incompatible command ${cmd.name} server(${cmd.servers}) ignore.`)
                continue
            }
            for (let command of [cmd.name, ...cmd.alias]) {
                this.CommandManager.off(executor, command)
            }
        }
    }

    private generateAutoMainCommand(pluginInstance: plugin.Plugin, executor: any, cmd: interfaces.CommandMetadata, tab: interfaces.CommandMetadata) {
        let cmdExecutor = executor[cmd.executor]
        let cmdCompleter = tab ? executor[tab.executor] : undefined
        let cmdSubCache = Object.keys(executor.constructor.prototype).filter(s => s.startsWith('cmd')).map(s => s.substring(3))
        if (cmd.autoMain) {
            cmdExecutor = (sender: any, command: string, args: string[]) => {
                let subcommand = args[0]
                let cmdKey = 'cmd' + subcommand
                if (!cmdSubCache.includes(subcommand)) {
                    if (!executor[cmd.executor].apply(executor, [sender, command, args])) {
                        subcommand && pluginInstance.logger.sender(sender, `§4未知的命令: §b/${command} §c${subcommand}`)
                        pluginInstance.logger.sender(
                            sender,
                            executor['cmdhelp'] ?
                                `§6请执行 §b/${command} §ahelp §6查看帮助!` :
                                [
                                    `§6插件: §b${pluginInstance.description.name}`,
                                    `§6版本: §a${pluginInstance.description.version}`
                                ]
                        )
                    }
                    return
                }
                let subcommandexec = executor[cmdKey]
                let permission: string
                if (cmd.permission && sender.hasPermission) {
                    if (typeof cmd.permission == "string") {
                        permission = cmd.permission as string
                    } else {
                        permission = `${pluginInstance.description.name.toLocaleLowerCase()}.${command}.${subcommand || 'main'}`
                    }
                    if (!sender.hasPermission(permission)) {
                        return pluginInstance.logger.sender(sender, `§c你需要 §4${permission} §c权限 才可执行此命令.`)
                    }
                }
                args.shift()
                return subcommandexec.apply(executor, [sender, ...args])
            }
            let originCompleter = cmdCompleter
            cmdCompleter = (sender: any, command: string, args: string[]) => {
                let permission: string
                if (cmd.permission && sender.hasPermission) {
                    if (typeof cmd.permission == "string") {
                        permission = cmd.permission as string
                    } else {
                        permission = `${pluginInstance.description.name.toLocaleLowerCase()}.${command}`
                    }
                    if (!sender.hasPermission(permission)) { return [] }
                }
                return (args.length == 1 ? cmdSubCache : []).concat(originCompleter?.apply(executor, [sender, command, args]) || [])
            }
        }
        if (!cmdCompleter) { console.debug(`[${pluginInstance.description.name}] command ${cmd.name} is not registry tabCompleter`) }
        return [cmdExecutor, cmdCompleter]
    }
}
