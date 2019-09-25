declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace filter {
                    namespace data {
                        // @ts-ignore
                        interface Has {
                            /**
                             * Gets the {@link DataManipulator} type to test for.
                             */
                            // @ts-ignore
                             value(): any;
                            /**
                             * If true the standard behavior of this filter is reversed and events where
                             * the annotated parameter <strong>does have</strong> the specified data
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
