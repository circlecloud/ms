// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
         class Boolean extends java.lang.Object {
            /**
             * Allocates a {@code Boolean} object representing the
             * {@code value} argument.
             * <p><b>Note: It is rarely appropriate to use this constructor.
             * Unless a <i>new</i> instance is required, the static factory
             * {@link #valueOf(boolean)} is generally a better choice. It is
             * likely to yield significantly better space and time performance.</b>
             */
            // @ts-ignore
            constructor(value: boolean)
            /**
             * Allocates a {@code Boolean} object representing the value
             * {@code true} if the string argument is not {@code null}
             * and is equal, ignoring case, to the string {@code "true"}.
             * Otherwise, allocate a {@code Boolean} object representing the
             * value {@code false}. Examples:<p>
             * {@code new Boolean("True")} produces a {@code Boolean} object
             * that represents {@code true}.<br>
             * {@code new Boolean("yes")} produces a {@code Boolean} object
             * that represents {@code false}.
             */
            // @ts-ignore
            constructor(s: string)
            // @ts-ignore
            public static TRUE: java.lang.Boolean;
            // @ts-ignore
            public static FALSE: java.lang.Boolean;
            // @ts-ignore
            public static TYPE: java.lang.Class;
            /**
             * Parses the string argument as a boolean.  The {@code boolean}
             * returned represents the value {@code true} if the string argument
             * is not {@code null} and is equal, ignoring case, to the string
             * {@code "true"}. <p>
             * Example: {@code Boolean.parseBoolean("True")} returns {@code true}.<br>
             * Example: {@code Boolean.parseBoolean("yes")} returns {@code false}.
             */
            // @ts-ignore
            public static parseBoolean(s: string): boolean;
            /**
             * Returns the value of this {@code Boolean} object as a boolean
             * primitive.
             */
            // @ts-ignore
            public booleanValue(): boolean;
            /**
             * Returns a {@code Boolean} instance representing the specified
             * {@code boolean} value.  If the specified {@code boolean} value
             * is {@code true}, this method returns {@code Boolean.TRUE};
             * if it is {@code false}, this method returns {@code Boolean.FALSE}.
             * If a new {@code Boolean} instance is not required, this method
             * should generally be used in preference to the constructor
             * {@link #Boolean(boolean)}, as this method is likely to yield
             * significantly better space and time performance.
             */
            // @ts-ignore
            public static valueOf(b: boolean): java.lang.Boolean;
            /**
             * Returns a {@code Boolean} with a value represented by the
             * specified string.  The {@code Boolean} returned represents a
             * true value if the string argument is not {@code null}
             * and is equal, ignoring case, to the string {@code "true"}.
             */
            // @ts-ignore
            public static valueOf(s: string): java.lang.Boolean;
            /**
             * Returns a {@code String} object representing the specified
             * boolean.  If the specified boolean is {@code true}, then
             * the string {@code "true"} will be returned, otherwise the
             * string {@code "false"} will be returned.
             */
            // @ts-ignore
            public static toString(b: boolean): string;
            /**
             * Returns a {@code String} object representing this Boolean's
             * value.  If this object represents the value {@code true},
             * a string equal to {@code "true"} is returned. Otherwise, a
             * string equal to {@code "false"} is returned.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns a hash code for this {@code Boolean} object.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns a hash code for a {@code boolean} value; compatible with
             * {@code Boolean.hashCode()}.
             */
            // @ts-ignore
            public static hashCode(value: boolean): number;
            /**
             * Returns {@code true} if and only if the argument is not
             * {@code null} and is a {@code Boolean} object that
             * represents the same {@code boolean} value as this object.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns {@code true} if and only if the system property
             * named by the argument exists and is equal to the string
             * {@code "true"}. (Beginning with version 1.0.2 of the
             * Java<small><sup>TM</sup></small> platform, the test of
             * this string is case insensitive.) A system property is accessible
             * through {@code getProperty}, a method defined by the
             * {@code System} class.
             * <p>
             * If there is no property with the specified name, or if the specified
             * name is empty or null, then {@code false} is returned.
             */
            // @ts-ignore
            public static getBoolean(name: string): boolean;
            /**
             * Compares this {@code Boolean} instance with another.
             */
            // @ts-ignore
            public compareTo(b: java.lang.Boolean): number;
            /**
             * Compares two {@code boolean} values.
             * The value returned is identical to what would be returned by:
             * <pre>
             * Boolean.valueOf(x).compareTo(Boolean.valueOf(y))
             * </pre>
             */
            // @ts-ignore
            public static compare(x: boolean, y: boolean): number;
            /**
             * Returns the result of applying the logical AND operator to the
             * specified {@code boolean} operands.
             */
            // @ts-ignore
            public static logicalAnd(a: boolean, b: boolean): boolean;
            /**
             * Returns the result of applying the logical OR operator to the
             * specified {@code boolean} operands.
             */
            // @ts-ignore
            public static logicalOr(a: boolean, b: boolean): boolean;
            /**
             * Returns the result of applying the logical XOR operator to the
             * specified {@code boolean} operands.
             */
            // @ts-ignore
            public static logicalXor(a: boolean, b: boolean): boolean;
        }
    }
}
