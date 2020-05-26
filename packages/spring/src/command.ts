import '@ccms/nashorn'

import { command, plugin } from '@ccms/api'
import { inject, provideSingleton, postConstruct } from '@ccms/container'

@provideSingleton(command.Command)
export class SpringCommand extends command.Command {
    @inject(plugin.PluginInstance)
    private pluginInstance: any

    protected create(plugin: any, command: string) {
        console.console('§4Spring暂不支持create命令!')
    }
    protected remove(plugin: any, command: string) {
        console.console('§4Spring暂不支持remove命令!')
    }
    protected onCommand(plugin: any, command: any, executor: Function) {
        console.console('§4Spring暂不支持onCommand!')
    }
    protected onTabComplete(plugin: any, command: any, tabCompleter: Function) {
        console.console('§4Spring暂不支持onTabComplete!')
    }
}
