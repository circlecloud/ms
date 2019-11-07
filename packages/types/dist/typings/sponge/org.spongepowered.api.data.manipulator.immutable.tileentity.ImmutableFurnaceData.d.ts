declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace tileentity {
                            // @ts-ignore
                            interface ImmutableFurnaceData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the already passed burn
                                 * time of the {@link Furnace}. When the {@code #passedBurnTime()} is equal
                                 * to the {@link #maxBurnTime()}, the current used fuel is depleted.
                                 */
                                // @ts-ignore
                                 passedBurnTime(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the maximum amount of fuel
                                 * that can be supplied with the used fuel item.
                                 * <p>This is represented by the flame icon in the {@link Furnace}, if the
                                 * flame is 100% filled the value is exactly this one. So its the maximum
                                 * of the {@link #passedBurnTime()}.</p>
                                 */
                                // @ts-ignore
                                 maxBurnTime(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the already passed cook time
                                 * of the {@link ItemStack} in the {@link Furnace}. When this is equal
                                 * to the {@link #maxCookTime()}, the {@link ItemStack} is cooked.
                                 */
                                // @ts-ignore
                                 passedCookTime(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the total time the
                                 * {@link ItemStack} has to cook until it is cooked.
                                 */
                                // @ts-ignore
                                 maxCookTime(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
