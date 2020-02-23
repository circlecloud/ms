declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockFadeEvent extends cn.nukkit.event.block.BlockEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: cn.nukkit.block.Block, newState: cn.nukkit.block.Block)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getNewState(): cn.nukkit.block.Block;
                }
            }
        }
    }
}
