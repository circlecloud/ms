declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerTeleportEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, from: cn.nukkit.level.Location, to: cn.nukkit.level.Location, cause: cn.nukkit.event.player.PlayerTeleportEvent.TeleportCause)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, from: cn.nukkit.math.Vector3, to: cn.nukkit.math.Vector3, cause: cn.nukkit.event.player.PlayerTeleportEvent.TeleportCause)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getFrom(): cn.nukkit.level.Location;
                    // @ts-ignore
                    public getTo(): cn.nukkit.level.Location;
                    // @ts-ignore
                    public getCause(): cn.nukkit.event.player.PlayerTeleportEvent.TeleportCause;
                }
            }
        }
    }
}
