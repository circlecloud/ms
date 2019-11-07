// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        // @ts-ignore
                         class MappedIntProperty extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty {
                            /**
                             * Create a new MappedIntproperty with the specified key and value.
                             */
                            // @ts-ignore
                            constructor(key: java.lang.Integer, value: java.lang.Integer)
                            /**
                             * Create a new MappedIntproperty with the specified key and value.
                             */
                            // @ts-ignore
                            constructor(key: java.lang.Integer, value: java.lang.Integer, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a new MappedIntproperty with the specified key and value.
                             */
                            // @ts-ignore
                            constructor(key: java.lang.Object, value: java.lang.Object, operator: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public compareTo(other: org.spongepowered.api.data.Property): number;
                            /**
                             * Create a MappedIntproperty property which matches MappedIntproperty
                             * properties with equal value and matching key.
                             */
                            // @ts-ignore
                            public static of(key: java.lang.Object, value: java.lang.Object): org.spongepowered.api.item.inventory.property.MappedIntProperty;
                            /**
                             * Create a MappedIntproperty property which matches MappedIntproperty
                             * properties with unequal value and matching key.
                             */
                            // @ts-ignore
                            public static not(key: java.lang.Object, value: java.lang.Object): org.spongepowered.api.item.inventory.property.MappedIntProperty;
                            /**
                             * Create a MappedIntproperty property which matches MappedIntproperty
                             * properties with value greater than this value and matching key.
                             */
                            // @ts-ignore
                            public static greaterThan(key: java.lang.Object, value: java.lang.Object): org.spongepowered.api.item.inventory.property.MappedIntProperty;
                            /**
                             * Create a MappedIntproperty property which matches MappedIntproperty
                             * properties with value greater than or equal to this value and matching
                             * key.
                             */
                            // @ts-ignore
                            public static greaterThanOrEqual(key: java.lang.Object, value: java.lang.Object): org.spongepowered.api.item.inventory.property.MappedIntProperty;
                            /**
                             * Create a MappedIntproperty property which matches MappedIntproperty
                             * properties with value less than this value and matching key.
                             */
                            // @ts-ignore
                            public static lessThan(key: java.lang.Object, value: java.lang.Object): org.spongepowered.api.item.inventory.property.MappedIntProperty;
                            /**
                             * Create a MappedIntproperty property which matches MappedIntproperty
                             * properties with value less than or equal to this value and matching key.
                             */
                            // @ts-ignore
                            public static lessThanOrEqual(key: java.lang.Object, value: java.lang.Object): org.spongepowered.api.item.inventory.property.MappedIntProperty;
                        }
                    }
                }
            }
        }
    }
}
