declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
            abstract class CustomInventory extends cn.nukkit.inventory.ContainerInventory {
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType)
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType, items: java.util.Map)
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType, items: java.util.Map, overrideSize: java.lang.Integer)
                // @ts-ignore
                constructor(holder: cn.nukkit.inventory.InventoryHolder, type: cn.nukkit.inventory.InventoryType, items: java.util.Map, overrideSize: java.lang.Integer, overrideTitle: string)
            }
        }
    }
}
