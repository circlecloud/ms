declare namespace org {
    namespace bukkit {
        namespace command {
            abstract class Command {
                constructor(name: string)
                constructor(name: string, description: string, usageMessage: string, aliases: any[] /*java.util.List*/)
                protected description: string;
                protected usageMessage: string;
                /**
                 * Executes the command, returning its success
                 */
                public abstract execute(sender: org.bukkit.command.CommandSender, commandLabel: string, args: string): boolean;
                /**
                 * Executed on tab completion for this command, returning a list of
                 * options the player can tab through.
                 */
                public tabComplete(sender: org.bukkit.command.CommandSender, alias: string, args: string): any[] /*java.util.List*/;
                /**
                 * Executed on tab completion for this command, returning a list of
                 * options the player can tab through.
                 */
                public tabComplete(sender: org.bukkit.command.CommandSender, alias: string, args: string, location: org.bukkit.Location): any[] /*java.util.List*/;
                /**
                 * Returns the name of this command
                 */
                public getName(): string;
                /**
                 * Sets the name of this command.
                 * <p>
                 * May only be used before registering the command.
                 * Will return true if the new name is set, and false
                 * if the command has already been registered.
                 */
                public setName(name: string): boolean;
                /**
                 * Gets the permission required by users to be able to perform this
                 * command
                 */
                public getPermission(): string;
                /**
                 * Sets the permission required by users to be able to perform this
                 * command
                 */
                public setPermission(permission: string): void;
                /**
                 * Tests the given {@link CommandSender} to see if they can perform this
                 * command.
                 * <p>
                 * If they do not have permission, they will be informed that they cannot
                 * do this.
                 */
                public testPermission(target: org.bukkit.command.CommandSender): boolean;
                /**
                 * Tests the given {@link CommandSender} to see if they can perform this
                 * command.
                 * <p>
                 * No error is sent to the sender.
                 */
                public testPermissionSilent(target: org.bukkit.command.CommandSender): boolean;
                /**
                 * Returns the label for this command
                 */
                public getLabel(): string;
                /**
                 * Sets the label of this command.
                 * <p>
                 * May only be used before registering the command.
                 * Will return true if the new name is set, and false
                 * if the command has already been registered.
                 */
                public setLabel(name: string): boolean;
                /**
                 * Registers this command to a CommandMap.
                 * Once called it only allows changes the registered CommandMap
                 */
                public register(commandMap: org.bukkit.command.CommandMap): boolean;
                /**
                 * Unregisters this command from the passed CommandMap applying any
                 * outstanding changes
                 */
                public unregister(commandMap: org.bukkit.command.CommandMap): boolean;
                /**
                 * Returns the current registered state of this command
                 */
                public isRegistered(): boolean;
                /**
                 * Returns a list of active aliases of this command
                 */
                public getAliases(): any[] /*java.util.List*/;
                /**
                 * Returns a message to be displayed on a failed permission check for this
                 * command
                 */
                public getPermissionMessage(): string;
                /**
                 * Gets a brief description of this command
                 */
                public getDescription(): string;
                /**
                 * Gets an example usage of this command
                 */
                public getUsage(): string;
                /**
                 * Sets the list of aliases to request on registration for this command.
                 * This is not effective outside of defining aliases in the {@link
                 * PluginDescriptionFile#getCommands()} (under the
                 * `<code>aliases</code>' node) is equivalent to this method.
                 */
                public setAliases(aliases: any[] /*java.util.List*/): org.bukkit.command.Command;
                /**
                 * Sets a brief description of this command. Defining a description in the
                 * {@link PluginDescriptionFile#getCommands()} (under the
                 * `<code>description</code>' node) is equivalent to this method.
                 */
                public setDescription(description: string): org.bukkit.command.Command;
                /**
                 * Sets the message sent when a permission check fails
                 */
                public setPermissionMessage(permissionMessage: string): org.bukkit.command.Command;
                /**
                 * Sets the example usage of this command
                 */
                public setUsage(usage: string): org.bukkit.command.Command;
                public static broadcastCommandMessage(source: org.bukkit.command.CommandSender, message: string): void;
                public static broadcastCommandMessage(source: org.bukkit.command.CommandSender, message: string, sendToSource: boolean): void;
                public toString(): string;
            }
        }
    }
}
