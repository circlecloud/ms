declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class EntityCombustEvent {
                    constructor(combustee: org.bukkit.entity.Entity, duration: number)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getDuration(): number;
                    /**
                     * The number of seconds the combustee should be alight for.
                     * <p>
                     * This value will only ever increase the combustion time, not decrease
                     * existing combustion times.
                     */
                    public setDuration(duration: number): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
