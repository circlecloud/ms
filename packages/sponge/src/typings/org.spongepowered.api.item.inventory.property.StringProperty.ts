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
                            constructor(value: string)
                            /**
                             * Create a new {@link StringProperty} for matching the specified value
                             * with the specified operator.
                             */
                            constructor(value: string, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a new {@link StringProperty} for matching the specified value
                             * with the specified operator.
                             */
                            constructor(value: any, operator: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public compareTo(other: org.spongepowered.api.data.Property): number;
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with equal value.
                             */
                            // @ts-ignore
                            public static of(value: any): org.spongepowered.api.item.inventory.property.StringProperty;
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with unequal value.
                             */
                            // @ts-ignore
                            public static not(value: any): org.spongepowered.api.item.inventory.property.StringProperty;
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with value greater than this value.
                             */
                            // @ts-ignore
                            public static greaterThan(value: any): org.spongepowered.api.item.inventory.property.StringProperty;
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with value greater than or equal to this
                             * value.
                             */
                            // @ts-ignore
                            public static greaterThanOrEqual(value: any): org.spongepowered.api.item.inventory.property.StringProperty;
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with value less than this value.
                             */
                            // @ts-ignore
                            public static lessThan(value: any): org.spongepowered.api.item.inventory.property.StringProperty;
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with value less than or equal to this value.
                             */
                            // @ts-ignore
                            public static lessThanOrEqual(value: any): org.spongepowered.api.item.inventory.property.StringProperty;
                        }
                    }
                }
            }
        }
    }
}
