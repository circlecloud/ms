declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace tileentity {
                            // @ts-ignore
                            interface BeaconData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the {@link OptionalValue} for the primary
                                 * {@link PotionEffectType}.
                                 */
                                // @ts-ignore
                                 primaryEffect(): org.spongepowered.api.data.value.mutable.OptionalValue;
                                /**
                                 * Gets the {@link OptionalValue} for the secondary
                                 * {@link PotionEffectType}.
                                 */
                                // @ts-ignore
                                 secondaryEffect(): org.spongepowered.api.data.value.mutable.OptionalValue;
                                /**
                                 * Fills the primary and secondary {@link PotionEffectType}s
                                 * with {@link Optional#empty()} values as a semi "reset" state.
                                 */
                                // @ts-ignore
                                 clearEffects(): org.spongepowered.api.data.manipulator.mutable.tileentity.BeaconData;
                            }
                        }
                    }
                }
            }
        }
    }
}
