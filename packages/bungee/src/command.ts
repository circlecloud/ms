import { command, plugin } from "@ms/api";
import { inject, injectable } from "@ms/container";
import * as ref from '@ms/common/dist/reflect'

const Command = Java.type('net.md_5.bungee.api.plugin.Command');
const createCommand = eval(`
            function(cls, name, exec){
                return new cls(name) {execute:exec}
            }
        `)

class SimpleCommand {
    public callable: any;
    private name: string;
    private executor: Function;

    constructor(command: string) {
        this.name = command;
        this.callable = createCommand(Command, command, (sender, args) => this.executor(sender, '', command, args));
    }

    setExecutor = (executor: Function) => this.executor = executor;
    toString = () => `Bungee SimpleCommand(${this.name})`
}

@injectable()
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
        console.warn(`[${plugin.description.name}] command ${command.name} register tab failed. BungeeCord not support !`)
    }

    private getCommandKey(plugin: any, command: string) {
        return plugin.description.name.toLowerCase() + ":" + command;
    }
}
