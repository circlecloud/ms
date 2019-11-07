// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    // @ts-ignore
                    interface VariableAmount extends org.spongepowered.api.data.DataSerializable {
                        /**
                         * Creates a new 'fixed' variable amount, calls to {@link #getAmount} will
                         * always return the fixed value.
                         */
                        // @ts-ignore
                         fixed(value: number): org.spongepowered.api.util.weighted.VariableAmount;
                        /**
                         * Creates a new variable amount which return values between the given min
                         * (inclusive) and max (exclusive).
                         */
                        // @ts-ignore
                         range(min: number, max: number): org.spongepowered.api.util.weighted.VariableAmount;
                        /**
                         * Creates a new variable about which has a base and variance. The final
                         * amount will be the base amount plus or minus a random amount between zero
                         * (inclusive) and the variance (exclusive).
                         */
                        // @ts-ignore
                         baseWithVariance(base: number, variance: number): org.spongepowered.api.util.weighted.VariableAmount;
                        /**
                         * Creates a new variable about which has a base and variance. The final
                         * amount will be the base amount plus or minus a random amount between zero
                         * (inclusive) and the variance (exclusive).
                         */
                        // @ts-ignore
                         baseWithVariance(base: number, variance: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.util.weighted.VariableAmount;
                        /**
                         * Creates a new variable amount which has a base and an additional amount.
                         * The final amount will be the base amount plus a random amount between
                         * zero (inclusive) and the additional amount (exclusive).
                         */
                        // @ts-ignore
                         baseWithRandomAddition(base: number, addition: number): org.spongepowered.api.util.weighted.VariableAmount;
                        /**
                         * Creates a new variable amount which has a base and an additional amount.
                         * The final amount will be the base amount plus a random amount between
                         * zero (inclusive) and the additional amount (exclusive).
                         */
                        // @ts-ignore
                         baseWithRandomAddition(base: number, addition: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.util.weighted.VariableAmount;
                        /**
                         * Creates a new variable about which has a base and a chance to apply a
                         * random variance. The chance should be between zero and one with a chance
                         * of one signifying that the variance will always be applied. If the chance
                         * succeeds then the final amount will be the base amount plus or minus a
                         * random amount between zero (inclusive) and the variance (exclusive). If
                         * the chance fails then the final amount will just be the base value.
                         */
                        // @ts-ignore
                         baseWithOptionalVariance(base: number, variance: number, chance: number): org.spongepowered.api.util.weighted.VariableAmount;
                        /**
                         * Creates a new variable about which has a base and a chance to apply a
                         * random variance. The chance should be between zero and one with a chance
                         * of one signifying that the variance will always be applied. If the chance
                         * succeeds then the final amount will be the base amount plus or minus a
                         * random amount between zero (inclusive) and the variance (exclusive). If
                         * the chance fails then the final amount will just be the base value.
                         */
                        // @ts-ignore
                         baseWithOptionalVariance(base: number, variance: org.spongepowered.api.util.weighted.VariableAmount, chance: number): org.spongepowered.api.util.weighted.VariableAmount;
                        /**
                         * Creates a new variable about which has a base and a chance to apply a
                         * random additional amount. The chance should be between zero and one with
                         * a chance of one signifying that the additional amount will always be
                         * applied. If the chance succeeds then the final amount will be the base
                         * amount plus a random amount between zero (inclusive) and the additional
                         * amount (exclusive). If the chance fails then the final amount will just
                         * be the base value.
                         */
                        // @ts-ignore
                         baseWithOptionalAddition(base: number, addition: number, chance: number): org.spongepowered.api.util.weighted.VariableAmount;
                        /**
                         * Creates a new variable about which has a base and a chance to apply a
                         * random additional amount. The chance should be between zero and one with
                         * a chance of one signifying that the additional amount will always be
                         * applied. If the chance succeeds then the final amount will be the base
                         * amount plus a random amount between zero (inclusive) and the additional
                         * amount (exclusive). If the chance fails then the final amount will just
                         * be the base value.
                         */
                        // @ts-ignore
                         baseWithOptionalAddition(base: number, addition: org.spongepowered.api.util.weighted.VariableAmount, chance: number): org.spongepowered.api.util.weighted.VariableAmount;
                        /**
                         * Gets an instance of the variable amount depending on the given random
                         * object.
                         */
                        // @ts-ignore
                         getAmount(rand: java.util.Random): number;
                        /**
                         * Gets the amount as if from {@link #getAmount(Random)} but floored to the
                         * nearest integer equivalent.
                         */
                        // @ts-ignore
                         getFlooredAmount(rand: java.util.Random): number;
                        // @ts-ignore
                         toContainer(): org.spongepowered.api.data.DataContainer;
                        // @ts-ignore
                         getContentVersion(): number;
                    }
                }
            }
        }
    }
}
