declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace redstone {
                // @ts-ignore
                 class RedstoneUpdateEvent extends cn.nukkit.event.block.BlockUpdateEvent {
                    // @ts-ignore
                    constructor(source: cn.nukkit.block.Block)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                }
            }
        }
    }
}
