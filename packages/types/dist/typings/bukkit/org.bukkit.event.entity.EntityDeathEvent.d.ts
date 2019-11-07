declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityDeathEvent extends org.bukkit.event.entity.EntityEvent {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.LivingEntity, drops: java.util.List)
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.LivingEntity, drops: java.util.List, droppedExp: number)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.LivingEntity;
                    /**
                     * Gets how much EXP should be dropped from this death.
                     * <p>
                     * This does not indicate how much EXP should be taken from the entity in
                     * question, merely how much should be created after its death.
                     */
                    // @ts-ignore
                    public getDroppedExp(): number;
                    /**
                     * Sets how much EXP should be dropped from this death.
                     * <p>
                     * This does not indicate how much EXP should be taken from the entity in
                     * question, merely how much should be created after its death.
                     */
                    // @ts-ignore
                    public setDroppedExp(exp: number): void;
                    /**
                     * Gets all the items which will drop when the entity dies
                     */
                    // @ts-ignore
                    public getDrops(): java.util.List;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
