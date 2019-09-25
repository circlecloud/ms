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
                            constructor(value: number)
                            /**
                             * Create a new integer property with the specified value and logical
                             * operator.
                             */
                            constructor(value: number, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a new integer property with the specified value and logical
                             * operator.
                             */
                            constructor(value: any, operator: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public compareTo(other: org.spongepowered.api.data.Property): number;
                            /**
                             * Create an {@link IntProperty} property which matches {@link IntProperty}
                             * properties with equal value.
                             */
                            // @ts-ignore
                            public static of(value: any): org.spongepowered.api.item.inventory.property.IntProperty;
                            /**
                             * Create an {@link IntProperty} property which matches {@link IntProperty}
                             * properties with unequal value.
                             */
                            // @ts-ignore
                            public static not(value: any): org.spongepowered.api.item.inventory.property.IntProperty;
                            /**
                             * Create an {@link IntProperty} property which matches {@link IntProperty}
                             * properties with value greater than this value.
                             */
                            // @ts-ignore
                            public static greaterThan(value: any): org.spongepowered.api.item.inventory.property.IntProperty;
                            /**
                             * Create an {@link IntProperty} property which matches {@link IntProperty}
                             * properties with value greater than or equal to this value.
                             */
                            // @ts-ignore
                            public static greaterThanOrEqual(value: any): org.spongepowered.api.item.inventory.property.IntProperty;
                            /**
                             * Create an {@link IntProperty} property which matches {@link IntProperty}
                             * properties with value less than this value.
                             */
                            // @ts-ignore
                            public static lessThan(value: any): org.spongepowered.api.item.inventory.property.IntProperty;
                            /**
                             * Create an {@link IntProperty} property which matches {@link IntProperty}
                             * properties with value less than or equal to this value.
                             */
                            // @ts-ignore
                            public static lessThanOrEqual(value: any): org.spongepowered.api.item.inventory.property.IntProperty;
                        }
                    }
                }
            }
        }
    }
}
