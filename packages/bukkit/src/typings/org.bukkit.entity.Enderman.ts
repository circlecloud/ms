declare namespace org {
    namespace bukkit {
        namespace entity {
            class Enderman {
                /**
                 * Gets the id and data of the block that the Enderman is carrying.
                 */
                public getCarriedMaterial(): org.bukkit.material.MaterialData;
                /**
                 * Sets the id and data of the block that the Enderman is carrying.
                 */
                public setCarriedMaterial(material: org.bukkit.material.MaterialData): void;
                /**
                 * Gets the data of the block that the Enderman is carrying.
                 */
                public getCarriedBlock(): org.bukkit.block.data.BlockData;
                /**
                 * Sets the data of the block that the Enderman is carrying.
                 */
                public setCarriedBlock(blockData: org.bukkit.block.data.BlockData): void;
            }
        }
    }
}
