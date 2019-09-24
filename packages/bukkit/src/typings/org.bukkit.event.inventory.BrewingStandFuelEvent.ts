declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class BrewingStandFuelEvent implements org.bukkit.event.Cancellable {
                    constructor(brewingStand: org.bukkit.block.Block, fuel: org.bukkit.inventory.ItemStack, fuelPower: number)
                    /**
                     * Gets the ItemStack of the fuel before the amount was subtracted.
                     */
                    public getFuel(): org.bukkit.inventory.ItemStack;
                    /**
                     * Gets the fuel power for this fuel. Each unit of power can fuel one
                     * brewing operation.
                     */
                    public getFuelPower(): number;
                    /**
                     * Sets the fuel power for this fuel. Each unit of power can fuel one
                     * brewing operation.
                     */
                    public setFuelPower(fuelPower: number): void;
                    /**
                     * Gets whether the brewing stand's fuel will be reduced / consumed or not.
                     */
                    public isConsuming(): boolean;
                    /**
                     * Sets whether the brewing stand's fuel will be reduced / consumed or not.
                     */
                    public setConsuming(consuming: boolean): void;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
