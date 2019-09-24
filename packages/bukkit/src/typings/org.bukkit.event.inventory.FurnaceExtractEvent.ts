declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class FurnaceExtractEvent extends org.bukkit.event.block.BlockExpEvent {
                    constructor(player: org.bukkit.entity.Player, block: org.bukkit.block.Block, itemType: org.bukkit.Material, itemAmount: number, exp: number)
                    /**
                     * Get the player that triggered the event
                     */
                    public getPlayer(): org.bukkit.entity.Player;
                    /**
                     * Get the Material of the item being retrieved
                     */
                    public getItemType(): org.bukkit.Material;
                    /**
                     * Get the item count being retrieved
                     */
                    public getItemAmount(): number;
                }
            }
        }
    }
}
