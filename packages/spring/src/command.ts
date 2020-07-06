import '@ccms/nashorn'

import { command, plugin } from '@ccms/api'
import { inject, provideSingleton, postConstruct } from '@ccms/container'

import { CommandMap } from './internal/command'

@provideSingleton(command.Command)
export class SpringCommand extends command.Command {
    @inject(CommandMap)
    private commandMap: CommandMap

    protected create(plugin: any, command: string) {
        return this.commandMap.register(plugin, command)
    }
    protected remove(plugin: any, command: string) {
        this.commandMap.unregister(plugin, command)
    }
    protected onCommand(plugin: any, command: any, executor: Function) {
        command.setExecutor(super.setExecutor(plugin, command, executor))
    }
    protected onTabComplete(plugin: any, command: any, tabCompleter: Function) {
        command.setTabCompleter(super.setTabCompleter(plugin, command, tabCompleter))
    }
}
