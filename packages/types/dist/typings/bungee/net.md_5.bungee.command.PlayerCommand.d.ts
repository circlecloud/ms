declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace command {
                // @ts-ignore
                abstract class PlayerCommand extends net.md_5.bungee.api.plugin.Command implements net.md_5.bungee.api.plugin.TabExecutor {
                    // @ts-ignore
                    constructor(name: string)
                    // @ts-ignore
                    constructor(name: string, permission: string, aliases: string)
                    // @ts-ignore
                    public onTabComplete(sender: any /*net.md_5.bungee.api.CommandSender*/, args: string): java.lang.Iterable;
                }
            }
        }
    }
}
