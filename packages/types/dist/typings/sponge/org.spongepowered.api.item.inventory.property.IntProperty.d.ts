declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        // @ts-ignore
                         class IntProperty extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty {
                            /**
                             * Create a new integer property with the specified value.
                             */
                            // @ts-ignore
                            constructor(value: number)
                            /**
                             * Create a new integer property with the specified value and logical
                             * operator.
                             */
                            // @ts-ignore
                            constructor(value: number, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a new integer property with the specified value and logical
                             * operator.
                             */
                            // @ts-ignore
                            constructor(value: java.lang.Object, operator: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public compareTo(other: org.spongepowered.api.data.Property): number;
                            /**
                             * Create an {@link IntProperty} property which matches {@link IntProperty}
                             * properties with equal value.
                             */
                            // @ts-ignore
                            public static of(value: java.lang.Object): org.spongepowered.api.item.inventory.property.IntProperty;
                            /**
                             * Create an {@link IntProperty} property which matches {@link IntProperty}
                             * properties with unequal value.
                             */
                            // @ts-ignore
                            public static not(value: java.lang.Object): org.spongepowered.api.item.inventory.property.IntProperty;
                            /**
                             * Create an {@link IntProperty} property which matches {@link IntProperty}
                             * properties with value greater than this value.
                             */
                            // @ts-ignore
                            public static greaterThan(value: java.lang.Object): org.spongepowered.api.item.inventory.property.IntProperty;
                            /**
                             * Create an {@link IntProperty} property which matches {@link IntProperty}
                             * properties with value greater than or equal to this value.
                             */
                            // @ts-ignore
                            public static greaterThanOrEqual(value: java.lang.Object): org.spongepowered.api.item.inventory.property.IntProperty;
                            /**
                             * Create an {@link IntProperty} property which matches {@link IntProperty}
                             * properties with value less than this value.
                             */
                            // @ts-ignore
                            public static lessThan(value: java.lang.Object): org.spongepowered.api.item.inventory.property.IntProperty;
                            /**
                             * Create an {@link IntProperty} property which matches {@link IntProperty}
                             * properties with value less than or equal to this value.
                             */
                            // @ts-ignore
                            public static lessThanOrEqual(value: java.lang.Object): org.spongepowered.api.item.inventory.property.IntProperty;
                        }
                    }
                }
            }
        }
    }
}
