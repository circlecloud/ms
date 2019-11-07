declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityTargetLivingEntityEvent extends org.bukkit.event.entity.EntityTargetEvent {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.Entity, target: org.bukkit.entity.LivingEntity, reason: org.bukkit.event.entity.EntityTargetEvent.TargetReason)
                    // @ts-ignore
                    public getTarget(): org.bukkit.entity.LivingEntity;
                    /**
                     * Set the Entity that you want the mob to target.
                     * <p>
                     * It is possible to be null, null will cause the entity to be
                     * target-less.
                     * <p>
                     * Must be a LivingEntity, or null.
                     */
                    // @ts-ignore
                    public setTarget(target: org.bukkit.entity.Entity): void;
                }
            }
        }
    }
}
