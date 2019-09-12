declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerMoveEvent {
                    constructor(player: org.bukkit.entity.Player, from: org.bukkit.Location, to: org.bukkit.Location)
                    /**
                     * Gets the cancellation state of this event. A cancelled event will not
                     * be executed in the server, but will still pass to other plugins
                     * <p>
                     * If a move or teleport event is cancelled, the player will be moved or
                     * teleported back to the Location as defined by getFrom(). This will not
                     * fire an event
                     */
                    public isCancelled(): boolean;
                    /**
                     * Sets the cancellation state of this event. A cancelled event will not
                     * be executed in the server, but will still pass to other plugins
                     * <p>
                     * If a move or teleport event is cancelled, the player will be moved or
                     * teleported back to the Location as defined by getFrom(). This will not
                     * fire an event
                     */
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the location this player moved from
                     */
                    public getFrom(): org.bukkit.Location;
                    /**
                     * Sets the location to mark as where the player moved from
                     */
                    public setFrom(from: org.bukkit.Location): void;
                    /**
                     * Gets the location this player moved to
                     */
                    public getTo(): org.bukkit.Location;
                    /**
                     * Sets the location that this player will move to
                     */
                    public setTo(to: org.bukkit.Location): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
