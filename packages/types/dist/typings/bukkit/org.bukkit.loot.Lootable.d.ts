// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace loot {
            // @ts-ignore
            interface Lootable {
                /**
                 * Set the loot table for a container or entity.
                 * <br>
                 * To remove a loot table use null. Do not use {@link LootTables#EMPTY} to
                 * clear a LootTable.
                 */
                // @ts-ignore
                 setLootTable(table: org.bukkit.loot.LootTable): void;
                /**
                 * Gets the Loot Table attached to this block or entity.
                 * <br>
                 * If an block/entity does not have a loot table, this will return null, NOT
                 * an empty loot table.
                 */
                // @ts-ignore
                 getLootTable(): org.bukkit.loot.LootTable;
                /**
                 * Set the seed used when this Loot Table generates loot.
                 */
                // @ts-ignore
                 setSeed(seed: number): void;
                /**
                 * Get the Loot Table's seed.
                 * <br>
                 * The seed is used when generating loot.
                 */
                // @ts-ignore
                 getSeed(): number;
            }
        }
    }
}
