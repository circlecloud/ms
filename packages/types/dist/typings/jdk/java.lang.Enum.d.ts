declare namespace java {
    namespace lang {
        // @ts-ignore
        abstract class Enum extends java.lang.Object {
            /**
             * Sole constructor.  Programmers cannot invoke this constructor.
             * It is for use by code emitted by the compiler in response to
             * enum type declarations.
             */
            // @ts-ignore
            constructor(name: string, ordinal: number)
            /**
             * Returns the name of this enum constant, exactly as declared in its
             * enum declaration.
             * <b>Most programmers should use the {@link #toString} method in
             * preference to this one, as the toString method may return
             * a more user-friendly name.</b>  This method is designed primarily for
             * use in specialized situations where correctness depends on getting the
             * exact name, which will not vary from release to release.
             */
            // @ts-ignore
            public name(): string;
            /**
             * Returns the ordinal of this enumeration constant (its position
             * in its enum declaration, where the initial constant is assigned
             * an ordinal of zero).
             * Most programmers will have no use for this method.  It is
             * designed for use by sophisticated enum-based data structures, such
             * as {@link java.util.EnumSet} and {@link java.util.EnumMap}.
             */
            // @ts-ignore
            public ordinal(): number;
            /**
             * Returns the name of this enum constant, as contained in the
             * declaration.  This method may be overridden, though it typically
             * isn't necessary or desirable.  An enum type should override this
             * method when a more "programmer-friendly" string form exists.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns true if the specified object is equal to this
             * enum constant.
             */
            // @ts-ignore
            public equals(other: java.lang.Object): boolean;
            /**
             * Returns a hash code for this enum constant.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Throws CloneNotSupportedException.  This guarantees that enums
             * are never cloned, which is necessary to preserve their "singleton"
             * status.
             */
            // @ts-ignore
            protected clone(): java.lang.Object;
            /**
             * Compares this enum with the specified object for order.  Returns a
             * negative integer, zero, or a positive integer as this object is less
             * than, equal to, or greater than the specified object.
             * Enum constants are only comparable to other enum constants of the
             * same enum type.  The natural order implemented by this
             * method is the order in which the constants are declared.
             */
            // @ts-ignore
            public compareTo(o: java.lang.Enum): number;
            /**
             * Returns the Class object corresponding to this enum constant's
             * enum type.  Two enum constants e1 and  e2 are of the
             * same enum type if and only if
             * e1.getDeclaringClass() == e2.getDeclaringClass().
             * (The value returned by this method may differ from the one returned
             * by the {@link Object#getClass} method for enum constants with
             * constant-specific class bodies.)
             */
            // @ts-ignore
            public getDeclaringClass(): java.lang.Class;
            /**
             * Returns the enum constant of the specified enum type with the
             * specified name.  The name must match exactly an identifier used
             * to declare an enum constant in this type.  (Extraneous whitespace
             * characters are not permitted.)
             * <p>Note that for a particular enum type {@code T}, the
             * implicitly declared {@code public static T valueOf(String)}
             * method on that enum may be used instead of this method to map
             * from a name to the corresponding enum constant.  All the
             * constants of an enum type can be obtained by calling the
             * implicit {@code public static T[] values()} method of that
             * type.
             */
            // @ts-ignore
            public static valueOf(enumType: java.lang.Class, name: string): java.lang.Enum;
            /**
             * enum classes cannot have finalize methods.
             */
            // @ts-ignore
            protected finalize(): void;
        }
    }
}
