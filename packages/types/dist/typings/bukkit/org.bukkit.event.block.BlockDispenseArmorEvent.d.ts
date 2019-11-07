declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockDispenseArmorEvent extends org.bukkit.event.block.BlockDispenseEvent {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, dispensed: org.bukkit.inventory.ItemStack, target: org.bukkit.entity.LivingEntity)
                    /**
                     * Get the living entity on which the armor was dispensed.
                     */
                    // @ts-ignore
                    public getTargetEntity(): org.bukkit.entity.LivingEntity;
                }
            }
        }
    }
}
