declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityBlockChangeEvent extends cn.nukkit.event.entity.EntityEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.Entity, from: cn.nukkit.block.Block, to: cn.nukkit.block.Block)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getFrom(): cn.nukkit.block.Block;
                    // @ts-ignore
                    public getTo(): cn.nukkit.block.Block;
                }
            }
        }
    }
}
