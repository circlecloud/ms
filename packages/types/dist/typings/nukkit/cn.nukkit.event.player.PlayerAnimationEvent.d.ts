declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerAnimationEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, animation: cn.nukkit.network.protocol.AnimatePacket.Action)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getAnimationType(): cn.nukkit.network.protocol.AnimatePacket.Action;
                }
            }
        }
    }
}
