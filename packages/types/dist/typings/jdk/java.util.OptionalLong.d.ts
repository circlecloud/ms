declare namespace java {
    namespace util {
        // @ts-ignore
         class OptionalLong extends java.lang.Object {
            /**
             * Returns an empty {@code OptionalLong} instance.  No value is present for this
             * OptionalLong.
             */
            // @ts-ignore
            public static empty(): java.util.OptionalLong;
            /**
             * Return an {@code OptionalLong} with the specified value present.
             */
            // @ts-ignore
            public static of(value: number): java.util.OptionalLong;
            /**
             * If a value is present in this {@code OptionalLong}, returns the value,
             * otherwise throws {@code NoSuchElementException}.
             */
            // @ts-ignore
            public getAsLong(): number;
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
            public ifPresent(consumer: java.util.function$.LongConsumer): void;
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
            public orElseGet(other: java.util.function$.LongSupplier): number;
            /**
             * Return the contained value, if present, otherwise throw an exception
             * to be created by the provided supplier.
             */
            // @ts-ignore
            public orElseThrow(exceptionSupplier: java.util.function$.Supplier): number;
            /**
             * Indicates whether some other object is "equal to" this OptionalLong. The
             * other object is considered equal if:
             * <ul>
             * <li>it is also an {@code OptionalLong} and;
             * <li>both instances have no value present or;
             * <li>the present values are "equal to" each other via {@code ==}.
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
