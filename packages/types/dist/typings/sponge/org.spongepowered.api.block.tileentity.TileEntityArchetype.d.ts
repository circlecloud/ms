declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    // @ts-ignore
                    interface TileEntityArchetype extends org.spongepowered.api.data.Archetype {
                        /**
                         * Creates a {@link Builder} to get {@link TileEntityArchetype}s.
                         */
                        // @ts-ignore
                         builder(): org.spongepowered.api.block.tileentity.TileEntityArchetype.Builder;
                        /**
                         * Gets the block state for this archetype. Note that this state is
                         * unchangeable, as much as {@link #getTileEntityType()} is. The underlying
                         * data is mutable, but all the data is heavily tied to the tile entity
                         * type.
                         */
                        // @ts-ignore
                         getState(): org.spongepowered.api.block.BlockState;
                        /**
                         * Gets the {@link TileEntityType} for this archetype.
                         */
                        // @ts-ignore
                         getTileEntityType(): org.spongepowered.api.block.tileentity.TileEntityType;
                        /**
                         * Gets the raw {@link TileEntity} data that would be applied to the
                         * generated tile entity. Note that this is a copied container.
                         */
                        // @ts-ignore
                         getTileData(): org.spongepowered.api.data.DataContainer;
                        /**
                         * Sets the raw data for the desired {@link TileEntity}. Note that position
                         * values are not used as those are dependent on usage.
                         */
                        // @ts-ignore
                         setRawData(container: org.spongepowered.api.data.DataView): void;
                        // @ts-ignore
                         copy(): org.spongepowered.api.block.tileentity.TileEntityArchetype;
                    }
                }
            }
        }
    }
}
