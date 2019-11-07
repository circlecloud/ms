// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace annotation {
                    namespace eventgen {
                        // @ts-ignore
                        interface PropertySettings {
                            /**
                             * Indicates whether the annotated property is required to be passed in
                             * to the generated constructor.
                             */
                            // @ts-ignore
                             requiredParameter(): boolean;
                            /**
                             * Indicates whether the annotated property should have methods generated
                             * for it.
                             * <p>If this value is set to <code>true</code>,
                             * {@link #requiredParameter()} can only be set to <code>false</code> if
                             * the annotated property is a primitive.</p>
                             */
                            // @ts-ignore
                             generateMethods(): boolean;
                        }
                    }
                }
            }
        }
    }
}
