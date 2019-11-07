declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    namespace carrier {
                        // @ts-ignore
                        interface ShulkerBox extends org.spongepowered.api.block.tileentity.carrier.TileEntityCarrier {
                            /**
                             * Gets a copy of the {@link DyeableData} representing the color of this
                             * {@link ShulkerBox}.
                             */
                            // @ts-ignore
                             getDyeData(): org.spongepowered.api.data.manipulator.mutable.DyeableData;
                            /**
                             * Gets the current {@link Value} of {@link DyeColor} for this
                             * {@link ShulkerBox}.
                             */
                            // @ts-ignore
                             color(): org.spongepowered.api.data.value.mutable.Value;
                        }
                    }
                }
            }
        }
    }
}
