declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerPickupArrowEvent extends org.bukkit.event.player.PlayerPickupItemEvent {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, item: org.bukkit.entity.Item, arrow: org.bukkit.entity.AbstractArrow)
                    /**
                     * Get the arrow being picked up by the player
                     */
                    // @ts-ignore
                    public getArrow(): org.bukkit.entity.AbstractArrow;
                }
            }
        }
    }
}
