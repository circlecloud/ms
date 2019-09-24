declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Enderman extends org.bukkit.entity.Monster {
                /**
                 * Gets the id and data of the block that the Enderman is carrying.
                 */
                 getCarriedMaterial(): org.bukkit.material.MaterialData;
                /**
                 * Sets the id and data of the block that the Enderman is carrying.
                 */
                 setCarriedMaterial(material: org.bukkit.material.MaterialData): void;
                /**
                 * Gets the data of the block that the Enderman is carrying.
                 */
                 getCarriedBlock(): org.bukkit.block.data.BlockData;
                /**
                 * Sets the data of the block that the Enderman is carrying.
                 */
                 setCarriedBlock(blockData: org.bukkit.block.data.BlockData): void;
            }
        }
    }
}
