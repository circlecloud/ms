declare namespace org {
    namespace bukkit {
        namespace block {
            class DoubleChest {
                constructor(chest: org.bukkit.inventory.DoubleChestInventory)
                public getInventory(): org.bukkit.inventory.Inventory;
                public getLeftSide(): org.bukkit.inventory.InventoryHolder;
                public getRightSide(): org.bukkit.inventory.InventoryHolder;
                public getLocation(): org.bukkit.Location;
                public getWorld(): org.bukkit.World;
                public getX(): number;
                public getY(): number;
                public getZ(): number;
            }
        }
    }
}
