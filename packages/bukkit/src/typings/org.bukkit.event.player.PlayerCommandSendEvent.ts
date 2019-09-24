declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerCommandSendEvent {
                    constructor(player: org.bukkit.entity.Player, commands: any[] /*java.util.Collection*/)
                    /**
                     * Returns a mutable collection of all top level commands to be sent.
                     * <br>
                     * It is not legal to add entries to this collection, only remove them.
                     * Behaviour of adding entries is undefined.
                     */
                    public getCommands(): any[] /*java.util.Collection*/;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
