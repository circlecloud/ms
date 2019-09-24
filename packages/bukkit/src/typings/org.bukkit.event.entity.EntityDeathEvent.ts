declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityDeathEvent {
                    constructor(entity: org.bukkit.entity.LivingEntity, drops: any[] /*java.util.List*/)
                    constructor(what: org.bukkit.entity.LivingEntity, drops: any[] /*java.util.List*/, droppedExp: number)
                    public getEntity(): org.bukkit.entity.LivingEntity;
                    /**
                     * Gets how much EXP should be dropped from this death.
                     * <p>
                     * This does not indicate how much EXP should be taken from the entity in
                     * question, merely how much should be created after its death.
                     */
                    public getDroppedExp(): number;
                    /**
                     * Sets how much EXP should be dropped from this death.
                     * <p>
                     * This does not indicate how much EXP should be taken from the entity in
                     * question, merely how much should be created after its death.
                     */
                    public setDroppedExp(exp: number): void;
                    /**
                     * Gets all the items which will drop when the entity dies
                     */
                    public getDrops(): any[] /*java.util.List*/;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
