declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    namespace carrier {
                        // @ts-ignore
                        interface Furnace extends org.spongepowered.api.block.tileentity.carrier.TileEntityCarrier {
                            /**
                             * Attempts to smelt the current items if possible.
                             * <p>This will work if there is a compatible recipe.</p>
                             */
                            // @ts-ignore
                             smelt(): boolean;
                            /**
                             * Gets this furnace's {@link FurnaceData}.
                             */
                            // @ts-ignore
                             getFurnaceData(): org.spongepowered.api.data.manipulator.mutable.tileentity.FurnaceData;
                            /**
                             * Gets the {@link MutableBoundedValue} for the already passed burn time.
                             */
                            // @ts-ignore
                             passedBurnTime(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                            /**
                             * Gets the {@link MutableBoundedValue} for the maximum amount of fuel that
                             * can be supplied with the used fuel item.
                             */
                            // @ts-ignore
                             maxBurnTime(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                            /**
                             * Gets the {@link MutableBoundedValue} for the already passed cook time of
                             * the item stack in this furnace.
                             */
                            // @ts-ignore
                             passedCookTime(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                            /**
                             * Gets the {@link MutableBoundedValue} for the total time the item stack
                             * has to cook until it is cooked.
                             */
                            // @ts-ignore
                             maxCookTime(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                        }
                    }
                }
            }
        }
    }
}
