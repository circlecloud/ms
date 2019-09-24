declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockMultiPlaceEvent extends org.bukkit.event.block.BlockPlaceEvent {
                    constructor(states: any[] /*java.util.List*/, clicked: org.bukkit.block.Block, itemInHand: org.bukkit.inventory.ItemStack, thePlayer: org.bukkit.entity.Player, canBuild: boolean)
                    /**
                     * Gets a list of blockstates for all blocks which were replaced by the
                     * placement of the new blocks. Most of these blocks will just have a
                     * Material type of AIR.
                     */
                    public getReplacedBlockStates(): any[] /*java.util.List*/;
                }
            }
        }
    }
}
