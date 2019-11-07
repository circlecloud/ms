declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace filter {
                    namespace data {
                        // @ts-ignore
                        interface Supports {
                            /**
                             * Gets the {@link DataManipulator} type to test for.
                             */
                            // @ts-ignore
                             value(): java.lang.Class;
                            /**
                             * If true the standard behavior of this filter is reversed and events where
                             * the annotated parameter <strong>does support</strong> the specified data
                             * manipulator type are filtered out.
                             */
                            // @ts-ignore
                             inverse(): boolean;
                        }
                    }
                }
            }
        }
    }
}
