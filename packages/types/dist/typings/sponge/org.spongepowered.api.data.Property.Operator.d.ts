declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace Property {
                    // @ts-ignore
                     class Operator extends java.lang.Enum {
                        // @ts-ignore
                        public static DELEGATE: org.spongepowered.api.data.Property.Operator;
                        // @ts-ignore
                        public static EQUAL: org.spongepowered.api.data.Property.Operator;
                        // @ts-ignore
                        public static NOTEQUAL: org.spongepowered.api.data.Property.Operator;
                        // @ts-ignore
                        public static GREATER: org.spongepowered.api.data.Property.Operator;
                        // @ts-ignore
                        public static GEQUAL: org.spongepowered.api.data.Property.Operator;
                        // @ts-ignore
                        public static LESS: org.spongepowered.api.data.Property.Operator;
                        // @ts-ignore
                        public static LEQUAL: org.spongepowered.api.data.Property.Operator;
                        // @ts-ignore
                        public static values(): org.spongepowered.api.data.Property.Operator[];
                        // @ts-ignore
                        public static valueOf(name: string): org.spongepowered.api.data.Property.Operator;
                        /**
                         * <p>Compare the two operands by applying this operator <em>infix</em>
                         * with respect to them. For example, if this object is
                         * {@link Operator#GREATER} then calling this method with
                         * <code>object1</code> and <code>object2</code> would effectively
                         * return:</p>
                         * <blockquote> <code>returnValue = object1 &gt; object2;</code>
                         * </blockquote>
                         */
                        // @ts-ignore
                        public compare(operand1: org.spongepowered.api.data.Property, operand2: org.spongepowered.api.data.Property): boolean;
                        /**
                         * Stub for subclasses to implement their logic. Used so we can get the
                         * null comparison logic out of the way first and then only proceed with
                         * comparison if both arguments are non-null.
                         */
                        // @ts-ignore
                        protected apply(operand1: org.spongepowered.api.data.Property, operand2: org.spongepowered.api.data.Property): boolean;
                        /**
                         * Gets the default operator to use if none is specified.
                         */
                        // @ts-ignore
                        public static defaultOperator(): org.spongepowered.api.data.Property.Operator;
                    }
                }
            }
        }
    }
}
