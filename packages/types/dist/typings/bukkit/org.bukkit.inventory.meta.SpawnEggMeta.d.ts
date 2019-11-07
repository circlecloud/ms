// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface SpawnEggMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Get the type of entity this egg will spawn.
                     */
                    // @ts-ignore
                     getSpawnedType(): org.bukkit.entity.EntityType;
                    /**
                     * Set the type of entity this egg will spawn.
                     */
                    // @ts-ignore
                     setSpawnedType(type: org.bukkit.entity.EntityType): void;
                    // @ts-ignore
                     clone(): org.bukkit.inventory.meta.SpawnEggMeta;
                }
            }
        }
    }
}
