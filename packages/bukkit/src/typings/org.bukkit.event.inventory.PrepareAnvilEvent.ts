declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                class PrepareAnvilEvent {
                    constructor(inventory: org.bukkit.inventory.InventoryView, result: org.bukkit.inventory.ItemStack)
                    public getInventory(): org.bukkit.inventory.AnvilInventory;
                    /**
                     * Get result item, may be null.
                     */
                    public getResult(): org.bukkit.inventory.ItemStack;
                    public setResult(result: org.bukkit.inventory.ItemStack): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
