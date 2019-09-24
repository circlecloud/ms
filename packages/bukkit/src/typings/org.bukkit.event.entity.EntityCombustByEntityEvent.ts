declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityCombustByEntityEvent extends org.bukkit.event.entity.EntityCombustEvent {
                    constructor(combuster: org.bukkit.entity.Entity, combustee: org.bukkit.entity.Entity, duration: number)
                    /**
                     * Get the entity that caused the combustion event.
                     */
                    public getCombuster(): org.bukkit.entity.Entity;
                }
            }
        }
    }
}
