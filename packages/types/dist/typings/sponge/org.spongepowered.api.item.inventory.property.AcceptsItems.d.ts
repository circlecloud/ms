declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        // @ts-ignore
                         class AcceptsItems extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty {
                            /**
                             * Create a new AcceptsItems property with the supplied value.
                             */
                            // @ts-ignore
                            constructor(value: java.util.Collection)
                            /**
                             * Create a new AcceptsItems property with the supplied value and operator.
                             */
                            // @ts-ignore
                            constructor(value: java.util.Collection, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a new AcceptsItems property with the supplied value and operator.
                             */
                            // @ts-ignore
                            constructor(value: java.lang.Object, operator: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public compareTo(other: org.spongepowered.api.data.Property): number;
                            /**
                             * Returns true if <em>other</em> is also an {@link AcceptsItems} property
                             * and <b>any</b> item appearing in the other property's collection appears
                             * in this property's collection. In formal terms, the method returns true
                             * if the size of the intersection between the two item type collections is
                             * greater than zero.
                             */
                            // @ts-ignore
                            public equals(obj: java.lang.Object): boolean;
                            /**
                             * Create an AcceptsItems property which matches AcceptsItems properties
                             * with containing one or more of the supplied values.
                             */
                            // @ts-ignore
                            public static of(value: java.lang.Object): org.spongepowered.api.item.inventory.property.AcceptsItems;
                        }
                    }
                }
            }
        }
    }
}
