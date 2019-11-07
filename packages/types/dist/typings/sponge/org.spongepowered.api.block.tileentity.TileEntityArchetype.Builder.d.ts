// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    namespace TileEntityArchetype {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.data.persistence.DataBuilder {
                            // @ts-ignore
                             reset(): org.spongepowered.api.block.tileentity.TileEntityArchetype.Builder;
                            // @ts-ignore
                             from(value: org.spongepowered.api.block.tileentity.TileEntityArchetype): org.spongepowered.api.block.tileentity.TileEntityArchetype.Builder;
                            // @ts-ignore
                             from(location: org.spongepowered.api.world.Location): org.spongepowered.api.block.tileentity.TileEntityArchetype.Builder;
                            /**
                             * Sets the {@link BlockState} of the archetype.
                             */
                            // @ts-ignore
                             state(state: org.spongepowered.api.block.BlockState): org.spongepowered.api.block.tileentity.TileEntityArchetype.Builder;
                            // @ts-ignore
                             tile(tileEntityType: org.spongepowered.api.block.tileentity.TileEntityType): org.spongepowered.api.block.tileentity.TileEntityArchetype.Builder;
                            // @ts-ignore
                             tile(tileEntity: org.spongepowered.api.block.tileentity.TileEntity): org.spongepowered.api.block.tileentity.TileEntityArchetype.Builder;
                            // @ts-ignore
                             tileData(dataView: org.spongepowered.api.data.DataView): org.spongepowered.api.block.tileentity.TileEntityArchetype.Builder;
                            // @ts-ignore
                             setData(manipulator: org.spongepowered.api.data.manipulator.DataManipulator): org.spongepowered.api.block.tileentity.TileEntityArchetype.Builder;
                            // @ts-ignore
                             set(value: org.spongepowered.api.data.value.BaseValue): org.spongepowered.api.block.tileentity.TileEntityArchetype.Builder;
                            // @ts-ignore
                             set(key: org.spongepowered.api.data.key.Key, value: java.lang.Object): org.spongepowered.api.block.tileentity.TileEntityArchetype.Builder;
                            /**
                             * Creates a new {@link TileEntityArchetype} from this builder.
                             */
                            // @ts-ignore
                             build(): org.spongepowered.api.block.tileentity.TileEntityArchetype;
                        }
                    }
                }
            }
        }
    }
}
