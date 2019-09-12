declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerPortalEvent {
                    constructor(player: org.bukkit.entity.Player, from: org.bukkit.Location, to: org.bukkit.Location)
                    constructor(player: org.bukkit.entity.Player, from: org.bukkit.Location, to: org.bukkit.Location, cause: org.bukkit.event.player.PlayerTeleportEvent.TeleportCause)
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
