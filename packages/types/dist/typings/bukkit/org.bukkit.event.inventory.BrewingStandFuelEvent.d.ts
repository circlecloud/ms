declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class BrewingStandFuelEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(brewingStand: org.bukkit.block.Block, fuel: org.bukkit.inventory.ItemStack, fuelPower: number)
                    /**
                     * Gets the ItemStack of the fuel before the amount was subtracted.
                     */
                    // @ts-ignore
                    public getFuel(): org.bukkit.inventory.ItemStack;
                    /**
                     * Gets the fuel power for this fuel. Each unit of power can fuel one
                     * brewing operation.
                     */
                    // @ts-ignore
                    public getFuelPower(): number;
                    /**
                     * Sets the fuel power for this fuel. Each unit of power can fuel one
                     * brewing operation.
                     */
                    // @ts-ignore
                    public setFuelPower(fuelPower: number): void;
                    /**
                     * Gets whether the brewing stand's fuel will be reduced / consumed or not.
                     */
                    // @ts-ignore
                    public isConsuming(): boolean;
                    /**
                     * Sets whether the brewing stand's fuel will be reduced / consumed or not.
                     */
                    // @ts-ignore
                    public setConsuming(consuming: boolean): void;
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
