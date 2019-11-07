// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class FireworkExplodeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Firework)
                    // @ts-ignore
                    public isCancelled(): boolean;
                    /**
                     * Set the cancelled state of this event. If the firework explosion is
                     * cancelled, the firework will still be removed, but no particles will be
                     * displayed.
                     */
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Firework;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
