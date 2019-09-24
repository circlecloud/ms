declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class BrewEvent implements org.bukkit.event.Cancellable {
                    constructor(brewer: org.bukkit.block.Block, contents: org.bukkit.inventory.BrewerInventory, fuelLevel: number)
                    /**
                     * Gets the contents of the Brewing Stand.
                     */
                    public getContents(): org.bukkit.inventory.BrewerInventory;
                    /**
                     * Gets the remaining fuel level.
                     */
                    public getFuelLevel(): number;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
