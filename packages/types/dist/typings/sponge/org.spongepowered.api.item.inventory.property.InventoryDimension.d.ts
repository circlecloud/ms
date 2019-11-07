declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        // @ts-ignore
                         class InventoryDimension extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty {
                            /**
                             * Create a new InventoryDimension property with the specified value.
                             */
                            // @ts-ignore
                            constructor(value: any /*Vector2i*/)
                            /**
                             * Create a new InventoryDimension property with the specified dimensions.
                             */
                            // @ts-ignore
                            constructor(width: number, height: number)
                            /**
                             * Create a new InventoryDimension property with the specified value.
                             */
                            // @ts-ignore
                            constructor(value: any /*Vector2i*/, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a new InventoryDimension property with the specified dimensions.
                             */
                            // @ts-ignore
                            constructor(width: number, height: number, operator: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public static PROPERTY_NAME: string;
                            /**
                             * Gets the number of columns in this inventory.
                             */
                            // @ts-ignore
                            public getColumns(): number;
                            /**
                             * Gets the number of rows in this inventory.
                             */
                            // @ts-ignore
                            public getRows(): number;
                            // @ts-ignore
                            public compareTo(other: org.spongepowered.api.data.Property): number;
                            /**
                             * Create an InventoryDimension property which matches InventoryDimension
                             * properties with equal value.
                             */
                            // @ts-ignore
                            public static of(value: java.lang.Object): org.spongepowered.api.item.inventory.property.InventoryDimension;
                            /**
                             * Create an InventoryDimension property which matches InventoryDimension
                             * properties with equal value.
                             */
                            // @ts-ignore
                            public static of(width: number, height: number): org.spongepowered.api.item.inventory.property.InventoryDimension;
                            /**
                             * Create an InventoryDimension property which matches InventoryDimension
                             * properties with unequal value.
                             */
                            // @ts-ignore
                            public static not(value: java.lang.Object): org.spongepowered.api.item.inventory.property.InventoryDimension;
                            /**
                             * Create an InventoryDimension property which matches InventoryDimension
                             * properties with value greater than this value.
                             */
                            // @ts-ignore
                            public static greaterThan(value: java.lang.Object): org.spongepowered.api.item.inventory.property.InventoryDimension;
                            /**
                             * Create an InventoryDimension property which matches InventoryDimension
                             * properties with value greater than or equal to this value.
                             */
                            // @ts-ignore
                            public static greaterThanOrEqual(value: java.lang.Object): org.spongepowered.api.item.inventory.property.InventoryDimension;
                            /**
                             * Create an InventoryDimension property which matches InventoryDimension
                             * properties with value less than this value.
                             */
                            // @ts-ignore
                            public static lessThan(value: java.lang.Object): org.spongepowered.api.item.inventory.property.InventoryDimension;
                            /**
                             * Create an InventoryDimension property which matches InventoryDimension
                             * properties with value less than or equal to this value.
                             */
                            // @ts-ignore
                            public static lessThanOrEqual(value: java.lang.Object): org.spongepowered.api.item.inventory.property.InventoryDimension;
                        }
                    }
                }
            }
        }
    }
}
