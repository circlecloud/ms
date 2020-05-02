import '@ccms/nashorn'

import { command, plugin } from '@ccms/api'
import * as reflect from '@ccms/common/dist/reflect'
import { provideSingleton, postConstruct, inject } from '@ccms/container'

let Bukkit = org.bukkit.Bukkit;
let TabCompleter = Java.type('org.bukkit.command.TabCompleter');
let PluginCommand = Java.type('org.bukkit.command.PluginCommand');
let CommandExecutor = Java.type('org.bukkit.command.CommandExecutor');

@provideSingleton(command.Command)
export class BukkitCommand extends command.Command {
    @inject(plugin.PluginInstance)
    private pluginInstance: any
    private commandMap: any;

    @postConstruct()
    init() {
        this.commandMap = reflect.on(Bukkit.getPluginManager()).get('commandMap').get();
    }
    create(plugin: any, command: string) {
        var cmd = this.commandMap.getCommand(command)
        if (cmd && cmd instanceof PluginCommand) { return cmd };
        cmd = reflect.on(PluginCommand).create(command, this.pluginInstance).get();
        this.commandMap.register(plugin.description.name, cmd);
        return cmd;
    }
    remove(plugin: any, command: string) {
        var cmd = this.commandMap.getCommand(command)
        if (cmd && cmd instanceof PluginCommand) {
            cmd.unregister(this.commandMap);
        }
    }
    onCommand(plugin: any, command: any, executor: Function) {
        // 必须指定需要实现的接口类型 否则MOD服会报错
        command.setExecutor(new CommandExecutor({
            onCommand: super.setExecutor(plugin, command, executor)
        }));
    }
    onTabComplete(plugin: any, command: any, tabCompleter: Function) {
        // 必须指定需要实现的接口类型 否则MOD服会报错
        command.setTabCompleter(new TabCompleter({
            onTabComplete: super.setTabCompleter(plugin, command, tabCompleter)
        }));
    }
}
