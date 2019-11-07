// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        // @ts-ignore
                         class InventoryCapacity extends org.spongepowered.api.item.inventory.property.IntProperty {
                            /**
                             * Creates a new InventoryCapacity property with the specified value.
                             */
                            // @ts-ignore
                            constructor(capacity: number)
                            /**
                             * Create a new InventoryCapacity property with the specified value.
                             */
                            // @ts-ignore
                            constructor(capacity: number, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create an InventoryCapacity property which matches InventoryCapacity
                             * properties with equal value.
                             */
                            // @ts-ignore
                            public static of(capacity: number): org.spongepowered.api.item.inventory.property.InventoryCapacity;
                        }
                    }
                }
            }
        }
    }
}
