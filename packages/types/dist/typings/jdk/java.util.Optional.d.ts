// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class Optional extends java.lang.Object {
            /**
             * Returns an empty {@code Optional} instance.  No value is present for this
             * Optional.
             */
            // @ts-ignore
            public static empty(): java.util.Optional;
            /**
             * Returns an {@code Optional} with the specified present non-null value.
             */
            // @ts-ignore
            public static of(value: java.lang.Object): java.util.Optional;
            /**
             * Returns an {@code Optional} describing the specified value, if non-null,
             * otherwise returns an empty {@code Optional}.
             */
            // @ts-ignore
            public static ofNullable(value: java.lang.Object): java.util.Optional;
            /**
             * If a value is present in this {@code Optional}, returns the value,
             * otherwise throws {@code NoSuchElementException}.
             */
            // @ts-ignore
            public get(): java.lang.Object;
            /**
             * Return {@code true} if there is a value present, otherwise {@code false}.
             */
            // @ts-ignore
            public isPresent(): boolean;
            /**
             * If a value is present, invoke the specified consumer with the value,
             * otherwise do nothing.
             */
            // @ts-ignore
            public ifPresent(consumer: java.util.function$.Consumer): void;
            /**
             * If a value is present, and the value matches the given predicate,
             * return an {@code Optional} describing the value, otherwise return an
             * empty {@code Optional}.
             */
            // @ts-ignore
            public filter(predicate: java.util.function$.Predicate): java.util.Optional;
            /**
             * If a value is present, apply the provided mapping function to it,
             * and if the result is non-null, return an {@code Optional} describing the
             * result.  Otherwise return an empty {@code Optional}.
             */
            // @ts-ignore
            public map(mapper: java.util.function$.Function): java.util.Optional;
            /**
             * If a value is present, apply the provided {@code Optional}-bearing
             * mapping function to it, return that result, otherwise return an empty
             * {@code Optional}.  This method is similar to {@link #map(Function)},
             * but the provided mapper is one whose result is already an {@code Optional},
             * and if invoked, {@code flatMap} does not wrap it with an additional
             * {@code Optional}.
             */
            // @ts-ignore
            public flatMap(mapper: java.util.function$.Function): java.util.Optional;
            /**
             * Return the value if present, otherwise return {@code other}.
             */
            // @ts-ignore
            public orElse(other: java.lang.Object): java.lang.Object;
            /**
             * Return the value if present, otherwise invoke {@code other} and return
             * the result of that invocation.
             */
            // @ts-ignore
            public orElseGet(other: java.util.function$.Supplier): java.lang.Object;
            /**
             * Return the contained value, if present, otherwise throw an exception
             * to be created by the provided supplier.
             */
            // @ts-ignore
            public orElseThrow(exceptionSupplier: java.util.function$.Supplier): java.lang.Object;
            /**
             * Indicates whether some other object is "equal to" this Optional. The
             * other object is considered equal if:
             * <ul>
             * <li>it is also an {@code Optional} and;
             * <li>both instances have no value present or;
             * <li>the present values are "equal to" each other via {@code equals()}.
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
             * Returns a non-empty string representation of this Optional suitable for
             * debugging. The exact presentation format is unspecified and may vary
             * between implementations and versions.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
