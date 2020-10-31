import { command, plugin, server } from '@ccms/api'
import { provideSingleton, inject, Autowired } from '@ccms/container'
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
                this.CommandManager.on(pluginInstance, command, {
                    cmd: pluginInstance[cmd.executor].bind(pluginInstance),
                    tab: tabs.has(command) ?
                        pluginInstance[tabs.get(command).executor].bind(pluginInstance) :
                        console.debug(`[${pluginInstance.description.name}] command ${cmd.name} is not registry tabCompleter`)
                })
            }
        }
    }

    private unregistryCommand(pluginInstance: plugin.Plugin) {
        let cmds = getPluginCommandMetadata(pluginInstance)
        cmds.forEach(cmd => this.CommandManager.off(pluginInstance, cmd.name))
    }
}
