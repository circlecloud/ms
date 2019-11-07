// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityTameEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.LivingEntity, owner: org.bukkit.entity.AnimalTamer)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.LivingEntity;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the owning AnimalTamer
                     */
                    // @ts-ignore
                    public getOwner(): org.bukkit.entity.AnimalTamer;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
