declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                abstract class EntityEvent extends org.bukkit.event.Event {
                    constructor(what: org.bukkit.entity.Entity)
                    protected entity: org.bukkit.entity.Entity;
                    /**
                     * Returns the Entity involved in this event
                     */
                    public getEntity(): org.bukkit.entity.Entity;
                    /**
                     * Gets the EntityType of the Entity involved in this event.
                     */
                    public getEntityType(): org.bukkit.entity.EntityType;
                }
            }
        }
    }
}
