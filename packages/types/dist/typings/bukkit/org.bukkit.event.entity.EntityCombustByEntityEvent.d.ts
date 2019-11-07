declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityCombustByEntityEvent extends org.bukkit.event.entity.EntityCombustEvent {
                    // @ts-ignore
                    constructor(combuster: org.bukkit.entity.Entity, combustee: org.bukkit.entity.Entity, duration: number)
                    /**
                     * Get the entity that caused the combustion event.
                     */
                    // @ts-ignore
                    public getCombuster(): org.bukkit.entity.Entity;
                }
            }
        }
    }
}
