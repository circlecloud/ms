declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface SpawnEggMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Get the type of entity this egg will spawn.
                     */
                     getSpawnedType(): org.bukkit.entity.EntityType;
                    /**
                     * Set the type of entity this egg will spawn.
                     */
                     setSpawnedType(type: org.bukkit.entity.EntityType): void;
                     clone(): org.bukkit.inventory.meta.SpawnEggMeta;
                }
            }
        }
    }
}
