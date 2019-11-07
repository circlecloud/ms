// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace item {
                            // @ts-ignore
                            interface ImmutableBreakableData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Gets the {@link ImmutableSetValue} for all known {@link BlockType}s that
                                 * can be broken by the owning {@link ItemStack}.
                                 */
                                // @ts-ignore
                                 breakable(): org.spongepowered.api.data.value.immutable.ImmutableSetValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
