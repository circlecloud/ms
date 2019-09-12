declare namespace org {
    namespace bukkit {
        namespace block {
            class Campfire {
                public getSize(): number;
                public getItem(index: number): org.bukkit.inventory.ItemStack;
                public setItem(index: number, item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Get cook time.
                 * This is the amount of time the item has been cooking for.
                 */
                public getCookTime(index: number): number;
                /**
                 * Set cook time.
                 * This is the amount of time the item has been cooking for.
                 */
                public setCookTime(index: number, cookTime: number): void;
                /**
                 * Get cook time total.
                 * This is the amount of time the item is required to cook for.
                 */
                public getCookTimeTotal(index: number): number;
                /**
                 * Set cook time.
                 * This is the amount of time the item is required to cook for.
                 */
                public setCookTimeTotal(index: number, cookTimeTotal: number): void;
            }
        }
    }
}
