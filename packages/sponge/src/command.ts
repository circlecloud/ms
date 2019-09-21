import { command, plugin } from "@ms/api";
import { inject, injectable } from "@ms/container";

let Sponge = Java.type('org.spongepowered.api.Sponge');

var CommandCallable = Java.type('org.spongepowered.api.command.CommandCallable');
var CommandResult = Java.type('org.spongepowered.api.command.CommandResult');

let Text = Java.type('org.spongepowered.api.text.Text');

var Optional = Java.type('java.util.Optional');

class SimpleCommandCallable {
    public callable: any;

    private executor: Function;
    private tabCompleter: Function;

    constructor(command: string, description: string = '暂无描述!') {
        this.callable = new CommandCallable({
            //CommandResult process(CommandSource source, String arguments) throws CommandException;
            process: (sender: any, args) => {
                return this.executor(sender, command, args.length === 0 ? [] : args.split(" ").filter(e => e)) ? CommandResult.success() : CommandResult.empty();
            },
            //List<String> getSuggestions(CommandSource source, String arguments, @Nullable  Location<World> targetPosition) throws CommandException;
            getSuggestions: (sender: any, args, target) => {
                return this.tabCompleter(sender, command, args.length === 0 ? [] : args.split(" ").filter(e => e));
            },
            //boolean testPermission(CommandSource source);
            testPermission: () => {
                return true;
            },
            //Optional<Text> getShortDescription(CommandSource source);
            getShortDescription: () => {
                return Optional.of(Text.of(description));
            },
            //Optional<Text> getHelp(CommandSource source);
            getHelp: () => {
                return Optional.of(Text.of(""));
            },
            //Text getUsage(CommandSource source);
            getUsage: () => {
                return Text.of('');
            }
        })
    }

    setExecutor = (executor: Function) => this.executor = executor;
    setTabCompleter = (tabCompleter: Function) => this.tabCompleter = tabCompleter;
}

@injectable()
export class SpongeCommand extends command.Command {
    @inject(plugin.PluginInstance)
    private pluginInstance: any
    private commandMap: any[] = [];

    create(plugin: any, command: string) {
        var commandKey = plugin.description.name.toLowerCase() + ":" + command;
        if (!this.commandMap[commandKey]) {
            this.commandMap[commandKey] = new SimpleCommandCallable(command);
            Sponge.getCommandManager().register(this.pluginInstance, this.commandMap[commandKey].callable, command, commandKey);
        }
        return this.commandMap[commandKey];
    }
    onCommand(plugin: any, command: any, executor: Function) {
        command.setExecutor(super.setExecutor(plugin, command, executor));
    }
    onTabComplete(plugin: any, command: any, tabCompleter: Function) {
        command.setTabCompleter(super.setTabCompleter(plugin, command, tabCompleter));
    }
}