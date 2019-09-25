declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace tileentity {
                            // @ts-ignore
                            interface ImmutableBeaconData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Gets the {@link ImmutableOptionalValue} for the primary
                                 * {@link PotionEffectType}.
                                 */
                                // @ts-ignore
                                 primaryEffect(): org.spongepowered.api.data.value.immutable.ImmutableOptionalValue;
                                /**
                                 * Gets the {@link ImmutableOptionalValue} for the secondary
                                 * {@link PotionEffectType}.
                                 */
                                // @ts-ignore
                                 secondaryEffect(): org.spongepowered.api.data.value.immutable.ImmutableOptionalValue;
                                /**
                                 * Creates a new {@link ImmutableBeaconData} with {@link Optional#empty()}
                                 * values for the primary and secondary {@link PotionEffectType}s.
                                 */
                                // @ts-ignore
                                 clearEffects(): org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableBeaconData;
                            }
                        }
                    }
                }
            }
        }
    }
}
