// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    // @ts-ignore
                    interface Bed extends org.spongepowered.api.block.tileentity.TileEntity {
                        /**
                         * Gets the {@link org.spongepowered.api.data.manipulator.mutable.tileentity.BedData data} of this {@link Bed bed}.
                         */
                        // @ts-ignore
                         getBedData(): org.spongepowered.api.data.manipulator.mutable.tileentity.BedData;
                        /**
                         * Gets the {@link DyeableData data} of this {@link Bed bed}.
                         */
                        // @ts-ignore
                         getDyeableData(): org.spongepowered.api.data.manipulator.mutable.DyeableData;
                        /**
                         * Gets the {@link Value} for the {@link DyeColor color}.
                         */
                        // @ts-ignore
                         color(): org.spongepowered.api.data.value.mutable.Value;
                    }
                }
            }
        }
    }
}
