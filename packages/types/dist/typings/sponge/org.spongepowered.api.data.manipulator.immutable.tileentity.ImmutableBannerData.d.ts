declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace tileentity {
                            // @ts-ignore
                            interface ImmutableBannerData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Gets the {@link ImmutableValue} for the base {@link DyeColor}.
                                 */
                                // @ts-ignore
                                 baseColor(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the {@link ImmutablePatternListValue} of all patterns for the
                                 * {@link Banner}.
                                 */
                                // @ts-ignore
                                 patterns(): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
