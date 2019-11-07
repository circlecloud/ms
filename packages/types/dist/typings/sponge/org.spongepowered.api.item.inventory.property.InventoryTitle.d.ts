// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        // @ts-ignore
                         class InventoryTitle extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty {
                            /**
                             * Creates a new {@link InventoryTitle} to be displayed on an {@link Inventory}.
                             */
                            // @ts-ignore
                            constructor(value: org.spongepowered.api.text.Text)
                            // @ts-ignore
                            public static PROPERTY_NAME: string;
                            // @ts-ignore
                            public compareTo(other: org.spongepowered.api.data.Property): number;
                            /**
                             * Creates a new {@link InventoryTitle} with the provided {@link Text}.
                             */
                            // @ts-ignore
                            public static of(value: org.spongepowered.api.text.Text): org.spongepowered.api.item.inventory.property.InventoryTitle;
                        }
                    }
                }
            }
        }
    }
}
