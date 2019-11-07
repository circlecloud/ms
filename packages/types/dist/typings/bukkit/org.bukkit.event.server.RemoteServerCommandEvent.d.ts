declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                 class RemoteServerCommandEvent extends org.bukkit.event.server.ServerCommandEvent {
                    // @ts-ignore
                    constructor(sender: org.bukkit.command.CommandSender, command: string)
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
