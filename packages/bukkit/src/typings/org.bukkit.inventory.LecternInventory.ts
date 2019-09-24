declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface LecternInventory extends org.bukkit.inventory.Inventory {
                 getHolder(): org.bukkit.block.Lectern;
            }
        }
    }
}
