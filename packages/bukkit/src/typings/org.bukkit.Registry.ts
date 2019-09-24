declare namespace org {
    namespace bukkit {
        // @ts-ignore
        interface Registry {
             ADVANCEMENT: org.bukkit.Registry;
             ART: org.bukkit.Registry;
             BIOME: org.bukkit.Registry;
             BOSS_BARS: org.bukkit.Registry;
             ENCHANTMENT: org.bukkit.Registry;
             ENTITY_TYPE: org.bukkit.Registry;
             LOOT_TABLES: org.bukkit.Registry;
             MATERIAL: org.bukkit.Registry;
             STATISTIC: org.bukkit.Registry;
             VILLAGER_PROFESSION: org.bukkit.Registry;
             VILLAGER_TYPE: org.bukkit.Registry;
             MEMORY_MODULE_TYPE: org.bukkit.Registry;
            /**
             * Get the object by its key.
             */
             get(key: org.bukkit.NamespacedKey): org.bukkit.Keyed;
        }
    }
}
