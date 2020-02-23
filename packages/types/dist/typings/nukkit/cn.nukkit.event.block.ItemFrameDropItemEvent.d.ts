declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class ItemFrameDropItemEvent extends cn.nukkit.event.block.BlockEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, block: cn.nukkit.block.Block, itemFrame: cn.nukkit.blockentity.BlockEntityItemFrame, item: cn.nukkit.item.Item)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getPlayer(): cn.nukkit.Player;
                    // @ts-ignore
                    public getItemFrame(): cn.nukkit.blockentity.BlockEntityItemFrame;
                    // @ts-ignore
                    public getItem(): cn.nukkit.item.Item;
                }
            }
        }
    }
}
