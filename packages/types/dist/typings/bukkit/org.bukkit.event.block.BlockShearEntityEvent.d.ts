declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockShearEntityEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(dispenser: org.bukkit.block.Block, sheared: org.bukkit.entity.Entity, tool: org.bukkit.inventory.ItemStack)
                    /**
                     * Gets the entity that was sheared.
                     */
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Entity;
                    /**
                     * Gets the item used to shear this sheep.
                     */
                    // @ts-ignore
                    public getTool(): org.bukkit.inventory.ItemStack;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancelled: boolean): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
