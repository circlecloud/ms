declare namespace org {
    namespace bukkit {
        namespace loot {
            class LootTable {
                /**
                 * Returns a mutable list of loot generated by this LootTable.
                 */
                public populateLoot(random: any, context: org.bukkit.loot.LootContext): any[] /*java.util.Collection*/;
                /**
                 * Attempt to fill an inventory with this LootTable's loot.
                 */
                public fillInventory(inventory: org.bukkit.inventory.Inventory, random: any, context: org.bukkit.loot.LootContext): void;
            }
        }
    }
}
