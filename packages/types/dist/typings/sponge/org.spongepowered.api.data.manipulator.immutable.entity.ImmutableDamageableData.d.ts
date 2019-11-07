// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            // @ts-ignore
                            interface ImmutableDamageableData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Gets the {@link ImmutableOptionalValue} for the last attacker.
                                 * <p>This will usually be an entity snapshot of a {@link Living}.</p>
                                 * <p>This data will usually only be present within 100 ticks of the attack
                                 * occurring.</p>
                                 */
                                // @ts-ignore
                                 lastAttacker(): org.spongepowered.api.data.value.immutable.ImmutableOptionalValue;
                                /**
                                 * Gets the last amount of damage taken by this entity as an optional value.
                                 * <p>This data will usually only be present within 100 ticks of the attack
                                 * occurring.</p>
                                 */
                                // @ts-ignore
                                 lastDamage(): org.spongepowered.api.data.value.immutable.ImmutableOptionalValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
