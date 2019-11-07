declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface DamagingData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the damage this projectile will deal to a {@link Living}
                                 * if hit.
                                 */
                                // @ts-ignore
                                 damage(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                                /**
                                 * Gets the {@link MapValue} for representing the custom damage
                                 * values to use if the owner strikes an entity of that type.
                                 * <p>Note that in events, the damage defined for the provided
                                 * {@link EntityType} will take priority over the "default" damage as
                                 * defined from {@link #damage()}.</p>
                                 */
                                // @ts-ignore
                                 damageForEntity(): org.spongepowered.api.data.value.mutable.MapValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
