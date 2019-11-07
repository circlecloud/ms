// @ts-nocheck
declare namespace java {
    namespace text {
        namespace NumberFormat {
            // @ts-ignore
             class Field extends java.text.Format.Field {
                /**
                 * Creates a Field instance with the specified
                 * name.
                 */
                // @ts-ignore
                constructor(name: string)
                // @ts-ignore
                public static INTEGER: java.text.NumberFormat.Field;
                // @ts-ignore
                public static FRACTION: java.text.NumberFormat.Field;
                // @ts-ignore
                public static EXPONENT: java.text.NumberFormat.Field;
                // @ts-ignore
                public static DECIMAL_SEPARATOR: java.text.NumberFormat.Field;
                // @ts-ignore
                public static SIGN: java.text.NumberFormat.Field;
                // @ts-ignore
                public static GROUPING_SEPARATOR: java.text.NumberFormat.Field;
                // @ts-ignore
                public static EXPONENT_SYMBOL: java.text.NumberFormat.Field;
                // @ts-ignore
                public static PERCENT: java.text.NumberFormat.Field;
                // @ts-ignore
                public static PERMILLE: java.text.NumberFormat.Field;
                // @ts-ignore
                public static CURRENCY: java.text.NumberFormat.Field;
                // @ts-ignore
                public static EXPONENT_SIGN: java.text.NumberFormat.Field;
                /**
                 * Resolves instances being deserialized to the predefined constants.
                 */
                // @ts-ignore
                protected readResolve(): java.lang.Object;
            }
        }
    }
}
