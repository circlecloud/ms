declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockCookEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    constructor(block: org.bukkit.block.Block, source: org.bukkit.inventory.ItemStack, result: org.bukkit.inventory.ItemStack)
                    /**
                     * Gets the smelted ItemStack for this event
                     */
                    public getSource(): org.bukkit.inventory.ItemStack;
                    /**
                     * Gets the resultant ItemStack for this event
                     */
                    public getResult(): org.bukkit.inventory.ItemStack;
                    /**
                     * Sets the resultant ItemStack for this event
                     */
                    public setResult(result: org.bukkit.inventory.ItemStack): void;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
