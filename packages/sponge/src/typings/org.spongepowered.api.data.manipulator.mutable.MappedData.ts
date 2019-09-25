declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        // @ts-ignore
                        interface MappedData extends org.spongepowered.api.data.manipulator.DataManipulator {
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
                             * Gets the {@link MapValue} of this manipulator.
                             */
                            // @ts-ignore
                             getMapValue(): org.spongepowered.api.data.value.mutable.MapValue;
                            /**
                             * Gets this manipulator as a {@link Map}.
                             */
                            // @ts-ignore
                             asMap(): Map<any, any> /*java.util.Map*/;
                            /**
                             * Sets the {@code value} with the provided {@code key}.
                             */
                            // @ts-ignore
                             put(key: any, value: any): org.spongepowered.api.data.manipulator.mutable.MappedData;
                            /**
                             * Sets all available {@link Map#entrySet()} values into this
                             * {@link MappedData} manipulator.
                             */
                            // @ts-ignore
                             putAll(map: Map<any, any> /*java.util.Map*/): org.spongepowered.api.data.manipulator.mutable.MappedData;
                            /**
                             * Removes any values keyed to the provided {@code key}.
                             */
                            // @ts-ignore
                             remove(key: any): org.spongepowered.api.data.manipulator.mutable.MappedData;
                        }
                    }
                }
            }
        }
    }
}