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
                return this.executor(sender, '', command, Java.to(args.split(" ").filter(e => e))) ? CommandResult.success() : CommandResult.empty();
            },
            //List<String> getSuggestions(CommandSource source, String arguments, @Nullable  Location<World> targetPosition) throws CommandException;
            getSuggestions: (sender: any, args, target) => {
                return this.tabCompleter(sender, '', command, Java.to(args.split(" ").filter(e => e)));
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
    toString = () => `Sponge SimpleCommandCallable`
}

@injectable()
export class SpongeCommand extends command.Command {
    @inject(plugin.PluginInstance)
    private pluginInstance: any
    private commandMapping: any[] = [];

    create(plugin: any, command: string) {
        let commandKey = this.getCommandKey(plugin, command);
        let commandCallable = new SimpleCommandCallable(command);
        this.commandMapping[commandKey] = Sponge.getCommandManager().register(this.pluginInstance, commandCallable.callable, command, commandKey).orElse(null);
        return commandCallable;
    }
    remove(plugin: any, command: string) {
        var commandKey = this.getCommandKey(plugin, command);
        if (this.commandMapping[commandKey]) {
            Sponge.getCommandManager().removeMapping(this.commandMapping[commandKey]);
            delete this.commandMapping[commandKey];
        }
    }
    onCommand(plugin: any, command: any, executor: Function) {
        command.setExecutor(super.setExecutor(plugin, command, executor));
    }
    onTabComplete(plugin: any, command: any, tabCompleter: Function) {
        command.setTabCompleter(super.setTabCompleter(plugin, command, tabCompleter));
    }

    private getCommandKey(plugin: any, command: string) {
        return plugin.description.name.toLowerCase() + ":" + command;
    }
}
