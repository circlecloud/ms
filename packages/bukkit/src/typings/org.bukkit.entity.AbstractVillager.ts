declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface AbstractVillager extends org.bukkit.entity.Ageable, org.bukkit.entity.NPC, org.bukkit.inventory.InventoryHolder, org.bukkit.inventory.Merchant {
                /**
                 * Gets this villager's inventory.
                 * <br>
                 * Note that this inventory is not the Merchant inventory, rather, it is the
                 * items that a villager might have collected (from harvesting crops, etc.)
                 * {@inheritDoc}
                 */
                 getInventory(): org.bukkit.inventory.Inventory;
            }
        }
    }
}
