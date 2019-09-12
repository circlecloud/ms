declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class EntityTransformEvent {
                    constructor(original: org.bukkit.entity.Entity, convertedList: any[] /*java.util.List*/, transformReason: org.bukkit.event.entity.EntityTransformEvent.TransformReason)
                    /**
                     * Gets the entity that the original entity was transformed to.
                     * This returns the first entity in the transformed entity list.
                     */
                    public getTransformedEntity(): org.bukkit.entity.Entity;
                    /**
                     * Gets the entities that the original entity was transformed to.
                     */
                    public getTransformedEntities(): any[] /*java.util.List*/;
                    /**
                     * Gets the reason for the conversion that has occurred.
                     */
                    public getTransformReason(): org.bukkit.event.entity.EntityTransformEvent.TransformReason;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
