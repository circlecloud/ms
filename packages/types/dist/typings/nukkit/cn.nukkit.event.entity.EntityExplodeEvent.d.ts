declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityExplodeEvent extends cn.nukkit.event.entity.EntityEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.Entity, position: cn.nukkit.level.Position, blocks: java.util.List, yield: number)
                    // @ts-ignore
                    protected position: cn.nukkit.level.Position;
                    // @ts-ignore
                    protected blocks: java.util.List;
                    // @ts-ignore
                    protected yield: number;
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getPosition(): cn.nukkit.level.Position;
                    // @ts-ignore
                    public getBlockList(): java.util.List;
                    // @ts-ignore
                    public setBlockList(blocks: java.util.List): void;
                    // @ts-ignore
                    public getYield(): number;
                    // @ts-ignore
                    public setYield(yield: number): void;
                }
            }
        }
    }
}
