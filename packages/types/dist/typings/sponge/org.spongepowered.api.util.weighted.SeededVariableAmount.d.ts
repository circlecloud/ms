// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    // @ts-ignore
                    interface SeededVariableAmount {
                        /**
                         * Creates a new 'fixed' variable amount, calls to {@link #getAmount} will
                         * always return the fixed value.
                         */
                        // @ts-ignore
                         fixed(value: number): org.spongepowered.api.util.weighted.SeededVariableAmount;
                        /**
                         * Creates a new variable amount wrapping the given {@link VariableAmount},
                         * calls to {@link #getAmount} will always return wrapped amounts value.
                         */
                        // @ts-ignore
                         wrapped(value: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.util.weighted.SeededVariableAmount;
                        /**
                         * Gets an instance of the variable amount depending on the given random
                         * object and the seed object.
                         */
                        // @ts-ignore
                         getAmount(rand: java.util.Random, seed: java.lang.Object): number;
                        /**
                         * Gets the amount as if from {@link #getAmount(Random, Object)} but floored
                         * to the nearest integer equivalent.
                         */
                        // @ts-ignore
                         getFlooredAmount(rand: java.util.Random, seed: java.lang.Object): number;
                    }
                }
            }
        }
    }
}
