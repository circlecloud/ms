declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockIgniteEvent extends cn.nukkit.event.block.BlockEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: cn.nukkit.block.Block, source: cn.nukkit.block.Block, entity: cn.nukkit.entity.Entity, cause: cn.nukkit.event.block.BlockIgniteEvent.BlockIgniteCause)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getSource(): cn.nukkit.block.Block;
                    // @ts-ignore
                    public getEntity(): cn.nukkit.entity.Entity;
                    // @ts-ignore
                    public getCause(): cn.nukkit.event.block.BlockIgniteEvent.BlockIgniteCause;
                }
            }
        }
    }
}
