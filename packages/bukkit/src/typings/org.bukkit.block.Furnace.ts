declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface Furnace extends org.bukkit.block.Container {
                /**
                 * Get burn time.
                 */
                 getBurnTime(): number;
                /**
                 * Set burn time.
                 * A burn time greater than 0 will cause this block to be lit, whilst a time
                 * less than 0 will extinguish it.
                 */
                 setBurnTime(burnTime: number): void;
                /**
                 * Get cook time.
                 * This is the amount of time the item has been cooking for.
                 */
                 getCookTime(): number;
                /**
                 * Set cook time.
                 * This is the amount of time the item has been cooking for.
                 */
                 setCookTime(cookTime: number): void;
                /**
                 * Get cook time total.
                 * This is the amount of time the item is required to cook for.
                 */
                 getCookTimeTotal(): number;
                /**
                 * Set cook time.
                 * This is the amount of time the item is required to cook for.
                 */
                 setCookTimeTotal(cookTimeTotal: number): void;
                 getInventory(): org.bukkit.inventory.FurnaceInventory;
                 getSnapshotInventory(): org.bukkit.inventory.FurnaceInventory;
            }
        }
    }
}
