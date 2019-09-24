declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                abstract class PlayerEvent extends org.bukkit.event.Event {
                    constructor(who: org.bukkit.entity.Player)
                    protected player: org.bukkit.entity.Player;
                    /**
                     * Returns the player involved in this event
                     */
                    public getPlayer(): org.bukkit.entity.Player;
                }
            }
        }
    }
}
