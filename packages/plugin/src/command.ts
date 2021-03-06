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

    private registryCommand(pluginInstance: plugin.Plugin) {
        let cmds = getPluginCommandMetadata(pluginInstance)
        let tabs = getPluginTabCompleterMetadata(pluginInstance)
        for (const cmd of cmds) {
            if (!this.ServerChecker.check(cmd.servers)) {
                console.debug(`[${pluginInstance.description.name}] ${cmd.target.constructor.name} incompatible command ${cmd.name} server(${cmd.servers}) ignore.`)
                continue
            }
            for (let command of [cmd.name, ...cmd.alias]) {
                let [cmdExecutor, cmdCompleter] = this.generateAutoMainCommand(pluginInstance, cmd, tabs.get(command))
                this.CommandManager.on(pluginInstance, command, {
                    cmd: cmdExecutor.bind(pluginInstance),
                    tab: cmdCompleter?.bind(pluginInstance)
                })
            }
        }
    }

    private unregistryCommand(pluginInstance: plugin.Plugin) {
        let cmds = getPluginCommandMetadata(pluginInstance)
        cmds.forEach(cmd => this.CommandManager.off(pluginInstance, cmd.name))
    }

    private generateAutoMainCommand(pluginInstance: plugin.Plugin, cmd: interfaces.CommandMetadata, tab: interfaces.CommandMetadata) {
        let cmdExecutor = pluginInstance[cmd.executor]
        let cmdCompleter = tab ? pluginInstance[tab.executor] : undefined
        let cmdSubCache = Object.keys(pluginInstance.constructor.prototype).filter(s => s.startsWith('cmd')).map(s => s.substring(3))
        if (cmd.autoMain) {
            cmdExecutor = (sender: any, command: string, args: string[]) => {
                let subcommand = args[0] || 'help'
                let cmdKey = 'cmd' + subcommand
                if (!pluginInstance[cmdKey]) {
                    console.sender(sender, '§4未知的子命令: §c' + subcommand)
                    pluginInstance['cmdhelp'] && console.sender(sender, `§6请执行 §b/${command} §ahelp §6查看帮助!`)
                    return
                }
                args.shift()
                return pluginInstance[cmdKey].apply(pluginInstance, [sender, ...args])
            }
            let originCompleter = cmdCompleter
            cmdCompleter = (sender: any, command: string, args: string[]) => {
                return (args.length == 1 ? cmdSubCache : []).concat(originCompleter?.apply(pluginInstance, [sender, command, args]) || [])
            }
        }
        if (!cmdCompleter) { console.warn(`[${pluginInstance.description.name}] command ${cmd.name} is not registry tabCompleter`) }
        return [cmdExecutor, cmdCompleter]
    }
}
