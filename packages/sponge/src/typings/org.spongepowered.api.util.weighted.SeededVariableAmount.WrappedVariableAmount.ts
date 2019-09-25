declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    namespace SeededVariableAmount {
                        // @ts-ignore
                         class WrappedVariableAmount implements org.spongepowered.api.util.weighted.SeededVariableAmount {
                            /**
                             * Creates a new WrappedVariableAmount wrapping the given
                             * {@link VariableAmount}.
                             */
                            constructor(inner: org.spongepowered.api.util.weighted.VariableAmount)
                            // @ts-ignore
                            public getAmount(rand: any, seed: any): number;
                            // @ts-ignore
                            public toString(): string;
                            // @ts-ignore
                            public equals(obj: any): boolean;
                            // @ts-ignore
                            public hashCode(): number;
                        }
                    }
                }
            }
        }
    }
}
