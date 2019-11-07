// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace item {
                            // @ts-ignore
                            interface ImmutableDurabilityData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the "durability" remaining.
                                 * The durability is a number signifying how many "uses' remain on the
                                 * item. When the durability reaches 0, usually, the item breaks.
                                 */
                                // @ts-ignore
                                 durability(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                                /**
                                 * Gets the {@link ImmutableValue} for the "unbreakable" state of the
                                 * {@link ItemStack}. While the {@link ItemStack} is "unbreakable",
                                 * the durability can not change.
                                 */
                                // @ts-ignore
                                 unbreakable(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
