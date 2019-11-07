declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class CreatureSpawnEvent extends org.bukkit.event.entity.EntitySpawnEvent {
                    // @ts-ignore
                    constructor(spawnee: org.bukkit.entity.LivingEntity, spawnReason: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.LivingEntity;
                    /**
                     * Gets the reason for why the creature is being spawned.
                     */
                    // @ts-ignore
                    public getSpawnReason(): org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason;
                }
            }
        }
    }
}
