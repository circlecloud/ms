declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class StartBrewEvent extends cn.nukkit.event.inventory.InventoryEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(blockEntity: cn.nukkit.blockentity.BlockEntityBrewingStand)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getBrewingStand(): cn.nukkit.blockentity.BlockEntityBrewingStand;
                    // @ts-ignore
                    public getIngredient(): cn.nukkit.item.Item;
                    // @ts-ignore
                    public getPotions(): cn.nukkit.item.Item[];
                    // @ts-ignore
                    public getPotion(index: number): cn.nukkit.item.Item;
                }
            }
        }
    }
}
