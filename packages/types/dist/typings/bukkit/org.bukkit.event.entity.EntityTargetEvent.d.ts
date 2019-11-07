// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityTargetEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.Entity, target: org.bukkit.entity.Entity, reason: org.bukkit.event.entity.EntityTargetEvent.TargetReason)
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Returns the reason for the targeting
                     */
                    // @ts-ignore
                    public getReason(): org.bukkit.event.entity.EntityTargetEvent.TargetReason;
                    /**
                     * Get the entity that this is targeting.
                     * <p>
                     * This will be null in the case that the event is called when the mob
                     * forgets its target.
                     */
                    // @ts-ignore
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
                    // @ts-ignore
                    public setTarget(target: org.bukkit.entity.Entity): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
