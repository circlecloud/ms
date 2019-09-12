declare namespace org {
    namespace bukkit {
        namespace inventory {
            class BeaconInventory {
                /**
                 * Set the item powering the beacon.
                 */
                public setItem(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Get the item powering the beacon.
                 */
                public getItem(): org.bukkit.inventory.ItemStack;
            }
        }
    }
}
