// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace command {
            // @ts-ignore
            interface CommandMap {
                /**
                 * Registers all the commands belonging to a certain plugin.
                 * <p>
                 * Caller can use:-
                 * <ul>
                 * <li>command.getName() to determine the label registered for this
                 * command
                 * <li>command.getAliases() to determine the aliases which where
                 * registered
                 * </ul>
                 */
                // @ts-ignore
                 registerAll(fallbackPrefix: string, commands: java.util.List): void;
                /**
                 * Registers a command. Returns true on success; false if name is already
                 * taken and fallback had to be used.
                 * <p>
                 * Caller can use:-
                 * <ul>
                 * <li>command.getName() to determine the label registered for this
                 * command
                 * <li>command.getAliases() to determine the aliases which where
                 * registered
                 * </ul>
                 */
                // @ts-ignore
                 register(label: string, fallbackPrefix: string, command: org.bukkit.command.Command): boolean;
                /**
                 * Registers a command. Returns true on success; false if name is already
                 * taken and fallback had to be used.
                 * <p>
                 * Caller can use:-
                 * <ul>
                 * <li>command.getName() to determine the label registered for this
                 * command
                 * <li>command.getAliases() to determine the aliases which where
                 * registered
                 * </ul>
                 */
                // @ts-ignore
                 register(fallbackPrefix: string, command: org.bukkit.command.Command): boolean;
                /**
                 * Looks for the requested command and executes it if found.
                 */
                // @ts-ignore
                 dispatch(sender: org.bukkit.command.CommandSender, cmdLine: string): boolean;
                /**
                 * Clears all registered commands.
                 */
                // @ts-ignore
                 clearCommands(): void;
                /**
                 * Gets the command registered to the specified name
                 */
                // @ts-ignore
                 getCommand(name: string): org.bukkit.command.Command;
                /**
                 * Looks for the requested command and executes an appropriate
                 * tab-completer if found. This method will also tab-complete partial
                 * commands.
                 */
                // @ts-ignore
                 tabComplete(sender: org.bukkit.command.CommandSender, cmdLine: string): java.util.List;
                /**
                 * Looks for the requested command and executes an appropriate
                 * tab-completer if found. This method will also tab-complete partial
                 * commands.
                 */
                // @ts-ignore
                 tabComplete(sender: org.bukkit.command.CommandSender, cmdLine: string, location: org.bukkit.Location): java.util.List;
            }
        }
    }
}
