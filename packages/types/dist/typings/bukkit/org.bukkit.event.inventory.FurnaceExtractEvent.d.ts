// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class FurnaceExtractEvent extends org.bukkit.event.block.BlockExpEvent {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, block: org.bukkit.block.Block, itemType: org.bukkit.Material, itemAmount: number, exp: number)
                    /**
                     * Get the player that triggered the event
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.Player;
                    /**
                     * Get the Material of the item being retrieved
                     */
                    // @ts-ignore
                    public getItemType(): org.bukkit.Material;
                    /**
                     * Get the item count being retrieved
                     */
                    // @ts-ignore
                    public getItemAmount(): number;
                }
            }
        }
    }
}
