declare namespace org {
    namespace bukkit {
        namespace entity {
            class FallingBlock {
                /**
                 * Get the Material of the falling block
                 */
                public getMaterial(): org.bukkit.Material;
                /**
                 * Get the data for the falling block
                 */
                public getBlockData(): org.bukkit.block.data.BlockData;
                /**
                 * Get if the falling block will break into an item if it cannot be placed
                 */
                public getDropItem(): boolean;
                /**
                 * Set if the falling block will break into an item if it cannot be placed
                 */
                public setDropItem(drop: boolean): void;
                /**
                 * Get the HurtEntities state of this block.
                 */
                public canHurtEntities(): boolean;
                /**
                 * Set the HurtEntities state of this block.
                 */
                public setHurtEntities(hurtEntities: boolean): void;
            }
        }
    }
}
