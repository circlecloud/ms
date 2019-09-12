declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class EntityCombustByEntityEvent {
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
