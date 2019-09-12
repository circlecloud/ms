declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class EntityTargetEvent {
                    constructor(entity: org.bukkit.entity.Entity, target: org.bukkit.entity.Entity, reason: org.bukkit.event.entity.EntityTargetEvent.TargetReason)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Returns the reason for the targeting
                     */
                    public getReason(): org.bukkit.event.entity.EntityTargetEvent.TargetReason;
                    /**
                     * Get the entity that this is targeting.
                     * <p>
                     * This will be null in the case that the event is called when the mob
                     * forgets its target.
                     */
                    public getTarget(): org.bukkit.entity.Entity;
                    /**
                     * Set the entity that you want the mob to target instead.
                     * <p>
                     * It is possible to be null, null will cause the entity to be
                     * target-less.
                     * <p>
                     * This is different from cancelling the event. Cancelling the event will
                     * cause the entity to keep an original target, while setting to be null
                     * will cause the entity to be reset.
                     */
                    public setTarget(target: org.bukkit.entity.Entity): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
