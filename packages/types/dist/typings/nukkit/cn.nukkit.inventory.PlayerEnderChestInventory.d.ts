declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
             class PlayerEnderChestInventory extends cn.nukkit.inventory.BaseInventory {
                // @ts-ignore
                constructor(player: cn.nukkit.entity.EntityHumanType)
                // @ts-ignore
                public getHolder(): cn.nukkit.entity.EntityHuman;
                // @ts-ignore
                public onOpen(who: cn.nukkit.Player): void;
                // @ts-ignore
                public onClose(who: cn.nukkit.Player): void;
            }
        }
    }
}
