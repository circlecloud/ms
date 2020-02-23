declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
             class FurnaceInventory extends cn.nukkit.inventory.ContainerInventory {
                // @ts-ignore
                constructor(furnace: cn.nukkit.blockentity.BlockEntityFurnace)
                // @ts-ignore
                public getHolder(): cn.nukkit.blockentity.BlockEntityFurnace;
                // @ts-ignore
                public getResult(): cn.nukkit.item.Item;
                // @ts-ignore
                public getFuel(): cn.nukkit.item.Item;
                // @ts-ignore
                public getSmelting(): cn.nukkit.item.Item;
                // @ts-ignore
                public setResult(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public setFuel(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public setSmelting(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public onSlotChange(index: number, before: cn.nukkit.item.Item, send: boolean): void;
            }
        }
    }
}
