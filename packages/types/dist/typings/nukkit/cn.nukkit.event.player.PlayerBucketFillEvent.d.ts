declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerBucketFillEvent extends cn.nukkit.event.player.PlayerBucketEvent {
                    // @ts-ignore
                    constructor(who: cn.nukkit.Player, blockClicked: cn.nukkit.block.Block, blockFace: cn.nukkit.math.BlockFace, bucket: cn.nukkit.item.Item, itemInHand: cn.nukkit.item.Item)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                }
            }
        }
    }
}
