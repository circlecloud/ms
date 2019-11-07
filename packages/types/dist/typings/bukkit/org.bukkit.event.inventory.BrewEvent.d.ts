declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class BrewEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(brewer: org.bukkit.block.Block, contents: org.bukkit.inventory.BrewerInventory, fuelLevel: number)
                    /**
                     * Gets the contents of the Brewing Stand.
                     */
                    // @ts-ignore
                    public getContents(): org.bukkit.inventory.BrewerInventory;
                    /**
                     * Gets the remaining fuel level.
                     */
                    // @ts-ignore
                    public getFuelLevel(): number;
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
