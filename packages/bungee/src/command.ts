import { command, plugin } from "@ms/api";
import { inject, provideSingleton } from "@ms/container";

const Arrays = Java.type('java.util.Arrays')
const Command = Java.extend(Java.type('net.md_5.bungee.api.plugin.Command'), Java.type('net.md_5.bungee.api.plugin.TabExecutor'));
const createCommand = eval(`
            function(cls, name, exec, tab){
                return new cls(name) {
                    execute: exec,
                    onTabComplete: tab
                }
            }
        `)

@provideSingleton(command.Command)
export class BungeeCommand extends command.Command {
    @inject(plugin.PluginInstance)
    private pluginInstance: any;
    private pluginManager: net.md_5.bungee.api.plugin.PluginManager = base.getInstance().getProxy().getPluginManager();
    private commandMapping: any[] = [];

    create(plugin: any, command: string) {
        let commandKey = this.getCommandKey(plugin, command);
        let commandCallable = new SimpleCommand(command);
        this.pluginManager.registerCommand(this.pluginInstance, commandCallable.callable)
        this.commandMapping[commandKey] = commandCallable.callable;
        return commandCallable;
    }
    remove(plugin: any, command: string) {
        var commandKey = this.getCommandKey(plugin, command);
        if (this.commandMapping[commandKey]) {
            this.pluginManager.unregisterCommand(this.commandMapping[commandKey])
            delete this.commandMapping[commandKey];
        }
    }
    onCommand(plugin: any, command: any, executor: Function) {
        command.setExecutor(super.setExecutor(plugin, command, executor));
    }
    onTabComplete(plugin: any, command: any, tabCompleter: Function) {
        command.setTabComplete(super.setTabCompleter(plugin, command, tabCompleter))
    }

    private getCommandKey(plugin: any, command: string) {
        return plugin.description.name.toLowerCase() + ":" + command;
    }
}

class SimpleCommand {
    public callable: any;
    private name: string;
    private executor: Function;
    private tabComplete: Function = () => [];

    constructor(command: string) {
        this.name = command;
        this.callable = createCommand(Command, command,
            (sender, args) => this.executor(sender, '', command, args),
            (sender, args) => Arrays.asList(this.tabComplete(sender, '', command, args))
        );
    }

    setExecutor = (executor: Function) => this.executor = executor;
    setTabComplete = (tabComplete: Function) => this.tabComplete = tabComplete;
    toString = () => `Bungee SimpleCommand(${this.name})`
}