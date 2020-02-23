declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
             class PlayerOffhandInventory extends cn.nukkit.inventory.BaseInventory {
                // @ts-ignore
                constructor(holder: cn.nukkit.entity.EntityHumanType)
                // @ts-ignore
                public setSize(size: number): void;
                // @ts-ignore
                public onSlotChange(index: number, before: cn.nukkit.item.Item, send: boolean): void;
                // @ts-ignore
                public sendContents(players: cn.nukkit.Player): void;
                // @ts-ignore
                public sendSlot(index: number, players: cn.nukkit.Player): void;
                // @ts-ignore
                public getHolder(): cn.nukkit.entity.EntityHuman;
            }
        }
    }
}
