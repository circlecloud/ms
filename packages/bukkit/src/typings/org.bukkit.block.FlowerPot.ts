declare namespace org {
    namespace bukkit {
        namespace block {
            class FlowerPot {
                /**
                 * Gets the item present in this flower pot.
                 */
                public getContents(): org.bukkit.material.MaterialData;
                /**
                 * Sets the item present in this flower pot.
                 * NOTE: The Vanilla Minecraft client will currently not refresh this until
                 * a block update is triggered.
                 */
                public setContents(item: org.bukkit.material.MaterialData): void;
            }
        }
    }
}
