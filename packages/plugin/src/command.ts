import { command, plugin, server } from '@ccms/api'
import { provideSingleton, postConstruct, inject } from '@ccms/container'
import { getPluginCommandMetadata, getPluginTabCompleterMetadata } from './utils'

@provideSingleton(PluginCommandManager)
export class PluginCommandManager {
    @inject(server.ServerChecker)
    private ServerChecker: server.ServerChecker
    @inject(command.Command)
    private CommandManager: command.Command

    constructor() {
        process.on('plugin.before.enable', (plugin: plugin.Plugin) => this.registryCommand(plugin))
        process.on('plugin.after.disable', (plugin: plugin.Plugin) => this.unregistryCommand(plugin))
    }

    private registryCommand(pluginInstance: plugin.Plugin) {
        let cmds = getPluginCommandMetadata(pluginInstance)
        let tabs = getPluginTabCompleterMetadata(pluginInstance)
        for (const [_, cmd] of cmds) {
            let tab = tabs.get(cmd.name)
            if (!this.ServerChecker.check(cmd.servers)) { continue }
            this.CommandManager.on(pluginInstance, cmd.name, {
                cmd: pluginInstance[cmd.executor].bind(pluginInstance),
                tab: tab ? pluginInstance[tab.executor].bind(pluginInstance) : undefined
            })
        }
    }

    private unregistryCommand(pluginInstance: plugin.Plugin) {
        let cmds = getPluginCommandMetadata(pluginInstance)
        cmds.forEach(cmd => {
            this.CommandManager.off(pluginInstance, cmd.name)
        })
    }
}
