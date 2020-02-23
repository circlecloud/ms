declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
             class ShulkerBoxInventory extends cn.nukkit.inventory.ContainerInventory {
                // @ts-ignore
                constructor(box: cn.nukkit.blockentity.BlockEntityShulkerBox)
                // @ts-ignore
                public getHolder(): cn.nukkit.blockentity.BlockEntityShulkerBox;
                // @ts-ignore
                public onOpen(who: cn.nukkit.Player): void;
                // @ts-ignore
                public onClose(who: cn.nukkit.Player): void;
                // @ts-ignore
                public canAddItem(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public sendSlot(index: number, players: cn.nukkit.Player): void;
            }
        }
    }
}
