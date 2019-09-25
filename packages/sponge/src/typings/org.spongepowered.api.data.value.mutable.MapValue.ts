declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace mutable {
                        // @ts-ignore
                        interface MapValue extends org.spongepowered.api.data.value.mutable.Value {
                            /**
                             * Gets the size of this map.
                             */
                            // @ts-ignore
                             size(): number;
                            /**
                             * Associates the provided key to the provided value. If there already
                             * exists a value for the provided key, the value is replaced.
                             */
                            // @ts-ignore
                             put(key: any, value: any): org.spongepowered.api.data.value.mutable.MapValue;
                            /**
                             * Associates all provided {@link Entry} to this map value.
                             */
                            // @ts-ignore
                             putAll(map: Map<any, any> /*java.util.Map*/): org.spongepowered.api.data.value.mutable.MapValue;
                            /**
                             * Removes the association of the provided key to the value currently
                             * associated.
                             */
                            // @ts-ignore
                             remove(key: any): org.spongepowered.api.data.value.mutable.MapValue;
                            /**
                             * Removes all key value associations of the provided keys.
                             */
                            // @ts-ignore
                             removeAll(keys: any): org.spongepowered.api.data.value.mutable.MapValue;
                            /**
                             * Applies the {@link Predicate} to all {@link Entry} within this
                             * {@link MapValue}. Any entries that are false will be removed from the
                             * map value.
                             */
                            // @ts-ignore
                             removeAll(predicate: any): org.spongepowered.api.data.value.mutable.MapValue;
                            /**
                             * Checks if the provided key is contained within this map.
                             */
                            // @ts-ignore
                             containsKey(key: any): boolean;
                            /**
                             * Checks if the provided value is contained within this map.
                             */
                            // @ts-ignore
                             containsValue(value: any): boolean;
                            /**
                             * Gets an {@link ImmutableSet} of all keys contained in this map value.
                             */
                            // @ts-ignore
                             keySet(): any;
                            /**
                             * Retrieves an {@link ImmutableSet} of the {@link Entry}s contained
                             * within this map value.
                             */
                            // @ts-ignore
                             entrySet(): any;
                            /**
                             * Retrieves an {@link ImmutableCollection} of all available values within
                             * this map.
                             */
                            // @ts-ignore
                             values(): any;
                            // @ts-ignore
                             transform(func: any): org.spongepowered.api.data.value.mutable.MapValue;
                            // @ts-ignore
                             asImmutable(): org.spongepowered.api.data.value.immutable.ImmutableMapValue;
                            // @ts-ignore
                             copy(): org.spongepowered.api.data.value.mutable.MapValue;
                        }
                    }
                }
            }
        }
    }
}
