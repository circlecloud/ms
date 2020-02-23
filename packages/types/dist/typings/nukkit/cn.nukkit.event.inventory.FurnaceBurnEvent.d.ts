declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class FurnaceBurnEvent extends cn.nukkit.event.block.BlockEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(furnace: cn.nukkit.blockentity.BlockEntityFurnace, fuel: cn.nukkit.item.Item, burnTime: number)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getFurnace(): cn.nukkit.blockentity.BlockEntityFurnace;
                    // @ts-ignore
                    public getFuel(): cn.nukkit.item.Item;
                    // @ts-ignore
                    public getBurnTime(): number;
                    // @ts-ignore
                    public setBurnTime(burnTime: number): void;
                    // @ts-ignore
                    public isBurning(): boolean;
                    // @ts-ignore
                    public setBurning(burning: boolean): void;
                }
            }
        }
    }
}
