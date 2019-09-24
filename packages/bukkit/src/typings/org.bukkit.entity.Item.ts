declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Item extends org.bukkit.entity.Entity {
                /**
                 * Gets the item stack associated with this item drop.
                 */
                 getItemStack(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item stack associated with this item drop.
                 */
                 setItemStack(stack: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets the delay before this Item is available to be picked up by players
                 */
                 getPickupDelay(): number;
                /**
                 * Sets the delay before this Item is available to be picked up by players
                 */
                 setPickupDelay(delay: number): void;
            }
        }
    }
}
