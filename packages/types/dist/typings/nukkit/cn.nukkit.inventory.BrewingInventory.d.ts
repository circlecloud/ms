declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
             class BrewingInventory extends cn.nukkit.inventory.ContainerInventory {
                // @ts-ignore
                constructor(brewingStand: cn.nukkit.blockentity.BlockEntityBrewingStand)
                // @ts-ignore
                public getHolder(): cn.nukkit.blockentity.BlockEntityBrewingStand;
                // @ts-ignore
                public getIngredient(): cn.nukkit.item.Item;
                // @ts-ignore
                public setIngredient(item: cn.nukkit.item.Item): void;
                // @ts-ignore
                public setFuel(fuel: cn.nukkit.item.Item): void;
                // @ts-ignore
                public getFuel(): cn.nukkit.item.Item;
                // @ts-ignore
                public onSlotChange(index: number, before: cn.nukkit.item.Item, send: boolean): void;
            }
        }
    }
}
