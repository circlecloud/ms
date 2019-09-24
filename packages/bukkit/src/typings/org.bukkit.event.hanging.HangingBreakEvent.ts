declare namespace org {
    namespace bukkit {
        namespace event {
            namespace hanging {
                // @ts-ignore
                 class HangingBreakEvent extends org.bukkit.event.hanging.HangingEvent implements org.bukkit.event.Cancellable {
                    constructor(hanging: org.bukkit.entity.Hanging, cause: org.bukkit.event.hanging.HangingBreakEvent.RemoveCause)
                    /**
                     * Gets the cause for the hanging entity's removal
                     */
                    public getCause(): org.bukkit.event.hanging.HangingBreakEvent.RemoveCause;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
