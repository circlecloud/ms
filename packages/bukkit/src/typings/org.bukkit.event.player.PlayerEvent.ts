declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                abstract class PlayerEvent {
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
