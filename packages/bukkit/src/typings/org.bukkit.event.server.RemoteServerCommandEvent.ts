declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                 class RemoteServerCommandEvent extends org.bukkit.event.server.ServerCommandEvent {
                    constructor(sender: org.bukkit.command.CommandSender, command: string)
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
