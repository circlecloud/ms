declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
            interface Inventory {
                // @ts-ignore
                 MAX_STACK: number;
                // @ts-ignore
                 getSize(): number;
                // @ts-ignore
                 getMaxStackSize(): number;
                // @ts-ignore
                 setMaxStackSize(size: number): void;
                // @ts-ignore
                 getName(): string;
                // @ts-ignore
                 getTitle(): string;
                // @ts-ignore
                 getItem(index: number): cn.nukkit.item.Item;
                // @ts-ignore
                 setItem(index: number, item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                 setItem(index: number, item: cn.nukkit.item.Item, send: boolean): boolean;
                // @ts-ignore
                 addItem(slots: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                 canAddItem(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                 removeItem(slots: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                 getContents(): java.util.Map;
                // @ts-ignore
                 setContents(items: java.util.Map): void;
                // @ts-ignore
                 sendContents(player: cn.nukkit.Player): void;
                // @ts-ignore
                 sendContents(players: cn.nukkit.Player): void;
                // @ts-ignore
                 sendContents(players: java.util.Collection): void;
                // @ts-ignore
                 sendSlot(index: number, player: cn.nukkit.Player): void;
                // @ts-ignore
                 sendSlot(index: number, players: cn.nukkit.Player): void;
                // @ts-ignore
                 sendSlot(index: number, players: java.util.Collection): void;
                // @ts-ignore
                 contains(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                 all(item: cn.nukkit.item.Item): java.util.Map;
                // @ts-ignore
                 first(item: cn.nukkit.item.Item): number;
                // @ts-ignore
                 first(item: cn.nukkit.item.Item, exact: boolean): number;
                // @ts-ignore
                 firstEmpty(item: cn.nukkit.item.Item): number;
                // @ts-ignore
                 decreaseCount(slot: number): void;
                // @ts-ignore
                 remove(item: cn.nukkit.item.Item): void;
                // @ts-ignore
                 clear(index: number): boolean;
                // @ts-ignore
                 clear(index: number, send: boolean): boolean;
                // @ts-ignore
                 clearAll(): void;
                // @ts-ignore
                 isFull(): boolean;
                // @ts-ignore
                 isEmpty(): boolean;
                // @ts-ignore
                 getViewers(): java.util.Set;
                // @ts-ignore
                 getType(): cn.nukkit.inventory.InventoryType;
                // @ts-ignore
                 getHolder(): cn.nukkit.inventory.InventoryHolder;
                // @ts-ignore
                 onOpen(who: cn.nukkit.Player): void;
                // @ts-ignore
                 open(who: cn.nukkit.Player): boolean;
                // @ts-ignore
                 close(who: cn.nukkit.Player): void;
                // @ts-ignore
                 onClose(who: cn.nukkit.Player): void;
                // @ts-ignore
                 onSlotChange(index: number, before: cn.nukkit.item.Item, send: boolean): void;
            }
        }
    }
}
