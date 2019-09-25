declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    // @ts-ignore
                     class DoubleProperty extends org.spongepowered.api.data.property.AbstractProperty {
                        /**
                         * Create a new integer property with the specified value.
                         */
                        constructor(value: number)
                        /**
                         * Create a new integer property with the specified value and logical
                         * operator.
                         */
                        constructor(value: number, operator: org.spongepowered.api.data.Property.Operator)
                        /**
                         * Create a new integer property with the specified value and logical
                         * operator.
                         */
                        constructor(value: any, operator: org.spongepowered.api.data.Property.Operator)
                        // @ts-ignore
                        public compareTo(other: org.spongepowered.api.data.Property): number;
                    }
                }
            }
        }
    }
}
