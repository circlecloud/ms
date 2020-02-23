declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class FurnaceSmeltEvent extends cn.nukkit.event.block.BlockEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(furnace: cn.nukkit.blockentity.BlockEntityFurnace, source: cn.nukkit.item.Item, result: cn.nukkit.item.Item)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getFurnace(): cn.nukkit.blockentity.BlockEntityFurnace;
                    // @ts-ignore
                    public getSource(): cn.nukkit.item.Item;
                    // @ts-ignore
                    public getResult(): cn.nukkit.item.Item;
                    // @ts-ignore
                    public setResult(result: cn.nukkit.item.Item): void;
                }
            }
        }
    }
}
