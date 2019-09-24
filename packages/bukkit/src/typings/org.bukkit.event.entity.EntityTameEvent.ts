declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityTameEvent implements org.bukkit.event.Cancellable {
                    constructor(entity: org.bukkit.entity.LivingEntity, owner: org.bukkit.entity.AnimalTamer)
                    public getEntity(): org.bukkit.entity.LivingEntity;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the owning AnimalTamer
                     */
                    public getOwner(): org.bukkit.entity.AnimalTamer;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
