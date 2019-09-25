declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace health {
                            // @ts-ignore
                             class HealthFunction implements org.spongepowered.api.event.cause.entity.ModifierFunction {
                                /**
                                 * Creates a new {@link HealthFunction} with the provided
                                 * {@link HealthModifier}. The caveat is that the provided
                                 * {@link DoubleUnaryOperator} is by default going to provide {@code 0}
                                 * healing modifications.
                                 */
                                constructor(modifier: org.spongepowered.api.event.cause.entity.health.HealthModifier)
                                /**
                                 * Creates a new {@link HealthFunction} with the provided
                                 * {@link HealthModifier} and function.
                                 */
                                constructor(modifier: org.spongepowered.api.event.cause.entity.health.HealthModifier, func: any)
                                // @ts-ignore
                                public static NO_HEALTH: any;
                                /**
                                 * Constructs a new health function.
                                 */
                                // @ts-ignore
                                public static of(first: org.spongepowered.api.event.cause.entity.health.HealthModifier, second: any): org.spongepowered.api.event.cause.entity.health.HealthFunction;
                                /**
                                 * Gets the {@link HealthModifier} for this function.
                                 */
                                // @ts-ignore
                                public getModifier(): org.spongepowered.api.event.cause.entity.health.HealthModifier;
                                /**
                                 * Gets the {@link DoubleUnaryOperator} for this function.
                                 */
                                // @ts-ignore
                                public getFunction(): any;
                                // @ts-ignore
                                public toString(): string;
                                // @ts-ignore
                                public equals(o: any): boolean;
                                // @ts-ignore
                                public hashCode(): number;
                            }
                        }
                    }
                }
            }
        }
    }
}
