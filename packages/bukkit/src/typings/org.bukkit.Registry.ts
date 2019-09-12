declare namespace org {
    namespace bukkit {
        class Registry {
            public static ADVANCEMENT: org.bukkit.Registry;
            public static ART: org.bukkit.Registry;
            public static BIOME: org.bukkit.Registry;
            public static BOSS_BARS: org.bukkit.Registry;
            public static ENCHANTMENT: org.bukkit.Registry;
            public static ENTITY_TYPE: org.bukkit.Registry;
            public static LOOT_TABLES: org.bukkit.Registry;
            public static MATERIAL: org.bukkit.Registry;
            public static STATISTIC: org.bukkit.Registry;
            public static VILLAGER_PROFESSION: org.bukkit.Registry;
            public static VILLAGER_TYPE: org.bukkit.Registry;
            public static MEMORY_MODULE_TYPE: org.bukkit.Registry;
            /**
             * Get the object by its key.
             */
            public get(key: org.bukkit.NamespacedKey): org.bukkit.Keyed;
        }
    }
}
