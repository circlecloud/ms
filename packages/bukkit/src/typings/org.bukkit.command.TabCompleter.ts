declare namespace org {
    namespace bukkit {
        namespace command {
            class TabCompleter {
                /**
                 * Requests a list of possible completions for a command argument.
                 */
                public onTabComplete(sender: org.bukkit.command.CommandSender, command: org.bukkit.command.Command, alias: string, args: string): any[] /*java.util.List*/;
            }
        }
    }
}
