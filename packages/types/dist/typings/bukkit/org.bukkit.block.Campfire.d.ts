// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface Campfire extends org.bukkit.block.TileState {
                // @ts-ignore
                 getSize(): number;
                // @ts-ignore
                 getItem(index: number): org.bukkit.inventory.ItemStack;
                // @ts-ignore
                 setItem(index: number, item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Get cook time.
                 * This is the amount of time the item has been cooking for.
                 */
                // @ts-ignore
                 getCookTime(index: number): number;
                /**
                 * Set cook time.
                 * This is the amount of time the item has been cooking for.
                 */
                // @ts-ignore
                 setCookTime(index: number, cookTime: number): void;
                /**
                 * Get cook time total.
                 * This is the amount of time the item is required to cook for.
                 */
                // @ts-ignore
                 getCookTimeTotal(index: number): number;
                /**
                 * Set cook time.
                 * This is the amount of time the item is required to cook for.
                 */
                // @ts-ignore
                 setCookTimeTotal(index: number, cookTimeTotal: number): void;
            }
        }
    }
}
