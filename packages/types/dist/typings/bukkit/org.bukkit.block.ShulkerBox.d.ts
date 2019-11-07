declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface ShulkerBox extends org.bukkit.block.Container, org.bukkit.loot.Lootable {
                /**
                 * Get the {@link DyeColor} corresponding to this ShulkerBox
                 */
                // @ts-ignore
                 getColor(): org.bukkit.DyeColor;
            }
        }
    }
}
