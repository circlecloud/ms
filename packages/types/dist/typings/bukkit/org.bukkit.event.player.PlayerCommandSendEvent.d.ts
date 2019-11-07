declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerCommandSendEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, commands: java.util.Collection)
                    /**
                     * Returns a mutable collection of all top level commands to be sent.
                     * <br>
                     * It is not legal to add entries to this collection, only remove them.
                     * Behaviour of adding entries is undefined.
                     */
                    // @ts-ignore
                    public getCommands(): java.util.Collection;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
