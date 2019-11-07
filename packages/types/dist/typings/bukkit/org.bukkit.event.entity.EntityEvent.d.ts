declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                abstract class EntityEvent extends org.bukkit.event.Event {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Entity)
                    // @ts-ignore
                    protected entity: org.bukkit.entity.Entity;
                    /**
                     * Returns the Entity involved in this event
                     */
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Entity;
                    /**
                     * Gets the EntityType of the Entity involved in this event.
                     */
                    // @ts-ignore
                    public getEntityType(): org.bukkit.entity.EntityType;
                }
            }
        }
    }
}
