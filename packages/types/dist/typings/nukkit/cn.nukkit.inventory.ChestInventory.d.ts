declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
             class ChestInventory extends cn.nukkit.inventory.ContainerInventory {
                // @ts-ignore
                constructor(chest: cn.nukkit.blockentity.BlockEntityChest)
                // @ts-ignore
                protected doubleInventory: cn.nukkit.inventory.DoubleChestInventory;
                // @ts-ignore
                public getHolder(): cn.nukkit.blockentity.BlockEntityChest;
                // @ts-ignore
                public onOpen(who: cn.nukkit.Player): void;
                // @ts-ignore
                public onClose(who: cn.nukkit.Player): void;
                // @ts-ignore
                public setDoubleInventory(doubleInventory: cn.nukkit.inventory.DoubleChestInventory): void;
                // @ts-ignore
                public getDoubleInventory(): cn.nukkit.inventory.DoubleChestInventory;
                // @ts-ignore
                public sendSlot(index: number, players: cn.nukkit.Player): void;
            }
        }
    }
}
