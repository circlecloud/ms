declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerBedEnterEvent implements org.bukkit.event.Cancellable {
                    constructor(who: org.bukkit.entity.Player, bed: org.bukkit.block.Block, bedEnterResult: org.bukkit.event.player.PlayerBedEnterEvent.BedEnterResult)
                    constructor(who: org.bukkit.entity.Player, bed: org.bukkit.block.Block)
                    /**
                     * This describes the default outcome of this event.
                     */
                    public getBedEnterResult(): org.bukkit.event.player.PlayerBedEnterEvent.BedEnterResult;
                    /**
                     * This controls the action to take with the bed that was clicked on.
                     * <p>
                     * In case of {@link org.bukkit.event.Event.Result#DEFAULT}, the default outcome is described by
                     * {@link #getBedEnterResult()}.
                     */
                    public useBed(): org.bukkit.event.Event.Result;
                    /**
                     * Sets the action to take with the interacted bed.
                     * <p>
                     * {@link org.bukkit.event.Event.Result#ALLOW} will result in the player sleeping, regardless of
                     * the default outcome described by {@link #getBedEnterResult()}.
                     * <br>
                     * {@link org.bukkit.event.Event.Result#DENY} will prevent the player from sleeping. This has the
                     * same effect as canceling the event via {@link #setCancelled(boolean)}.
                     * <br>
                     * {@link org.bukkit.event.Event.Result#DEFAULT} will result in the outcome described by
                     * {@link #getBedEnterResult()}.
                     */
                    public setUseBed(useBed: org.bukkit.event.Event.Result): void;
                    /**
                     * Gets the cancellation state of this event. Set to true if you want to
                     * prevent the player from sleeping.
                     * <p>
                     * Canceling the event has the same effect as setting {@link #useBed()} to
                     * {@link org.bukkit.event.Event.Result#DENY}.
                     * <p>
                     * For backwards compatibility reasons this also returns true if
                     * {@link #useBed()} is {@link org.bukkit.event.Event.Result#DEFAULT} and the
                     * {@link #getBedEnterResult() default action} is to prevent bed entering.
                     */
                    public isCancelled(): boolean;
                    /**
                     * Sets the cancellation state of this event. A canceled event will not be
                     * executed in the server, but will still pass to other plugins.
                     * <p>
                     * Canceling this event will prevent use of the bed.
                     */
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Returns the bed block involved in this event.
                     */
                    public getBed(): org.bukkit.block.Block;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
