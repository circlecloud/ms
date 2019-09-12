declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                class InventoryType {
                    public static CHEST: org.bukkit.event.inventory.InventoryType;
                    public static DISPENSER: org.bukkit.event.inventory.InventoryType;
                    public static DROPPER: org.bukkit.event.inventory.InventoryType;
                    public static FURNACE: org.bukkit.event.inventory.InventoryType;
                    public static WORKBENCH: org.bukkit.event.inventory.InventoryType;
                    public static CRAFTING: org.bukkit.event.inventory.InventoryType;
                    public static ENCHANTING: org.bukkit.event.inventory.InventoryType;
                    public static BREWING: org.bukkit.event.inventory.InventoryType;
                    public static PLAYER: org.bukkit.event.inventory.InventoryType;
                    public static CREATIVE: org.bukkit.event.inventory.InventoryType;
                    public static MERCHANT: org.bukkit.event.inventory.InventoryType;
                    public static ENDER_CHEST: org.bukkit.event.inventory.InventoryType;
                    public static ANVIL: org.bukkit.event.inventory.InventoryType;
                    public static BEACON: org.bukkit.event.inventory.InventoryType;
                    public static HOPPER: org.bukkit.event.inventory.InventoryType;
                    public static SHULKER_BOX: org.bukkit.event.inventory.InventoryType;
                    public static BARREL: org.bukkit.event.inventory.InventoryType;
                    public static BLAST_FURNACE: org.bukkit.event.inventory.InventoryType;
                    public static LECTERN: org.bukkit.event.inventory.InventoryType;
                    public static SMOKER: org.bukkit.event.inventory.InventoryType;
                    public static LOOM: org.bukkit.event.inventory.InventoryType;
                    public static CARTOGRAPHY: org.bukkit.event.inventory.InventoryType;
                    public static GRINDSTONE: org.bukkit.event.inventory.InventoryType;
                    public static STONECUTTER: org.bukkit.event.inventory.InventoryType;
                    public static values(): org.bukkit.event.inventory.InventoryType[];
                    public static valueOf(name: string): org.bukkit.event.inventory.InventoryType;
                    public getDefaultSize(): number;
                    public getDefaultTitle(): string;
                    /**
                     * Denotes that this InventoryType can be created via the normal
                     * {@link org.bukkit.Bukkit#createInventory} methods.
                     */
                    public isCreatable(): boolean;
                }
            }
        }
    }
}
