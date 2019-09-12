declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class EntityResurrectEvent {
                    constructor(what: org.bukkit.entity.LivingEntity)
                    public getEntity(): org.bukkit.entity.LivingEntity;
                    public isCancelled(): boolean;
                    public setCancelled(cancelled: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
