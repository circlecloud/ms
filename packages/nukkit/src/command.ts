import '@ms/nashorn'

import { command, plugin } from '@ms/api'
import { injectable, postConstruct, inject } from '@ms/container'

let PluginCommand = Java.type('cn.nukkit.command.PluginCommand');
let CommandExecutor = Java.type('cn.nukkit.command.CommandExecutor');

@injectable()
export class NukkitCommand extends command.Command {
    @inject(plugin.PluginInstance)
    private pluginInstance: any
    private commandMap: any;

    @postConstruct()
    init() {
        this.commandMap = base.getInstance().getServer().getCommandMap();
    }
    create(plugin: any, command: string) {
        var cmd = this.commandMap.getCommand(command)
        if (cmd && cmd instanceof PluginCommand) { return cmd };
        cmd = new PluginCommand(command, this.pluginInstance)
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
        // Not Support
    }
}
