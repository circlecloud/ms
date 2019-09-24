declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class FurnaceBurnEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    constructor(furnace: org.bukkit.block.Block, fuel: org.bukkit.inventory.ItemStack, burnTime: number)
                    /**
                     * Gets the fuel ItemStack for this event
                     */
                    public getFuel(): org.bukkit.inventory.ItemStack;
                    /**
                     * Gets the burn time for this fuel
                     */
                    public getBurnTime(): number;
                    /**
                     * Sets the burn time for this fuel
                     */
                    public setBurnTime(burnTime: number): void;
                    /**
                     * Gets whether the furnace's fuel is burning or not.
                     */
                    public isBurning(): boolean;
                    /**
                     * Sets whether the furnace's fuel is burning or not.
                     */
                    public setBurning(burning: boolean): void;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
