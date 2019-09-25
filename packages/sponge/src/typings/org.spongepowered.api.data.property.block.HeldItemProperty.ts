declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace block {
                        // @ts-ignore
                         class HeldItemProperty extends org.spongepowered.api.data.property.AbstractProperty {
                            /**
                             * Creates a new {@link HeldItemProperty} with the provided {@link ItemType}.
                             */
                            constructor(value: org.spongepowered.api.item.ItemType)
                            /**
                             * Creates a new {@link HeldItemProperty} with the provided {@link ItemType}
                             * and {@link org.spongepowered.api.data.Property.Operator comparison operator}.
                             */
                            constructor(value: org.spongepowered.api.item.ItemType, op: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public compareTo(o: org.spongepowered.api.data.Property): number;
                        }
                    }
                }
            }
        }
    }
}
