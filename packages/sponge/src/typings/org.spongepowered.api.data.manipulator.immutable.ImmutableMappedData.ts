declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        // @ts-ignore
                        interface ImmutableMappedData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                            /**
                             * Gets the {@code value} for the provided {@code key}, if available.
                             */
                            // @ts-ignore
                             get(key: any): any;
                            /**
                             * Gets a {@link Set} of {@code keys} available in this manipulator.
                             */
                            // @ts-ignore
                             getMapKeys(): any[] /*java.util.Set*/;
                            /**
                             * Gets the {@link java.util.Map.Entry} {@link Set} of values.
                             */
                            // @ts-ignore
                             getMapValues(): any[] /*java.util.Set*/;
                            /**
                             * Gets the {@link ImmutableMapValue} of this manipulator.
                             */
                            // @ts-ignore
                             getMapValue(): org.spongepowered.api.data.value.immutable.ImmutableMapValue;
                            /**
                             * Gets this manipulator as a {@link Map}.
                             */
                            // @ts-ignore
                             asMap(): Map<any, any> /*java.util.Map*/;
                        }
                    }
                }
            }
        }
    }
}
