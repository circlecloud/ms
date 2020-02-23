declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
             class FakeBlockMenu extends cn.nukkit.level.Position implements cn.nukkit.inventory.InventoryHolder {
                // @ts-ignore
                constructor(inventory: cn.nukkit.inventory.Inventory, pos: cn.nukkit.level.Position)
                // @ts-ignore
                public getInventory(): cn.nukkit.inventory.Inventory;
            }
        }
    }
}
