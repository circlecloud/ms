declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                class SpawnEggMeta {
                    /**
                     * Get the type of entity this egg will spawn.
                     */
                    public getSpawnedType(): org.bukkit.entity.EntityType;
                    /**
                     * Set the type of entity this egg will spawn.
                     */
                    public setSpawnedType(type: org.bukkit.entity.EntityType): void;
                    public clone(): org.bukkit.inventory.meta.SpawnEggMeta;
                }
            }
        }
    }
}
