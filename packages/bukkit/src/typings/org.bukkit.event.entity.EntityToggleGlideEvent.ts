declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class EntityToggleGlideEvent {
                    constructor(who: org.bukkit.entity.LivingEntity, isGliding: boolean)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public isGliding(): boolean;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
