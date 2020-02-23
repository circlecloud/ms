declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
             class PlayerUIComponent extends cn.nukkit.inventory.BaseInventory {
                // @ts-ignore
                public getSize(): number;
                // @ts-ignore
                public getMaxStackSize(): number;
                // @ts-ignore
                public setMaxStackSize(size: number): void;
                // @ts-ignore
                public getTitle(): string;
                // @ts-ignore
                public getItem(index: number): cn.nukkit.item.Item;
                // @ts-ignore
                public setItem(index: number, item: cn.nukkit.item.Item, send: boolean): boolean;
                // @ts-ignore
                public getContents(): java.util.Map;
                // @ts-ignore
                public sendContents(players: cn.nukkit.Player): void;
                // @ts-ignore
                public sendSlot(index: number, players: cn.nukkit.Player): void;
                // @ts-ignore
                public getViewers(): java.util.Set;
                // @ts-ignore
                public getType(): cn.nukkit.inventory.InventoryType;
                // @ts-ignore
                public onOpen(who: cn.nukkit.Player): void;
                // @ts-ignore
                public open(who: cn.nukkit.Player): boolean;
                // @ts-ignore
                public close(who: cn.nukkit.Player): void;
                // @ts-ignore
                public onClose(who: cn.nukkit.Player): void;
                // @ts-ignore
                public onSlotChange(index: number, before: cn.nukkit.item.Item, send: boolean): void;
            }
        }
    }
}
