declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                 class ServerCommandEvent extends cn.nukkit.event.server.ServerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(sender: cn.nukkit.command.CommandSender, command: string)
                    // @ts-ignore
                    protected command: string;
                    // @ts-ignore
                    protected sender: cn.nukkit.command.CommandSender;
                    // @ts-ignore
                    public getSender(): cn.nukkit.command.CommandSender;
                    // @ts-ignore
                    public getCommand(): string;
                    // @ts-ignore
                    public setCommand(command: string): void;
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                }
            }
        }
    }
}
