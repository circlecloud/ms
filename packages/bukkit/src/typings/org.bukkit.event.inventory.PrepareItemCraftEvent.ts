declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class PrepareItemCraftEvent extends org.bukkit.event.inventory.InventoryEvent {
                    constructor(what: org.bukkit.inventory.CraftingInventory, view: org.bukkit.inventory.InventoryView, isRepair: boolean)
                    /**
                     * Get the recipe that has been formed. If this event was triggered by a
                     * tool repair, this will be a temporary shapeless recipe representing the
                     * repair.
                     */
                    public getRecipe(): org.bukkit.inventory.Recipe;
                    public getInventory(): org.bukkit.inventory.CraftingInventory;
                    /**
                     * Check if this event was triggered by a tool repair operation rather
                     * than a crafting recipe.
                     */
                    public isRepair(): boolean;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
