// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class Objects extends java.lang.Object {
            /**
             * Returns {@code true} if the arguments are equal to each other
             * and {@code false} otherwise.
             * Consequently, if both arguments are {@code null}, {@code true}
             * is returned and if exactly one argument is {@code null}, {@code
             * false} is returned.  Otherwise, equality is determined by using
             * the {@link Object#equals equals} method of the first
             * argument.
             */
            // @ts-ignore
            public static equals(a: java.lang.Object, b: java.lang.Object): boolean;
            /**
             * Returns {@code true} if the arguments are deeply equal to each other
             * and {@code false} otherwise.
             * Two {@code null} values are deeply equal.  If both arguments are
             * arrays, the algorithm in {@link Arrays#deepEquals(Object[],
             * Object[]) Arrays.deepEquals} is used to determine equality.
             * Otherwise, equality is determined by using the {@link
             * Object#equals equals} method of the first argument.
             */
            // @ts-ignore
            public static deepEquals(a: java.lang.Object, b: java.lang.Object): boolean;
            /**
             * Returns the hash code of a non-{@code null} argument and 0 for
             * a {@code null} argument.
             */
            // @ts-ignore
            public static hashCode(o: java.lang.Object): number;
            /**
             * Generates a hash code for a sequence of input values. The hash
             * code is generated as if all the input values were placed into an
             * array, and that array were hashed by calling {@link
             * Arrays#hashCode(Object[])}.
             * <p>This method is useful for implementing {@link
             * Object#hashCode()} on objects containing multiple fields. For
             * example, if an object that has three fields, {@code x}, {@code
             * y}, and {@code z}, one could write:
             * <blockquote><pre>
             * &#064;Override public int hashCode() {
             * return Objects.hash(x, y, z);
             * }
             * </pre></blockquote>
             * <b>Warning: When a single object reference is supplied, the returned
             * value does not equal the hash code of that object reference.</b> This
             * value can be computed by calling {@link #hashCode(Object)}.
             */
            // @ts-ignore
            public static hash(values: java.lang.Object): number;
            /**
             * Returns the result of calling {@code toString} for a non-{@code
             * null} argument and {@code "null"} for a {@code null} argument.
             */
            // @ts-ignore
            public static toString(o: java.lang.Object): string;
            /**
             * Returns the result of calling {@code toString} on the first
             * argument if the first argument is not {@code null} and returns
             * the second argument otherwise.
             */
            // @ts-ignore
            public static toString(o: java.lang.Object, nullDefault: string): string;
            /**
             * Returns 0 if the arguments are identical and {@code
             * c.compare(a, b)} otherwise.
             * Consequently, if both arguments are {@code null} 0
             * is returned.
             * <p>Note that if one of the arguments is {@code null}, a {@code
             * NullPointerException} may or may not be thrown depending on
             * what ordering policy, if any, the {@link Comparator Comparator}
             * chooses to have for {@code null} values.
             */
            // @ts-ignore
            public static compare(a: java.lang.Object, b: java.lang.Object, c: java.util.Comparator): number;
            /**
             * Checks that the specified object reference is not {@code null}. This
             * method is designed primarily for doing parameter validation in methods
             * and constructors, as demonstrated below:
             * <blockquote><pre>
             * public Foo(Bar bar) {
             * this.bar = Objects.requireNonNull(bar);
             * }
             * </pre></blockquote>
             */
            // @ts-ignore
            public static requireNonNull(obj: java.lang.Object): java.lang.Object;
            /**
             * Checks that the specified object reference is not {@code null} and
             * throws a customized {@link NullPointerException} if it is. This method
             * is designed primarily for doing parameter validation in methods and
             * constructors with multiple parameters, as demonstrated below:
             * <blockquote><pre>
             * public Foo(Bar bar, Baz baz) {
             * this.bar = Objects.requireNonNull(bar, "bar must not be null");
             * this.baz = Objects.requireNonNull(baz, "baz must not be null");
             * }
             * </pre></blockquote>
             */
            // @ts-ignore
            public static requireNonNull(obj: java.lang.Object, message: string): java.lang.Object;
            /**
             * Returns {@code true} if the provided reference is {@code null} otherwise
             * returns {@code false}.
             */
            // @ts-ignore
            public static isNull(obj: java.lang.Object): boolean;
            /**
             * Returns {@code true} if the provided reference is non-{@code null}
             * otherwise returns {@code false}.
             */
            // @ts-ignore
            public static nonNull(obj: java.lang.Object): boolean;
            /**
             * Checks that the specified object reference is not {@code null} and
             * throws a customized {@link NullPointerException} if it is.
             * <p>Unlike the method {@link #requireNonNull(Object, String)},
             * this method allows creation of the message to be deferred until
             * after the null check is made. While this may confer a
             * performance advantage in the non-null case, when deciding to
             * call this method care should be taken that the costs of
             * creating the message supplier are less than the cost of just
             * creating the string message directly.
             */
            // @ts-ignore
            public static requireNonNull(obj: java.lang.Object, messageSupplier: java.util.function$.Supplier): java.lang.Object;
        }
    }
}
