declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace entity {
                        // @ts-ignore
                         class DominantHandProperty extends org.spongepowered.api.data.property.AbstractProperty {
                            /**
                             * Creates a new {@link DominantHandProperty} with the provided
                             * {@link HandPreference} value.
                             */
                            constructor(value: org.spongepowered.api.data.type.HandPreference)
                            /**
                             * Creates a new {@link DominantHandProperty} with the provided
                             * {@link HandPreference}
                             * and {@link org.spongepowered.api.data.Property.Operator} value.
                             */
                            constructor(value: org.spongepowered.api.data.type.HandPreference, op: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public compareTo(o: org.spongepowered.api.data.Property): number;
                        }
                    }
                }
            }
        }
    }
}
