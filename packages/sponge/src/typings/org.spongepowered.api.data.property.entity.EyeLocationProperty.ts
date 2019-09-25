declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace entity {
                        // @ts-ignore
                         class EyeLocationProperty extends org.spongepowered.api.data.property.AbstractProperty {
                            /**
                             * Creates a new {@link EyeLocationProperty} based on the provided
                             * {@code position}.
                             */
                            constructor(value: any /*Vector3d*/)
                            /**
                             * Creates a new {@link EyeLocationProperty} based on the provided
                             * {@link Vector3d position} and
                             * {@link org.spongepowered.api.data.Property.Operator comparison operator}.
                             */
                            constructor(value: any /*Vector3d*/, op: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public compareTo(o: org.spongepowered.api.data.Property): number;
                        }
                    }
                }
            }
        }
    }
}
