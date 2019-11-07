// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
        abstract class Number extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Returns the value of the specified number as an {@code int},
             * which may involve rounding or truncation.
             */
            // @ts-ignore
            public abstract intValue(): number;
            /**
             * Returns the value of the specified number as a {@code long},
             * which may involve rounding or truncation.
             */
            // @ts-ignore
            public abstract longValue(): number;
            /**
             * Returns the value of the specified number as a {@code float},
             * which may involve rounding.
             */
            // @ts-ignore
            public abstract floatValue(): number;
            /**
             * Returns the value of the specified number as a {@code double},
             * which may involve rounding.
             */
            // @ts-ignore
            public abstract doubleValue(): number;
            /**
             * Returns the value of the specified number as a {@code byte},
             * which may involve rounding or truncation.
             * <p>This implementation returns the result of {@link #intValue} cast
             * to a {@code byte}.
             */
            // @ts-ignore
            public byteValue(): number;
            /**
             * Returns the value of the specified number as a {@code short},
             * which may involve rounding or truncation.
             * <p>This implementation returns the result of {@link #intValue} cast
             * to a {@code short}.
             */
            // @ts-ignore
            public shortValue(): number;
        }
    }
}
