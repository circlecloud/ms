declare namespace org {
    namespace bukkit {
        namespace command {
            namespace defaults {
                // @ts-ignore
                abstract class BukkitCommand {
                    constructor(name: string)
                    constructor(name: string, description: string, usageMessage: string, aliases: any[] /*java.util.List*/)
                }
            }
        }
    }
}
