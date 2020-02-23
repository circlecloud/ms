declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                 class RemoteServerCommandEvent extends cn.nukkit.event.server.ServerCommandEvent {
                    // @ts-ignore
                    constructor(sender: cn.nukkit.command.CommandSender, command: string)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                }
            }
        }
    }
}
