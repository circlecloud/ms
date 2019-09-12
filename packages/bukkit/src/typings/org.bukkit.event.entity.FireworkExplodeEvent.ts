declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class FireworkExplodeEvent {
                    constructor(what: org.bukkit.entity.Firework)
                    public isCancelled(): boolean;
                    /**
                     * Set the cancelled state of this event. If the firework explosion is
                     * cancelled, the firework will still be removed, but no particles will be
                     * displayed.
                     */
                    public setCancelled(cancel: boolean): void;
                    public getEntity(): org.bukkit.entity.Firework;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
