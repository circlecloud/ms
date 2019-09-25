declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    // @ts-ignore
                    interface Skull extends org.spongepowered.api.block.tileentity.TileEntity {
                        /**
                         * Gets the current {@link SkullData} for this {@link Skull}
                         * {@link TileEntity}.
                         */
                        // @ts-ignore
                         getSkullData(): org.spongepowered.api.data.manipulator.mutable.SkullData;
                        /**
                         * Gets the current {@link SkullType} for this {@link Skull}.
                         */
                        // @ts-ignore
                         skullType(): org.spongepowered.api.data.value.mutable.Value;
                    }
                }
            }
        }
    }
}
