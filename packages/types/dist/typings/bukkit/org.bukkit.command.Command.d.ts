// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace command {
            // @ts-ignore
            abstract class Command extends java.lang.Object {
                // @ts-ignore
                constructor(name: string)
                // @ts-ignore
                constructor(name: string, description: string, usageMessage: string, aliases: java.util.List)
                // @ts-ignore
                protected description: string;
                // @ts-ignore
                protected usageMessage: string;
                /**
                 * Executes the command, returning its success
                 */
                // @ts-ignore
                public abstract execute(sender: org.bukkit.command.CommandSender, commandLabel: string, args: string): boolean;
                /**
                 * Executed on tab completion for this command, returning a list of
                 * options the player can tab through.
                 */
                // @ts-ignore
                public tabComplete(sender: org.bukkit.command.CommandSender, alias: string, args: string): java.util.List;
                /**
                 * Executed on tab completion for this command, returning a list of
                 * options the player can tab through.
                 */
                // @ts-ignore
                public tabComplete(sender: org.bukkit.command.CommandSender, alias: string, args: string, location: org.bukkit.Location): java.util.List;
                /**
                 * Returns the name of this command
                 */
                // @ts-ignore
                public getName(): string;
                /**
                 * Sets the name of this command.
                 * <p>
                 * May only be used before registering the command.
                 * Will return true if the new name is set, and false
                 * if the command has already been registered.
                 */
                // @ts-ignore
                public setName(name: string): boolean;
                /**
                 * Gets the permission required by users to be able to perform this
                 * command
                 */
                // @ts-ignore
                public getPermission(): string;
                /**
                 * Sets the permission required by users to be able to perform this
                 * command
                 */
                // @ts-ignore
                public setPermission(permission: string): void;
                /**
                 * Tests the given {@link CommandSender} to see if they can perform this
                 * command.
                 * <p>
                 * If they do not have permission, they will be informed that they cannot
                 * do this.
                 */
                // @ts-ignore
                public testPermission(target: org.bukkit.command.CommandSender): boolean;
                /**
                 * Tests the given {@link CommandSender} to see if they can perform this
                 * command.
                 * <p>
                 * No error is sent to the sender.
                 */
                // @ts-ignore
                public testPermissionSilent(target: org.bukkit.command.CommandSender): boolean;
                /**
                 * Returns the label for this command
                 */
                // @ts-ignore
                public getLabel(): string;
                /**
                 * Sets the label of this command.
                 * <p>
                 * May only be used before registering the command.
                 * Will return true if the new name is set, and false
                 * if the command has already been registered.
                 */
                // @ts-ignore
                public setLabel(name: string): boolean;
                /**
                 * Registers this command to a CommandMap.
                 * Once called it only allows changes the registered CommandMap
                 */
                // @ts-ignore
                public register(commandMap: org.bukkit.command.CommandMap): boolean;
                /**
                 * Unregisters this command from the passed CommandMap applying any
                 * outstanding changes
                 */
                // @ts-ignore
                public unregister(commandMap: org.bukkit.command.CommandMap): boolean;
                /**
                 * Returns the current registered state of this command
                 */
                // @ts-ignore
                public isRegistered(): boolean;
                /**
                 * Returns a list of active aliases of this command
                 */
                // @ts-ignore
                public getAliases(): java.util.List;
                /**
                 * Returns a message to be displayed on a failed permission check for this
                 * command
                 */
                // @ts-ignore
                public getPermissionMessage(): string;
                /**
                 * Gets a brief description of this command
                 */
                // @ts-ignore
                public getDescription(): string;
                /**
                 * Gets an example usage of this command
                 */
                // @ts-ignore
                public getUsage(): string;
                /**
                 * Sets the list of aliases to request on registration for this command.
                 * This is not effective outside of defining aliases in the {@link
                 * PluginDescriptionFile#getCommands()} (under the
                 * `<code>aliases</code>' node) is equivalent to this method.
                 */
                // @ts-ignore
                public setAliases(aliases: java.util.List): org.bukkit.command.Command;
                /**
                 * Sets a brief description of this command. Defining a description in the
                 * {@link PluginDescriptionFile#getCommands()} (under the
                 * `<code>description</code>' node) is equivalent to this method.
                 */
                // @ts-ignore
                public setDescription(description: string): org.bukkit.command.Command;
                /**
                 * Sets the message sent when a permission check fails
                 */
                // @ts-ignore
                public setPermissionMessage(permissionMessage: string): org.bukkit.command.Command;
                /**
                 * Sets the example usage of this command
                 */
                // @ts-ignore
                public setUsage(usage: string): org.bukkit.command.Command;
                // @ts-ignore
                public static broadcastCommandMessage(source: org.bukkit.command.CommandSender, message: string): void;
                // @ts-ignore
                public static broadcastCommandMessage(source: org.bukkit.command.CommandSender, message: string, sendToSource: boolean): void;
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
