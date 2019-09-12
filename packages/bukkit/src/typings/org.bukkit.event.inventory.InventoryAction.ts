declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                class InventoryAction {
                    public static NOTHING: org.bukkit.event.inventory.InventoryAction;
                    public static PICKUP_ALL: org.bukkit.event.inventory.InventoryAction;
                    public static PICKUP_SOME: org.bukkit.event.inventory.InventoryAction;
                    public static PICKUP_HALF: org.bukkit.event.inventory.InventoryAction;
                    public static PICKUP_ONE: org.bukkit.event.inventory.InventoryAction;
                    public static PLACE_ALL: org.bukkit.event.inventory.InventoryAction;
                    public static PLACE_SOME: org.bukkit.event.inventory.InventoryAction;
                    public static PLACE_ONE: org.bukkit.event.inventory.InventoryAction;
                    public static SWAP_WITH_CURSOR: org.bukkit.event.inventory.InventoryAction;
                    public static DROP_ALL_CURSOR: org.bukkit.event.inventory.InventoryAction;
                    public static DROP_ONE_CURSOR: org.bukkit.event.inventory.InventoryAction;
                    public static DROP_ALL_SLOT: org.bukkit.event.inventory.InventoryAction;
                    public static DROP_ONE_SLOT: org.bukkit.event.inventory.InventoryAction;
                    public static MOVE_TO_OTHER_INVENTORY: org.bukkit.event.inventory.InventoryAction;
                    public static HOTBAR_MOVE_AND_READD: org.bukkit.event.inventory.InventoryAction;
                    public static HOTBAR_SWAP: org.bukkit.event.inventory.InventoryAction;
                    public static CLONE_STACK: org.bukkit.event.inventory.InventoryAction;
                    public static COLLECT_TO_CURSOR: org.bukkit.event.inventory.InventoryAction;
                    public static UNKNOWN: org.bukkit.event.inventory.InventoryAction;
                    public static values(): org.bukkit.event.inventory.InventoryAction[];
                    public static valueOf(name: string): org.bukkit.event.inventory.InventoryAction;
                }
            }
        }
    }
}
