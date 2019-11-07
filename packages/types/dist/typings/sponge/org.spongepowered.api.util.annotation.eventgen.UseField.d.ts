declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace annotation {
                    namespace eventgen {
                        // @ts-ignore
                        interface UseField {
                            /**
                             * Indicates whether to use the annotated field directly in the
                             * generated '{@link #toString()}' method, rather than calling the
                             * normal accessor method.
                             * <p>This should only be used when there are special restrictions
                             * on calling the accessor (for example,
                             * {@link AffectEntityEvent#getEntitySnapshots()}).</p>
                             */
                            // @ts-ignore
                             overrideToString(): boolean;
                        }
                    }
                }
            }
        }
    }
}
