declare namespace org {
    namespace bukkit {
        namespace entity {
            class Item {
                /**
                 * Gets the item stack associated with this item drop.
                 */
                public getItemStack(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item stack associated with this item drop.
                 */
                public setItemStack(stack: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets the delay before this Item is available to be picked up by players
                 */
                public getPickupDelay(): number;
                /**
                 * Sets the delay before this Item is available to be picked up by players
                 */
                public setPickupDelay(delay: number): void;
            }
        }
    }
}
