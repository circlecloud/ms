declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace immutable {
                        // @ts-ignore
                        interface ImmutableMapValue extends org.spongepowered.api.data.value.immutable.ImmutableValue {
                            /**
                             * Gets the size of this map.
                             */
                            // @ts-ignore
                             size(): number;
                            /**
                             * Associates the provided key to the provided value in the new map. If
                             * there already exists a value for the provided key, the value is
                             * replaced.
                             */
                            // @ts-ignore
                             with(key: any, value: any): org.spongepowered.api.data.value.immutable.ImmutableMapValue;
                            // @ts-ignore
                             with(value: Map<any, any> /*java.util.Map*/): org.spongepowered.api.data.value.immutable.ImmutableMapValue;
                            /**
                             * Associates all provided {@link Entry} along with all pre-existing
                             * map entries in a new {@link ImmutableMapValue}.
                             */
                            // @ts-ignore
                             withAll(map: Map<any, any> /*java.util.Map*/): org.spongepowered.api.data.value.immutable.ImmutableMapValue;
                            /**
                             * Creates a new {@link ImmutableMapValue} without the provided key and the
                             * associated value.
                             */
                            // @ts-ignore
                             without(key: any): org.spongepowered.api.data.value.immutable.ImmutableMapValue;
                            /**
                             * Creates a new {@link ImmutableMapValue} without the provided keys and
                             * their associated values.
                             */
                            // @ts-ignore
                             withoutAll(keys: any): org.spongepowered.api.data.value.immutable.ImmutableMapValue;
                            /**
                             * Creates a new {@link ImmutableMapValue} such that all entries are
                             * filtered by the provided {@link Predicate}, any that return
                             * {@code true} are retained in the new value. Elements that return
                             * <code>true</code> from {@link Predicate#test(Object)} are kept, and
                             * those that return <code>false</code> are excluded.
                             */
                            // @ts-ignore
                             withoutAll(predicate: any): org.spongepowered.api.data.value.immutable.ImmutableMapValue;
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
                             transform(func: any): org.spongepowered.api.data.value.immutable.ImmutableMapValue;
                            // @ts-ignore
                             asMutable(): org.spongepowered.api.data.value.mutable.MapValue;
                        }
                    }
                }
            }
        }
    }
}