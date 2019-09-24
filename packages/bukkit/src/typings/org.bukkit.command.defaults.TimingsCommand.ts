declare namespace org {
    namespace bukkit {
        namespace command {
            namespace defaults {
                // @ts-ignore
                 class TimingsCommand {
                    constructor(name: string)
                    public execute(sender: org.bukkit.command.CommandSender, currentAlias: string, args: string): boolean;
                    public tabComplete(sender: org.bukkit.command.CommandSender, alias: string, args: string): any[] /*java.util.List*/;
                }
            }
        }
    }
}
