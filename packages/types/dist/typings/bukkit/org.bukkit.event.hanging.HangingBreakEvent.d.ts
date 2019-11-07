// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace hanging {
                // @ts-ignore
                 class HangingBreakEvent extends org.bukkit.event.hanging.HangingEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(hanging: org.bukkit.entity.Hanging, cause: org.bukkit.event.hanging.HangingBreakEvent.RemoveCause)
                    /**
                     * Gets the cause for the hanging entity's removal
                     */
                    // @ts-ignore
                    public getCause(): org.bukkit.event.hanging.HangingBreakEvent.RemoveCause;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
