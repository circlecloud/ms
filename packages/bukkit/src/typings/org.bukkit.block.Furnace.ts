declare namespace org {
    namespace bukkit {
        namespace block {
            class Furnace {
                /**
                 * Get burn time.
                 */
                public getBurnTime(): number;
                /**
                 * Set burn time.
                 * A burn time greater than 0 will cause this block to be lit, whilst a time
                 * less than 0 will extinguish it.
                 */
                public setBurnTime(burnTime: number): void;
                /**
                 * Get cook time.
                 * This is the amount of time the item has been cooking for.
                 */
                public getCookTime(): number;
                /**
                 * Set cook time.
                 * This is the amount of time the item has been cooking for.
                 */
                public setCookTime(cookTime: number): void;
                /**
                 * Get cook time total.
                 * This is the amount of time the item is required to cook for.
                 */
                public getCookTimeTotal(): number;
                /**
                 * Set cook time.
                 * This is the amount of time the item is required to cook for.
                 */
                public setCookTimeTotal(cookTimeTotal: number): void;
                public getInventory(): org.bukkit.inventory.FurnaceInventory;
                public getSnapshotInventory(): org.bukkit.inventory.FurnaceInventory;
            }
        }
    }
}
