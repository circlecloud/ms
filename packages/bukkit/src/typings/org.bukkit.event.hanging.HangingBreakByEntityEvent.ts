declare namespace org {
    namespace bukkit {
        namespace event {
            namespace hanging {
                class HangingBreakByEntityEvent {
                    constructor(hanging: org.bukkit.entity.Hanging, remover: org.bukkit.entity.Entity)
                    constructor(hanging: org.bukkit.entity.Hanging, remover: org.bukkit.entity.Entity, cause: org.bukkit.event.hanging.HangingBreakEvent.RemoveCause)
                    /**
                     * Gets the entity that removed the hanging entity.
                     * May be null, for example when broken by an explosion.
                     */
                    public getRemover(): org.bukkit.entity.Entity;
                }
            }
        }
    }
}
