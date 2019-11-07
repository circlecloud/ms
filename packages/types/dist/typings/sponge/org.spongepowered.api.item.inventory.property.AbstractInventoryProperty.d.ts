declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        // @ts-ignore
                        abstract class AbstractInventoryProperty extends java.lang.Object implements org.spongepowered.api.item.inventory.InventoryProperty {
                            /**
                             * Initialise internal values to defaults, use this ctor if you plan to
                             * override {@link #getKey} and {@link #getValue} yourself.
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Initialise key to default, and value to the supplied value.
                             */
                            // @ts-ignore
                            constructor(value: java.lang.Object)
                            /**
                             * Initialise the value to the specified value and use the specified
                             * operator, use the default key.
                             */
                            // @ts-ignore
                            constructor(value: java.lang.Object, op: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Use the specified key and value and set operator to the default.
                             */
                            // @ts-ignore
                            constructor(key: java.lang.Object, value: java.lang.Object)
                            // @ts-ignore
                            constructor(key: java.lang.Object, value: java.lang.Object, op: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            protected operator: org.spongepowered.api.data.Property.Operator;
                            // @ts-ignore
                            protected value: java.lang.Object;
                            /**
                             * Gets the default value for {@link #key}, used in case null is passed in
                             * (since we can't have a null key). In general this should return the class
                             * name of the property itself but subclasses are free to alter this
                             * behaviour if they wish.
                             */
                            // @ts-ignore
                            protected getDefaultKey(value: java.lang.Object): java.lang.Object;
                            /**
                             * Gets the default key for the provided InventoryProperty class.
                             */
                            // @ts-ignore
                            public static getDefaultKey(clazz: java.lang.Class): java.lang.Object;
                            /**
                             * Return the default operator to use, based on the supplied key and value.
                             */
                            // @ts-ignore
                            protected getDefaultOperator(key: java.lang.Object, value: java.lang.Object): org.spongepowered.api.data.Property.Operator;
                            // @ts-ignore
                            public getKey(): java.lang.Object;
                            // @ts-ignore
                            public getValue(): java.lang.Object;
                            // @ts-ignore
                            public getOperator(): org.spongepowered.api.data.Property.Operator;
                            // @ts-ignore
                            public matches(other: org.spongepowered.api.data.Property): boolean;
                            // @ts-ignore
                            public equals(obj: java.lang.Object): boolean;
                            // @ts-ignore
                            public hashCode(): number;
                            /**
                             * Convenience method to avoid null-checking. Returns 0 if <em>value</em> is
                             * null.
                             */
                            // @ts-ignore
                            protected hashCodeOf(value: java.lang.Object): number;
                        }
                    }
                }
            }
        }
    }
}
