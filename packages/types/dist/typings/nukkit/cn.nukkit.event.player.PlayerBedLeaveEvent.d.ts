declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerBedLeaveEvent extends cn.nukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, bed: cn.nukkit.block.Block)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getBed(): cn.nukkit.block.Block;
                }
            }
        }
    }
}
