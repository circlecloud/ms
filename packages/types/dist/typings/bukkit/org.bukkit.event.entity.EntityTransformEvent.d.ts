// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityTransformEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(original: org.bukkit.entity.Entity, convertedList: java.util.List, transformReason: org.bukkit.event.entity.EntityTransformEvent.TransformReason)
                    /**
                     * Gets the entity that the original entity was transformed to.
                     * This returns the first entity in the transformed entity list.
                     */
                    // @ts-ignore
                    public getTransformedEntity(): org.bukkit.entity.Entity;
                    /**
                     * Gets the entities that the original entity was transformed to.
                     */
                    // @ts-ignore
                    public getTransformedEntities(): java.util.List;
                    /**
                     * Gets the reason for the conversion that has occurred.
                     */
                    // @ts-ignore
                    public getTransformReason(): org.bukkit.event.entity.EntityTransformEvent.TransformReason;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
