// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockMultiPlaceEvent extends org.bukkit.event.block.BlockPlaceEvent {
                    // @ts-ignore
                    constructor(states: java.util.List, clicked: org.bukkit.block.Block, itemInHand: org.bukkit.inventory.ItemStack, thePlayer: org.bukkit.entity.Player, canBuild: boolean)
                    /**
                     * Gets a list of blockstates for all blocks which were replaced by the
                     * placement of the new blocks. Most of these blocks will just have a
                     * Material type of AIR.
                     */
                    // @ts-ignore
                    public getReplacedBlockStates(): java.util.List;
                }
            }
        }
    }
}
