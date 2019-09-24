declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class CraftItemEvent extends org.bukkit.event.inventory.InventoryClickEvent {
                    constructor(recipe: org.bukkit.inventory.Recipe, what: org.bukkit.inventory.InventoryView, type: org.bukkit.event.inventory.InventoryType.SlotType, slot: number, click: org.bukkit.event.inventory.ClickType, action: org.bukkit.event.inventory.InventoryAction)
                    constructor(recipe: org.bukkit.inventory.Recipe, what: org.bukkit.inventory.InventoryView, type: org.bukkit.event.inventory.InventoryType.SlotType, slot: number, click: org.bukkit.event.inventory.ClickType, action: org.bukkit.event.inventory.InventoryAction, key: number)
                    public getRecipe(): org.bukkit.inventory.Recipe;
                    public getInventory(): org.bukkit.inventory.CraftingInventory;
                }
            }
        }
    }
}
