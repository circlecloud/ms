// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class OptionalDouble extends java.lang.Object {
            /**
             * Returns an empty {@code OptionalDouble} instance.  No value is present for this
             * OptionalDouble.
             */
            // @ts-ignore
            public static empty(): java.util.OptionalDouble;
            /**
             * Return an {@code OptionalDouble} with the specified value present.
             */
            // @ts-ignore
            public static of(value: number): java.util.OptionalDouble;
            /**
             * If a value is present in this {@code OptionalDouble}, returns the value,
             * otherwise throws {@code NoSuchElementException}.
             */
            // @ts-ignore
            public getAsDouble(): number;
            /**
             * Return {@code true} if there is a value present, otherwise {@code false}.
             */
            // @ts-ignore
            public isPresent(): boolean;
            /**
             * Have the specified consumer accept the value if a value is present,
             * otherwise do nothing.
             */
            // @ts-ignore
            public ifPresent(consumer: java.util.function$.DoubleConsumer): void;
            /**
             * Return the value if present, otherwise return {@code other}.
             */
            // @ts-ignore
            public orElse(other: number): number;
            /**
             * Return the value if present, otherwise invoke {@code other} and return
             * the result of that invocation.
             */
            // @ts-ignore
            public orElseGet(other: java.util.function$.DoubleSupplier): number;
            /**
             * Return the contained value, if present, otherwise throw an exception
             * to be created by the provided supplier.
             */
            // @ts-ignore
            public orElseThrow(exceptionSupplier: java.util.function$.Supplier): number;
            /**
             * Indicates whether some other object is "equal to" this OptionalDouble. The
             * other object is considered equal if:
             * <ul>
             * <li>it is also an {@code OptionalDouble} and;
             * <li>both instances have no value present or;
             * <li>the present values are "equal to" each other via {@code Double.compare() == 0}.
             * </ul>
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns the hash code value of the present value, if any, or 0 (zero) if
             * no value is present.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * {@inheritDoc}
             * Returns a non-empty string representation of this object suitable for
             * debugging. The exact presentation format is unspecified and may vary
             * between implementations and versions.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
