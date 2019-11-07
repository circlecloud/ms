// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            // @ts-ignore
                            interface ImmutableDamagingData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Gets the damage this projectile will deal to an {@link Entity} if hit.
                                 */
                                // @ts-ignore
                                 damage(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the {@link ImmutableMapValue} for representing the custom damage
                                 * values to use if the owner strikes an entity of that type.
                                 * <p>Note that in events, the damage defined for the provided
                                 * {@link EntityType} will take priority over the "default" damage as
                                 * defined from {@link #damage()}.</p>
                                 */
                                // @ts-ignore
                                 damageForEntityTypes(): org.spongepowered.api.data.value.immutable.ImmutableMapValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
