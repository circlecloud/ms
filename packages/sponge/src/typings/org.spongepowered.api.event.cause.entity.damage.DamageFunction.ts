declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            // @ts-ignore
                             class DamageFunction implements org.spongepowered.api.event.cause.entity.ModifierFunction {
                                /**
                                 * Creates a new {@link DamageFunction} with the provided
                                 * {@link DamageModifier}. The caveat is that the provided
                                 * {@link DamageFunction} is by default going to provide {@code 0}
                                 * damage modifications.
                                 */
                                constructor(modifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier)
                                /**
                                 * Creates a new {@link DamageFunction} with the provided
                                 * {@link DamageModifier} and {@link DoubleUnaryOperator}.
                                 */
                                constructor(modifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: any)
                                // @ts-ignore
                                public static ZERO_DAMAGE: any;
                                /**
                                 * Constructs a new damage function.
                                 */
                                // @ts-ignore
                                public static of(first: org.spongepowered.api.event.cause.entity.damage.DamageModifier, second: any): org.spongepowered.api.event.cause.entity.damage.DamageFunction;
                                /**
                                 * Gets the {@link DamageModifier} for this function.
                                 */
                                // @ts-ignore
                                public getModifier(): org.spongepowered.api.event.cause.entity.damage.DamageModifier;
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
