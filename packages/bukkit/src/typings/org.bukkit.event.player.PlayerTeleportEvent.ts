declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerTeleportEvent {
                    constructor(player: org.bukkit.entity.Player, from: org.bukkit.Location, to: org.bukkit.Location)
                    constructor(player: org.bukkit.entity.Player, from: org.bukkit.Location, to: org.bukkit.Location, cause: org.bukkit.event.player.PlayerTeleportEvent.TeleportCause)
                    /**
                     * Gets the cause of this teleportation event
                     */
                    public getCause(): org.bukkit.event.player.PlayerTeleportEvent.TeleportCause;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
