declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
             class PlayerUIInventory extends cn.nukkit.inventory.BaseInventory {
                // @ts-ignore
                constructor(player: cn.nukkit.Player)
                // @ts-ignore
                public getCursorInventory(): cn.nukkit.inventory.PlayerCursorInventory;
                // @ts-ignore
                public getCraftingGrid(): cn.nukkit.inventory.CraftingGrid;
                // @ts-ignore
                public getBigCraftingGrid(): cn.nukkit.inventory.BigCraftingGrid;
                // @ts-ignore
                public setSize(size: number): void;
                // @ts-ignore
                public sendSlot(index: number, target: cn.nukkit.Player): void;
                // @ts-ignore
                public sendContents(target: cn.nukkit.Player): void;
                // @ts-ignore
                public getSize(): number;
                // @ts-ignore
                public getHolder(): cn.nukkit.Player;
            }
        }
    }
}
