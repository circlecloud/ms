// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    // @ts-ignore
                    interface Sign extends org.spongepowered.api.block.tileentity.TileEntity {
                        /**
                         * Gets the current {@link SignData} for this {@link Sign} tile entity.
                         */
                        // @ts-ignore
                         getSignData(): org.spongepowered.api.data.manipulator.mutable.tileentity.SignData;
                        /**
                         * Gets the {@link ListValue} of {@link Text} for the {@link Sign}
                         * to show.
                         */
                        // @ts-ignore
                         lines(): org.spongepowered.api.data.value.mutable.ListValue;
                    }
                }
            }
        }
    }
}
