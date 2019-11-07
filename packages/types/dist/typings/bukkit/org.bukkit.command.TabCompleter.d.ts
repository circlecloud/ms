declare namespace org {
    namespace bukkit {
        namespace command {
            // @ts-ignore
            interface TabCompleter {
                /**
                 * Requests a list of possible completions for a command argument.
                 */
                // @ts-ignore
                 onTabComplete(sender: org.bukkit.command.CommandSender, command: org.bukkit.command.Command, alias: string, args: string): java.util.List;
            }
        }
    }
}
