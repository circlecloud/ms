declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerPickupArrowEvent {
                    constructor(player: org.bukkit.entity.Player, item: org.bukkit.entity.Item, arrow: org.bukkit.entity.AbstractArrow)
                    /**
                     * Get the arrow being picked up by the player
                     */
                    public getArrow(): org.bukkit.entity.AbstractArrow;
                }
            }
        }
    }
}
