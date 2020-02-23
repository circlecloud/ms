declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
            abstract class ContainerInventory extends cn.nukkit.inventory.BaseInventory {
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType)
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType, items: java.util.Map)
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType, items: java.util.Map, overrideSize: java.lang.Integer)
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType, items: java.util.Map, overrideSize: java.lang.Integer, overrideTitle: string)
                // @ts-ignore
                public onOpen(who: cn.nukkit.Player): void;
                // @ts-ignore
                public onClose(who: cn.nukkit.Player): void;
                // @ts-ignore
                public static calculateRedstone(inv: cn.nukkit.inventory.Inventory): number;
            }
        }
    }
}
