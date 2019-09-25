declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        // @ts-ignore
                         class Identifiable extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty {
                            /**
                             * Creates an Identifiable with a random UUID.
                             */
                            constructor()
                            /**
                             * Creates an Identifiable with given UUID.
                             */
                            constructor(value: any)
                            /**
                             * Creates an Identifiable with given UUID.
                             */
                            constructor(value: any, op: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public compareTo(other: org.spongepowered.api.data.Property): number;
                        }
                    }
                }
            }
        }
    }
}
