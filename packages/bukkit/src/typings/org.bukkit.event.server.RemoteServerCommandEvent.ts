declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                class RemoteServerCommandEvent {
                    constructor(sender: org.bukkit.command.CommandSender, command: string)
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
