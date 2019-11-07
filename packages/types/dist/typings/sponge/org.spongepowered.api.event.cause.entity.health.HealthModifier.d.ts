declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace health {
                            // @ts-ignore
                            interface HealthModifier {
                                /**
                                 * Creates a new {@link Builder} for constructing new {@link HealthModifier}s.
                                 */
                                // @ts-ignore
                                 builder(): org.spongepowered.api.event.cause.entity.health.HealthModifier.Builder;
                                /**
                                 * Gets the {@link HealthModifierType} for this {@link HealthModifier}.
                                 */
                                // @ts-ignore
                                 getType(): org.spongepowered.api.event.cause.entity.health.HealthModifierType;
                                /**
                                 * Gets the cause of this {@link HealthModifier}.
                                 */
                                // @ts-ignore
                                 getCause(): org.spongepowered.api.event.cause.Cause;
                            }
                        }
                    }
                }
            }
        }
    }
}
