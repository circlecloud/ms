declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace item {
                        // @ts-ignore
                         class ArmorTypeProperty extends org.spongepowered.api.data.property.AbstractProperty {
                            /**
                             * Construct a new {@link ArmorTypeProperty} with the desired
                             * {@link ArmorType}.
                             */
                            // @ts-ignore
                            constructor(value: org.spongepowered.api.data.type.ArmorType)
                            /**
                             * Construct a new {@link ArmorTypeProperty} with the desired
                             * {@link ArmorType} and
                             * {@link org.spongepowered.api.data.Property.Operator}.
                             */
                            // @ts-ignore
                            constructor(value: org.spongepowered.api.data.type.ArmorType, op: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public compareTo(o: org.spongepowered.api.data.Property): number;
                        }
                    }
                }
            }
        }
    }
}
