declare namespace org {
    namespace bukkit {
        namespace event {
            namespace hanging {
                // @ts-ignore
                 class HangingBreakByEntityEvent extends org.bukkit.event.hanging.HangingBreakEvent {
                    // @ts-ignore
                    constructor(hanging: org.bukkit.entity.Hanging, remover: org.bukkit.entity.Entity)
                    // @ts-ignore
                    constructor(hanging: org.bukkit.entity.Hanging, remover: org.bukkit.entity.Entity, cause: org.bukkit.event.hanging.HangingBreakEvent.RemoveCause)
                    /**
                     * Gets the entity that removed the hanging entity.
                     * May be null, for example when broken by an explosion.
                     */
                    // @ts-ignore
                    public getRemover(): org.bukkit.entity.Entity;
                }
            }
        }
    }
}
