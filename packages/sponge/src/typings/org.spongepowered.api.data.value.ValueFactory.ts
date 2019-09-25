declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    // @ts-ignore
                    interface ValueFactory {
                        /**
                         * Creates a new {@link Value} with the provided {@link Key} and the
                         * <code>E</code> element.
                         */
                        // @ts-ignore
                         createValue(key: org.spongepowered.api.data.key.Key, element: any): org.spongepowered.api.data.value.mutable.Value;
                        /**
                         * Creates a new {@link Value} with the provided {@link Key} and the
                         * <code>E</code> element and the provided <code>E</code> default value.
                         */
                        // @ts-ignore
                         createValue(key: org.spongepowered.api.data.key.Key, element: any, defaultValue: any): org.spongepowered.api.data.value.mutable.Value;
                        /**
                         * Creates a new {@link ListValue} with the provided {@link Key} and
                         * {@link List} of elements. The default value will be an empty list.
                         */
                        // @ts-ignore
                         createListValue(key: org.spongepowered.api.data.key.Key, elements: any[] /*java.util.List*/): org.spongepowered.api.data.value.mutable.ListValue;
                        /**
                         * Creates a new {@link ListValue} with the provided {@link Key} and
                         * {@link List} of elements.
                         */
                        // @ts-ignore
                         createListValue(key: org.spongepowered.api.data.key.Key, elements: any[] /*java.util.List*/, defaults: any[] /*java.util.List*/): org.spongepowered.api.data.value.mutable.ListValue;
                        /**
                         * Creates a new {@link SetValue} with the provided {@link Key} and
                         * {@link Set} of elements.
                         */
                        // @ts-ignore
                         createSetValue(key: org.spongepowered.api.data.key.Key, elements: any[] /*java.util.Set*/): org.spongepowered.api.data.value.mutable.SetValue;
                        /**
                         * Creates a new {@link SetValue} with the provided {@link Key} and
                         * {@link Set} of elements.
                         */
                        // @ts-ignore
                         createSetValue(key: org.spongepowered.api.data.key.Key, elements: any[] /*java.util.Set*/, defaults: any[] /*java.util.Set*/): org.spongepowered.api.data.value.mutable.SetValue;
                        /**
                         * Creates a new {@link MapValue} of the provided {@link Key} with the
                         * types <code>K</code> and <code>V</code>.
                         */
                        // @ts-ignore
                         createMapValue(key: org.spongepowered.api.data.key.Key, map: Map<any, any> /*java.util.Map*/): org.spongepowered.api.data.value.mutable.MapValue;
                        /**
                         * Creates a new {@link MapValue} of the provided {@link Key} with the
                         * types <code>K</code> and <code>V</code> along with the provided
                         * {@link Map} defaults.
                         */
                        // @ts-ignore
                         createMapValue(key: org.spongepowered.api.data.key.Key, map: Map<any, any> /*java.util.Map*/, defaults: Map<any, any> /*java.util.Map*/): org.spongepowered.api.data.value.mutable.MapValue;
                        /**
                         * Creates a {@link BoundedValueBuilder}
                         */
                        // @ts-ignore
                         createBoundedValueBuilder(key: org.spongepowered.api.data.key.Key): org.spongepowered.api.data.value.ValueFactory.BoundedValueBuilder;
                        /**
                         * Creates an {@link OptionalValue} where even the default value may be
                         * {@link Optional#empty()}. These types of values should be restricted
                         * to values that are live, that can be potentially large to retain a
                         * reference to, and otherwise, not thread safe.
                         */
                        // @ts-ignore
                         createOptionalValue(key: org.spongepowered.api.data.key.Key, element: any): org.spongepowered.api.data.value.mutable.OptionalValue;
                        /**
                         * Creates an {@link OptionalValue} where the default is NOT
                         * <code>null</code>, such that the actual value may be retained as
                         * <code>null</code>.
                         */
                        // @ts-ignore
                         createOptionalValue(key: org.spongepowered.api.data.key.Key, element: any, defaultElement: any): org.spongepowered.api.data.value.mutable.OptionalValue;
                    }
                }
            }
        }
    }
}
