// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace health {
                            // @ts-ignore
                             class HealthFunction extends java.lang.Object implements org.spongepowered.api.event.cause.entity.ModifierFunction {
                                /**
                                 * Creates a new {@link HealthFunction} with the provided
                                 * {@link HealthModifier}. The caveat is that the provided
                                 * {@link DoubleUnaryOperator} is by default going to provide {@code 0}
                                 * healing modifications.
                                 */
                                // @ts-ignore
                                constructor(modifier: org.spongepowered.api.event.cause.entity.health.HealthModifier)
                                /**
                                 * Creates a new {@link HealthFunction} with the provided
                                 * {@link HealthModifier} and function.
                                 */
                                // @ts-ignore
                                constructor(modifier: org.spongepowered.api.event.cause.entity.health.HealthModifier, func: java.util.function$.DoubleUnaryOperator)
                                // @ts-ignore
                                public static NO_HEALTH: java.util.function$.DoubleUnaryOperator;
                                /**
                                 * Constructs a new health function.
                                 */
                                // @ts-ignore
                                public static of(first: org.spongepowered.api.event.cause.entity.health.HealthModifier, second: java.util.function$.DoubleUnaryOperator): org.spongepowered.api.event.cause.entity.health.HealthFunction;
                                /**
                                 * Gets the {@link HealthModifier} for this function.
                                 */
                                // @ts-ignore
                                public getModifier(): org.spongepowered.api.event.cause.entity.health.HealthModifier;
                                /**
                                 * Gets the {@link DoubleUnaryOperator} for this function.
                                 */
                                // @ts-ignore
                                public getFunction(): java.util.function$.DoubleUnaryOperator;
                                // @ts-ignore
                                public toString(): string;
                                // @ts-ignore
                                public equals(o: java.lang.Object): boolean;
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
