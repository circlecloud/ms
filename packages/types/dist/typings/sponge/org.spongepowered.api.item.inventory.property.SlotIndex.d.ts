// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        // @ts-ignore
                         class SlotIndex extends org.spongepowered.api.item.inventory.property.IntProperty {
                            /**
                             * Creates a new SlotIndex property for the specified value.
                             */
                            // @ts-ignore
                            constructor(value: number)
                            /**
                             * Creates a new SlotIndex property for the specified value and operator.
                             */
                            // @ts-ignore
                            constructor(value: number, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Creates a new SlotIndex property for the specified value and operator.
                             */
                            // @ts-ignore
                            constructor(value: java.lang.Object, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a SlotIndex property which matches SlotIndex properties with
                             * equal value.
                             */
                            // @ts-ignore
                            public static of(value: java.lang.Object): org.spongepowered.api.item.inventory.property.SlotIndex;
                            /**
                             * Create a SlotIndex property which matches SlotIndex properties with
                             * unequal value.
                             */
                            // @ts-ignore
                            public static not(value: java.lang.Object): org.spongepowered.api.item.inventory.property.SlotIndex;
                            /**
                             * Create a SlotIndex property which matches SlotIndex properties with
                             * value greater than this value.
                             */
                            // @ts-ignore
                            public static greaterThan(value: java.lang.Object): org.spongepowered.api.item.inventory.property.SlotIndex;
                            /**
                             * Create a SlotIndex property which matches SlotIndex properties with
                             * value greater than or equal to this value.
                             */
                            // @ts-ignore
                            public static greaterThanOrEqual(value: java.lang.Object): org.spongepowered.api.item.inventory.property.SlotIndex;
                            /**
                             * Create a SlotIndex property which matches SlotIndex properties with
                             * value less than this value.
                             */
                            // @ts-ignore
                            public static lessThan(value: java.lang.Object): org.spongepowered.api.item.inventory.property.SlotIndex;
                            /**
                             * Create a SlotIndex property which matches SlotIndex properties with
                             * value less than or equal to this value.
                             */
                            // @ts-ignore
                            public static lessThanOrEqual(value: java.lang.Object): org.spongepowered.api.item.inventory.property.SlotIndex;
                        }
                    }
                }
            }
        }
    }
}
