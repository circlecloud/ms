declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
             class PlayerInventory extends cn.nukkit.inventory.BaseInventory {
                // @ts-ignore
                constructor(player: cn.nukkit.entity.EntityHumanType)
                // @ts-ignore
                protected itemInHandIndex: number;
                // @ts-ignore
                public getSize(): number;
                // @ts-ignore
                public setSize(size: number): void;
                /**
                 * Called when a client equips a hotbar inventorySlot. This method should not be used by plugins.
                 * This method will call PlayerItemHeldEvent.
                 */
                // @ts-ignore
                public equipItem(slot: number): boolean;
                // @ts-ignore
                public getHotbarSlotIndex(index: number): number;
                // @ts-ignore
                public setHotbarSlotIndex(index: number, slot: number): void;
                // @ts-ignore
                public getHeldItemIndex(): number;
                // @ts-ignore
                public setHeldItemIndex(index: number): void;
                // @ts-ignore
                public setHeldItemIndex(index: number, send: boolean): void;
                // @ts-ignore
                public getItemInHand(): cn.nukkit.item.Item;
                // @ts-ignore
                public setItemInHand(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public getHeldItemSlot(): number;
                // @ts-ignore
                public setHeldItemSlot(slot: number): void;
                // @ts-ignore
                public sendHeldItem(players: cn.nukkit.Player): void;
                // @ts-ignore
                public sendHeldItem(players: java.util.Collection): void;
                // @ts-ignore
                public onSlotChange(index: number, before: cn.nukkit.item.Item, send: boolean): void;
                // @ts-ignore
                public getHotbarSize(): number;
                // @ts-ignore
                public getArmorItem(index: number): cn.nukkit.item.Item;
                // @ts-ignore
                public setArmorItem(index: number, item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public setArmorItem(index: number, item: cn.nukkit.item.Item, ignoreArmorEvents: boolean): boolean;
                // @ts-ignore
                public getHelmet(): cn.nukkit.item.Item;
                // @ts-ignore
                public getChestplate(): cn.nukkit.item.Item;
                // @ts-ignore
                public getLeggings(): cn.nukkit.item.Item;
                // @ts-ignore
                public getBoots(): cn.nukkit.item.Item;
                // @ts-ignore
                public setHelmet(helmet: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public setChestplate(chestplate: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public setLeggings(leggings: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public setBoots(boots: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public setItem(index: number, item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public clear(index: number, send: boolean): boolean;
                // @ts-ignore
                public getArmorContents(): cn.nukkit.item.Item[];
                // @ts-ignore
                public clearAll(): void;
                // @ts-ignore
                public sendArmorContents(player: cn.nukkit.Player): void;
                // @ts-ignore
                public sendArmorContents(players: cn.nukkit.Player): void;
                // @ts-ignore
                public setArmorContents(items: cn.nukkit.item.Item): void;
                // @ts-ignore
                public sendArmorContents(players: java.util.Collection): void;
                // @ts-ignore
                public sendArmorSlot(index: number, player: cn.nukkit.Player): void;
                // @ts-ignore
                public sendArmorSlot(index: number, players: cn.nukkit.Player): void;
                // @ts-ignore
                public sendArmorSlot(index: number, players: java.util.Collection): void;
                // @ts-ignore
                public sendContents(player: cn.nukkit.Player): void;
                // @ts-ignore
                public sendContents(players: java.util.Collection): void;
                // @ts-ignore
                public sendContents(players: cn.nukkit.Player): void;
                // @ts-ignore
                public sendSlot(index: number, player: cn.nukkit.Player): void;
                // @ts-ignore
                public sendSlot(index: number, players: java.util.Collection): void;
                // @ts-ignore
                public sendSlot(index: number, players: cn.nukkit.Player): void;
                // @ts-ignore
                public sendCreativeContents(): void;
                // @ts-ignore
                public getHolder(): cn.nukkit.entity.EntityHuman;
            }
        }
    }
}
