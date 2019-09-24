declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface Campfire extends org.bukkit.block.TileState {
                 getSize(): number;
                 getItem(index: number): org.bukkit.inventory.ItemStack;
                 setItem(index: number, item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Get cook time.
                 * This is the amount of time the item has been cooking for.
                 */
                 getCookTime(index: number): number;
                /**
                 * Set cook time.
                 * This is the amount of time the item has been cooking for.
                 */
                 setCookTime(index: number, cookTime: number): void;
                /**
                 * Get cook time total.
                 * This is the amount of time the item is required to cook for.
                 */
                 getCookTimeTotal(index: number): number;
                /**
                 * Set cook time.
                 * This is the amount of time the item is required to cook for.
                 */
                 setCookTimeTotal(index: number, cookTimeTotal: number): void;
            }
        }
    }
}
