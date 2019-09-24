declare namespace org {
    namespace bukkit {
        namespace command {
            // @ts-ignore
            interface CommandExecutor {
                /**
                 * Executes the given command, returning its success.
                 * <br>
                 * If false is returned, then the "usage" plugin.yml entry for this command
                 * (if defined) will be sent to the player.
                 */
                 onCommand(sender: org.bukkit.command.CommandSender, command: org.bukkit.command.Command, label: string, args: string): boolean;
            }
        }
    }
}
