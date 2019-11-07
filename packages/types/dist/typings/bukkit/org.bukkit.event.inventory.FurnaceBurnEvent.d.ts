declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class FurnaceBurnEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(furnace: org.bukkit.block.Block, fuel: org.bukkit.inventory.ItemStack, burnTime: number)
                    /**
                     * Gets the fuel ItemStack for this event
                     */
                    // @ts-ignore
                    public getFuel(): org.bukkit.inventory.ItemStack;
                    /**
                     * Gets the burn time for this fuel
                     */
                    // @ts-ignore
                    public getBurnTime(): number;
                    /**
                     * Sets the burn time for this fuel
                     */
                    // @ts-ignore
                    public setBurnTime(burnTime: number): void;
                    /**
                     * Gets whether the furnace's fuel is burning or not.
                     */
                    // @ts-ignore
                    public isBurning(): boolean;
                    /**
                     * Sets whether the furnace's fuel is burning or not.
                     */
                    // @ts-ignore
                    public setBurning(burning: boolean): void;
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
