declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface BeaconInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Set the item powering the beacon.
                 */
                // @ts-ignore
                 setItem(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Get the item powering the beacon.
                 */
                // @ts-ignore
                 getItem(): org.bukkit.inventory.ItemStack;
            }
        }
    }
}
