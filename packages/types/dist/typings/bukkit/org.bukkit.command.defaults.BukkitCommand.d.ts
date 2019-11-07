declare namespace org {
    namespace bukkit {
        namespace command {
            namespace defaults {
                // @ts-ignore
                abstract class BukkitCommand extends org.bukkit.command.Command {
                    // @ts-ignore
                    constructor(name: string)
                    // @ts-ignore
                    constructor(name: string, description: string, usageMessage: string, aliases: java.util.List)
                }
            }
        }
    }
}
