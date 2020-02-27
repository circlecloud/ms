declare namespace org {
    namespace bukkit {
        namespace command {
            // @ts-ignore
             class PluginCommand extends org.bukkit.command.Command implements org.bukkit.command.PluginIdentifiableCommand {
                // @ts-ignore
                constructor(name: string, owner: org.bukkit.plugin.Plugin)
                /**
                 * Executes the command, returning its success
                 */
                // @ts-ignore
                public execute(sender: org.bukkit.command.CommandSender, commandLabel: string, args: string): boolean;
                /**
                 * Sets the {@link CommandExecutor} to run when parsing this command
                 */
                // @ts-ignore
                public setExecutor(executor: org.bukkit.command.CommandExecutor): void;
                /**
                 * Gets the {@link CommandExecutor} associated with this command
                 */
                // @ts-ignore
                public getExecutor(): org.bukkit.command.CommandExecutor;
                /**
                 * Sets the {@link TabCompleter} to run when tab-completing this command.
                 * <p>
                 * If no TabCompleter is specified, and the command's executor implements
                 * TabCompleter, then the executor will be used for tab completion.
                 */
                // @ts-ignore
                public setTabCompleter(completer: org.bukkit.command.TabCompleter): void;
                /**
                 * Gets the {@link TabCompleter} associated with this command.
                 */
                // @ts-ignore
                public getTabCompleter(): org.bukkit.command.TabCompleter;
                /**
                 * Gets the owner of this PluginCommand
                 */
                // @ts-ignore
                public getPlugin(): org.bukkit.plugin.Plugin;
                /**
                 * {@inheritDoc}
                 * <p>
                 * Delegates to the tab completer if present.
                 * <p>
                 * If it is not present or returns null, will delegate to the current
                 * command executor if it implements {@link TabCompleter}. If a non-null
                 * list has not been found, will default to standard player name
                 * completion in {@link
                 * Command#tabComplete(CommandSender, String, String[])}.
                 * <p>
                 * This method does not consider permissions.
                 */
                // @ts-ignore
                public tabComplete(sender: org.bukkit.command.CommandSender, alias: string, args: string): java.util.List;
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}