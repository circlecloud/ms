declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerBlockPickEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, blockClicked: cn.nukkit.block.Block, item: cn.nukkit.item.Item)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getItem(): cn.nukkit.item.Item;
                    // @ts-ignore
                    public setItem(item: cn.nukkit.item.Item): void;
                    // @ts-ignore
                    public getBlockClicked(): cn.nukkit.block.Block;
                }
            }
        }
    }
}
