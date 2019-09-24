declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityToggleSwimEvent implements org.bukkit.event.Cancellable {
                    constructor(who: org.bukkit.entity.LivingEntity, isSwimming: boolean)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public isSwimming(): boolean;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
