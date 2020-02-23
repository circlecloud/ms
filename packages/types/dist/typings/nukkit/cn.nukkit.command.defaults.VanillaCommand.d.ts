declare namespace cn {
    namespace nukkit {
        namespace command {
            namespace defaults {
                // @ts-ignore
                abstract class VanillaCommand extends cn.nukkit.command.Command {
                    // @ts-ignore
                    constructor(name: string)
                    // @ts-ignore
                    constructor(name: string, description: string)
                    // @ts-ignore
                    constructor(name: string, description: string, usageMessage: string)
                    // @ts-ignore
                    constructor(name: string, description: string, usageMessage: string, aliases: string)
                }
            }
        }
    }
}
