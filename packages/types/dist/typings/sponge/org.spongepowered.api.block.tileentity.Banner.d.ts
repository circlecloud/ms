declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    // @ts-ignore
                    interface Banner extends org.spongepowered.api.block.tileentity.TileEntity {
                        /**
                         * Gets the {@link BannerData data} of this {@link Banner banner}.
                         */
                        // @ts-ignore
                         getBannerData(): org.spongepowered.api.data.manipulator.mutable.tileentity.BannerData;
                        /**
                         * Gets the {@link Value} for the base {@link DyeColor}.
                         */
                        // @ts-ignore
                         baseColor(): org.spongepowered.api.data.value.mutable.Value;
                        /**
                         * Gets the {@link PatternListValue} of all patterns for the
                         * {@link Banner}.
                         */
                        // @ts-ignore
                         patternsList(): org.spongepowered.api.data.value.mutable.PatternListValue;
                    }
                }
            }
        }
    }
}
