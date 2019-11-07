declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface FlowerPot extends org.bukkit.block.BlockState {
                /**
                 * Gets the item present in this flower pot.
                 */
                // @ts-ignore
                 getContents(): org.bukkit.material.MaterialData;
                /**
                 * Sets the item present in this flower pot.
                 * NOTE: The Vanilla Minecraft client will currently not refresh this until
                 * a block update is triggered.
                 */
                // @ts-ignore
                 setContents(item: org.bukkit.material.MaterialData): void;
            }
        }
    }
}
