declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Enderman extends org.bukkit.entity.Monster {
                /**
                 * Gets the id and data of the block that the Enderman is carrying.
                 */
                // @ts-ignore
                 getCarriedMaterial(): org.bukkit.material.MaterialData;
                /**
                 * Sets the id and data of the block that the Enderman is carrying.
                 */
                // @ts-ignore
                 setCarriedMaterial(material: org.bukkit.material.MaterialData): void;
                /**
                 * Gets the data of the block that the Enderman is carrying.
                 */
                // @ts-ignore
                 getCarriedBlock(): org.bukkit.block.data.BlockData;
                /**
                 * Sets the data of the block that the Enderman is carrying.
                 */
                // @ts-ignore
                 setCarriedBlock(blockData: org.bukkit.block.data.BlockData): void;
            }
        }
    }
}
