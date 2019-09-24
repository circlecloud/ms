declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class InventoryCreativeEvent {
                    constructor(what: org.bukkit.inventory.InventoryView, type: org.bukkit.event.inventory.InventoryType.SlotType, slot: number, newItem: org.bukkit.inventory.ItemStack)
                    public getCursor(): org.bukkit.inventory.ItemStack;
                    public setCursor(item: org.bukkit.inventory.ItemStack): void;
                }
            }
        }
    }
}
