declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                abstract class PlayerEvent extends org.bukkit.event.Event {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player)
                    // @ts-ignore
                    protected player: org.bukkit.entity.Player;
                    /**
                     * Returns the player involved in this event
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.Player;
                }
            }
        }
    }
}
