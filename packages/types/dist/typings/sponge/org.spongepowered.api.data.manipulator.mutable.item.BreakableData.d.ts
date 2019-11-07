declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace item {
                            // @ts-ignore
                            interface BreakableData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the {@link SetValue} for all known {@link BlockType}s that
                                 * can be broken by the owning {@link ItemStack}.
                                 */
                                // @ts-ignore
                                 breakable(): org.spongepowered.api.data.value.mutable.SetValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
