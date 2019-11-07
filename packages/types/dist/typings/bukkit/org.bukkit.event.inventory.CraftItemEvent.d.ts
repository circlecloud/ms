declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class CraftItemEvent extends org.bukkit.event.inventory.InventoryClickEvent {
                    // @ts-ignore
                    constructor(recipe: org.bukkit.inventory.Recipe, what: org.bukkit.inventory.InventoryView, type: org.bukkit.event.inventory.InventoryType.SlotType, slot: number, click: org.bukkit.event.inventory.ClickType, action: org.bukkit.event.inventory.InventoryAction)
                    // @ts-ignore
                    constructor(recipe: org.bukkit.inventory.Recipe, what: org.bukkit.inventory.InventoryView, type: org.bukkit.event.inventory.InventoryType.SlotType, slot: number, click: org.bukkit.event.inventory.ClickType, action: org.bukkit.event.inventory.InventoryAction, key: number)
                    // @ts-ignore
                    public getRecipe(): org.bukkit.inventory.Recipe;
                    // @ts-ignore
                    public getInventory(): org.bukkit.inventory.CraftingInventory;
                }
            }
        }
    }
}
