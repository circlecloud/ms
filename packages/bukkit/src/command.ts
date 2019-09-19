import '@ms/nashorn'

import { command, plugin } from '@ms/api'
import * as reflect from '@ms/common/dist/reflect'
import { injectable, postConstruct, inject } from '@ms/container'

let Bukkit = org.bukkit.Bukkit;
let Arrays = Java.type('java.util.Arrays');
let TabCompleter = Java.type('org.bukkit.command.TabCompleter');
let PluginCommand = Java.type('org.bukkit.command.PluginCommand');
let CommandExecutor = Java.type('org.bukkit.command.CommandExecutor');

@injectable()
export class BukkitCommand extends command.Command {
    @inject(plugin.PluginInstance)
    private pluginInstance: any
    private commandMap: any;

    @postConstruct()
    init() {
        this.commandMap = reflect.on(Bukkit.getPluginManager()).get('commandMap').get();
    }

    create(jsp, command) {
        var cmd = this.commandMap.getCommand(command.name)
        if (cmd && cmd instanceof PluginCommand) { return cmd };
        cmd = reflect.on(PluginCommand).create(command.name, this.pluginInstance).get();
        this.commandMap.register(jsp.description.name, cmd);
        return cmd;
    }

    onCommand(jsp, c, cmd) {
        // 必须指定需要实现的接口类型 否则MOD服会报错
        c.setExecutor(new CommandExecutor({
            onCommand: function(sender, _, command, args) {
                try {
                    return cmd(sender, command, Java.from(args));
                } catch (ex) {
                    console.console(`§6玩家 §a${sender.name} §6执行 §b${jsp.description.name} §6插件 §d${command} ${Java.from(args).join(' ')} §6命令时发生异常 §4${ex}`);
                    console.ex(ex);
                }
            }
        }));
    }

    onTabComplete(jsp, c, tab) {
        // 必须指定需要实现的接口类型 否则MOD服会报错
        // noinspection JSUnusedGlobalSymbols
        c.setTabCompleter(new TabCompleter({
            onTabComplete: (sender: any, _, command: string, args: string[]) => {
                try {
                    var token = args[args.length - 1];
                    var complete = tab(sender, command, Java.from(args)) || [];
                    return this.copyPartialMatches(complete, token);
                } catch (ex) {
                    console.console(`§6玩家 §a${sender.name} §6执行 §b${jsp.description.name} §6插件 §d${command} ${Java.from(args).join(' ')} §6补全时发生异常 §4${ex}`);
                    console.ex(ex);
                    return [];
                }
            }
        }));
    }

    copyPartialMatches(complete: string[], token: string, array: string[] = []): string[] {
        if (!token) { return complete }
        complete.forEach(function(e) {
            if (typeof e === "string" && e.toLowerCase().startsWith(token.toLowerCase())) {
                array.push(e)
            }
        });
        return array
    }
}