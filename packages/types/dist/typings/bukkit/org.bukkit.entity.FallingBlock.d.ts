declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface FallingBlock extends org.bukkit.entity.Entity {
                /**
                 * Get the Material of the falling block
                 */
                // @ts-ignore
                 getMaterial(): org.bukkit.Material;
                /**
                 * Get the data for the falling block
                 */
                // @ts-ignore
                 getBlockData(): org.bukkit.block.data.BlockData;
                /**
                 * Get if the falling block will break into an item if it cannot be placed
                 */
                // @ts-ignore
                 getDropItem(): boolean;
                /**
                 * Set if the falling block will break into an item if it cannot be placed
                 */
                // @ts-ignore
                 setDropItem(drop: boolean): void;
                /**
                 * Get the HurtEntities state of this block.
                 */
                // @ts-ignore
                 canHurtEntities(): boolean;
                /**
                 * Set the HurtEntities state of this block.
                 */
                // @ts-ignore
                 setHurtEntities(hurtEntities: boolean): void;
            }
        }
    }
}
