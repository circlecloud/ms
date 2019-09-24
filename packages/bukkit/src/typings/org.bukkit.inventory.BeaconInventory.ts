declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface BeaconInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Set the item powering the beacon.
                 */
                 setItem(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Get the item powering the beacon.
                 */
                 getItem(): org.bukkit.inventory.ItemStack;
            }
        }
    }
}
