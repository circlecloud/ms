declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace annotation {
                    namespace eventgen {
                        // @ts-ignore
                        interface ImplementedBy {
                            /**
                             * Gets the class which serves as the base class which the generated class
                             * for this event interface will extend.
                             */
                            // @ts-ignore
                             value(): java.lang.Class;
                            /**
                             * Gets the priority for this annotation, relative to other annotations in
                             * the same hierarchy of the event interface.
                             * <p>The annotation with the highest priority will be used.</p>
                             */
                            // @ts-ignore
                             priority(): number;
                        }
                    }
                }
            }
        }
    }
}
