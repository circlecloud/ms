declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class CreatureSpawnEvent {
                    constructor(spawnee: org.bukkit.entity.LivingEntity, spawnReason: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason)
                    public getEntity(): org.bukkit.entity.LivingEntity;
                    /**
                     * Gets the reason for why the creature is being spawned.
                     */
                    public getSpawnReason(): org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason;
                }
            }
        }
    }
}
