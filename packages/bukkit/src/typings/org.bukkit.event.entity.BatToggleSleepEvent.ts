declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class BatToggleSleepEvent {
                    constructor(what: org.bukkit.entity.Bat, awake: boolean)
                    /**
                     * Get whether or not the bat is attempting to awaken.
                     */
                    public isAwake(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public isCancelled(): boolean;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
