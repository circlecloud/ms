declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
            abstract class BaseInventory extends java.lang.Object implements cn.nukkit.inventory.Inventory {
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType)
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType, items: java.util.Map)
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType, items: java.util.Map, overrideSize: java.lang.Integer)
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType, items: java.util.Map, overrideSize: java.lang.Integer, overrideTitle: string)
                // @ts-ignore
                protected type: cn.nukkit.inventory.InventoryType;
                // @ts-ignore
                protected maxStackSize: number;
                // @ts-ignore
                protected size: number;
                // @ts-ignore
                protected name: string;
                // @ts-ignore
                protected title: string;
                // @ts-ignore
                public slots: java.util.Map;
                // @ts-ignore
                protected viewers: java.util.Set;
                // @ts-ignore
                protected holder: cn.nukkit.inventory.InventoryHolder;
                // @ts-ignore
                public getSize(): number;
                // @ts-ignore
                public setSize(size: number): void;
                // @ts-ignore
                public getMaxStackSize(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getTitle(): string;
                // @ts-ignore
                public getItem(index: number): cn.nukkit.item.Item;
                // @ts-ignore
                public getContents(): java.util.Map;
                // @ts-ignore
                public setContents(items: java.util.Map): void;
                // @ts-ignore
                public setItem(index: number, item: cn.nukkit.item.Item, send: boolean): boolean;
                // @ts-ignore
                public contains(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public all(item: cn.nukkit.item.Item): java.util.Map;
                // @ts-ignore
                public remove(item: cn.nukkit.item.Item): void;
                // @ts-ignore
                public first(item: cn.nukkit.item.Item, exact: boolean): number;
                // @ts-ignore
                public firstEmpty(item: cn.nukkit.item.Item): number;
                // @ts-ignore
                public decreaseCount(slot: number): void;
                // @ts-ignore
                public canAddItem(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public addItem(slots: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                public removeItem(slots: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                public clear(index: number, send: boolean): boolean;
                // @ts-ignore
                public clearAll(): void;
                // @ts-ignore
                public getViewers(): java.util.Set;
                // @ts-ignore
                public getHolder(): cn.nukkit.inventory.InventoryHolder;
                // @ts-ignore
                public setMaxStackSize(maxStackSize: number): void;
                // @ts-ignore
                public open(who: cn.nukkit.Player): boolean;
                // @ts-ignore
                public close(who: cn.nukkit.Player): void;
                // @ts-ignore
                public onOpen(who: cn.nukkit.Player): void;
                // @ts-ignore
                public onClose(who: cn.nukkit.Player): void;
                // @ts-ignore
                public onSlotChange(index: number, before: cn.nukkit.item.Item, send: boolean): void;
                // @ts-ignore
                public sendContents(player: cn.nukkit.Player): void;
                // @ts-ignore
                public sendContents(players: cn.nukkit.Player): void;
                // @ts-ignore
                public isFull(): boolean;
                // @ts-ignore
                public isEmpty(): boolean;
                // @ts-ignore
                public getFreeSpace(item: cn.nukkit.item.Item): number;
                // @ts-ignore
                public sendContents(players: java.util.Collection): void;
                // @ts-ignore
                public sendSlot(index: number, player: cn.nukkit.Player): void;
                // @ts-ignore
                public sendSlot(index: number, players: cn.nukkit.Player): void;
                // @ts-ignore
                public sendSlot(index: number, players: java.util.Collection): void;
                // @ts-ignore
                public getType(): cn.nukkit.inventory.InventoryType;
            }
        }
    }
}
