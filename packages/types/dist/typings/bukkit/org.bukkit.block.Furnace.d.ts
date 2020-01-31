declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface Furnace extends org.bukkit.block.Container {
                /**
                 * Get burn time.
                 */
                // @ts-ignore
                 getBurnTime(): number;
                /**
                 * Set burn time.
                 * A burn time greater than 0 will cause this block to be lit, whilst a time
                 * less than 0 will extinguish it.
                 */
                // @ts-ignore
                 setBurnTime(burnTime: number): void;
                /**
                 * Get cook time.
                 * This is the amount of time the item has been cooking for.
                 */
                // @ts-ignore
                 getCookTime(): number;
                /**
                 * Set cook time.
                 * This is the amount of time the item has been cooking for.
                 */
                // @ts-ignore
                 setCookTime(cookTime: number): void;
                /**
                 * Get cook time total.
                 * This is the amount of time the item is required to cook for.
                 */
                // @ts-ignore
                 getCookTimeTotal(): number;
                /**
                 * Set cook time.
                 * This is the amount of time the item is required to cook for.
                 */
                // @ts-ignore
                 setCookTimeTotal(cookTimeTotal: number): void;
                // @ts-ignore
                 getInventory(): org.bukkit.inventory.FurnaceInventory;
                // @ts-ignore
                 getSnapshotInventory(): org.bukkit.inventory.FurnaceInventory;
            }
        }
    }
}