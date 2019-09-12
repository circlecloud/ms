declare namespace org {
    namespace bukkit {
        namespace entity {
            class AbstractVillager {
                /**
                 * Gets this villager's inventory.
                 * <br>
                 * Note that this inventory is not the Merchant inventory, rather, it is the
                 * items that a villager might have collected (from harvesting crops, etc.)
                 * {@inheritDoc}
                 */
                public getInventory(): org.bukkit.inventory.Inventory;
            }
        }
    }
}
