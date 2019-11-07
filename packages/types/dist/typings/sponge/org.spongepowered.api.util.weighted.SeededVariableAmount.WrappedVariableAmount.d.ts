// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    namespace SeededVariableAmount {
                        // @ts-ignore
                         class WrappedVariableAmount extends java.lang.Object implements org.spongepowered.api.util.weighted.SeededVariableAmount {
                            /**
                             * Creates a new WrappedVariableAmount wrapping the given
                             * {@link VariableAmount}.
                             */
                            // @ts-ignore
                            constructor(inner: org.spongepowered.api.util.weighted.VariableAmount)
                            // @ts-ignore
                            public getAmount(rand: java.util.Random, seed: java.lang.Object): number;
                            // @ts-ignore
                            public toString(): string;
                            // @ts-ignore
                            public equals(obj: java.lang.Object): boolean;
                            // @ts-ignore
                            public hashCode(): number;
                        }
                    }
                }
            }
        }
    }
}
