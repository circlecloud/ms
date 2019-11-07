// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        // @ts-ignore
                         class StringProperty extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty {
                            /**
                             * Create a new {@link StringProperty} for matching the specified value.
                             */
                            // @ts-ignore
                            constructor(value: string)
                            /**
                             * Create a new {@link StringProperty} for matching the specified value
                             * with the specified operator.
                             */
                            // @ts-ignore
                            constructor(value: string, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a new {@link StringProperty} for matching the specified value
                             * with the specified operator.
                             */
                            // @ts-ignore
                            constructor(value: java.lang.Object, operator: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public compareTo(other: org.spongepowered.api.data.Property): number;
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with equal value.
                             */
                            // @ts-ignore
                            public static of(value: java.lang.Object): org.spongepowered.api.item.inventory.property.StringProperty;
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with unequal value.
                             */
                            // @ts-ignore
                            public static not(value: java.lang.Object): org.spongepowered.api.item.inventory.property.StringProperty;
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with value greater than this value.
                             */
                            // @ts-ignore
                            public static greaterThan(value: java.lang.Object): org.spongepowered.api.item.inventory.property.StringProperty;
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with value greater than or equal to this
                             * value.
                             */
                            // @ts-ignore
                            public static greaterThanOrEqual(value: java.lang.Object): org.spongepowered.api.item.inventory.property.StringProperty;
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with value less than this value.
                             */
                            // @ts-ignore
                            public static lessThan(value: java.lang.Object): org.spongepowered.api.item.inventory.property.StringProperty;
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with value less than or equal to this value.
                             */
                            // @ts-ignore
                            public static lessThanOrEqual(value: java.lang.Object): org.spongepowered.api.item.inventory.property.StringProperty;
                        }
                    }
                }
            }
        }
    }
}
