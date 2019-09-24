declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockShearEntityEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    constructor(dispenser: org.bukkit.block.Block, sheared: org.bukkit.entity.Entity, tool: org.bukkit.inventory.ItemStack)
                    /**
                     * Gets the entity that was sheared.
                     */
                    public getEntity(): org.bukkit.entity.Entity;
                    /**
                     * Gets the item used to shear this sheep.
                     */
                    public getTool(): org.bukkit.inventory.ItemStack;
                    public isCancelled(): boolean;
                    public setCancelled(cancelled: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
