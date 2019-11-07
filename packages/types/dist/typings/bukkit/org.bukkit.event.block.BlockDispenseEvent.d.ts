declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockDispenseEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, dispensed: org.bukkit.inventory.ItemStack, velocity: org.bukkit.util.Vector)
                    /**
                     * Gets the item that is being dispensed. Modifying the returned item will
                     * have no effect, you must use {@link
                     * #setItem(org.bukkit.inventory.ItemStack)} instead.
                     */
                    // @ts-ignore
                    public getItem(): org.bukkit.inventory.ItemStack;
                    /**
                     * Sets the item being dispensed.
                     */
                    // @ts-ignore
                    public setItem(item: org.bukkit.inventory.ItemStack): void;
                    /**
                     * Gets the velocity.
                     * <p>
                     * Note: Modifying the returned Vector will not change the velocity, you
                     * must use {@link #setVelocity(org.bukkit.util.Vector)} instead.
                     */
                    // @ts-ignore
                    public getVelocity(): org.bukkit.util.Vector;
                    /**
                     * Sets the velocity of the item being dispensed.
                     */
                    // @ts-ignore
                    public setVelocity(vel: org.bukkit.util.Vector): void;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
