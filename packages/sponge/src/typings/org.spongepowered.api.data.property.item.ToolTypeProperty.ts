declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace item {
                        // @ts-ignore
                         class ToolTypeProperty extends org.spongepowered.api.data.property.AbstractProperty {
                            /**
                             * Creates a new {@link ToolTypeProperty} with the provided
                             * {@link ToolType} value.
                             */
                            constructor(value: org.spongepowered.api.data.type.ToolType)
                            /**
                             * Creates a new {@link ToolTypeProperty} with the provided
                             * {@link ToolType} value and
                             * {@link org.spongepowered.api.data.Property.Operator}
                             * for comparisons.
                             */
                            constructor(value: org.spongepowered.api.data.type.ToolType, op: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public compareTo(o: org.spongepowered.api.data.Property): number;
                        }
                    }
                }
            }
        }
    }
}
