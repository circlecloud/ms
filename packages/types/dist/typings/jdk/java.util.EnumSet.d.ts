declare namespace java {
    namespace util {
        // @ts-ignore
        abstract class EnumSet extends java.util.AbstractSet {
            /**
             * Creates an empty enum set with the specified element type.
             */
            // @ts-ignore
            public static noneOf(elementType: java.lang.Class): java.util.EnumSet;
            /**
             * Creates an enum set containing all of the elements in the specified
             * element type.
             */
            // @ts-ignore
            public static allOf(elementType: java.lang.Class): java.util.EnumSet;
            /**
             * Creates an enum set with the same element type as the specified enum
             * set, initially containing the same elements (if any).
             */
            // @ts-ignore
            public static copyOf(s: java.util.EnumSet): java.util.EnumSet;
            /**
             * Creates an enum set initialized from the specified collection.  If
             * the specified collection is an <tt>EnumSet</tt> instance, this static
             * factory method behaves identically to {@link #copyOf(EnumSet)}.
             * Otherwise, the specified collection must contain at least one element
             * (in order to determine the new enum set's element type).
             */
            // @ts-ignore
            public static copyOf(c: java.util.Collection): java.util.EnumSet;
            /**
             * Creates an enum set with the same element type as the specified enum
             * set, initially containing all the elements of this type that are
             * <i>not</i> contained in the specified set.
             */
            // @ts-ignore
            public static complementOf(s: java.util.EnumSet): java.util.EnumSet;
            /**
             * Creates an enum set initially containing the specified element.
             * Overloadings of this method exist to initialize an enum set with
             * one through five elements.  A sixth overloading is provided that
             * uses the varargs feature.  This overloading may be used to create
             * an enum set initially containing an arbitrary number of elements, but
             * is likely to run slower than the overloadings that do not use varargs.
             */
            // @ts-ignore
            public static of(e: java.lang.Enum): java.util.EnumSet;
            /**
             * Creates an enum set initially containing the specified elements.
             * Overloadings of this method exist to initialize an enum set with
             * one through five elements.  A sixth overloading is provided that
             * uses the varargs feature.  This overloading may be used to create
             * an enum set initially containing an arbitrary number of elements, but
             * is likely to run slower than the overloadings that do not use varargs.
             */
            // @ts-ignore
            public static of(e1: java.lang.Enum, e2: java.lang.Enum): java.util.EnumSet;
            /**
             * Creates an enum set initially containing the specified elements.
             * Overloadings of this method exist to initialize an enum set with
             * one through five elements.  A sixth overloading is provided that
             * uses the varargs feature.  This overloading may be used to create
             * an enum set initially containing an arbitrary number of elements, but
             * is likely to run slower than the overloadings that do not use varargs.
             */
            // @ts-ignore
            public static of(e1: java.lang.Enum, e2: java.lang.Enum, e3: java.lang.Enum): java.util.EnumSet;
            /**
             * Creates an enum set initially containing the specified elements.
             * Overloadings of this method exist to initialize an enum set with
             * one through five elements.  A sixth overloading is provided that
             * uses the varargs feature.  This overloading may be used to create
             * an enum set initially containing an arbitrary number of elements, but
             * is likely to run slower than the overloadings that do not use varargs.
             */
            // @ts-ignore
            public static of(e1: java.lang.Enum, e2: java.lang.Enum, e3: java.lang.Enum, e4: java.lang.Enum): java.util.EnumSet;
            /**
             * Creates an enum set initially containing the specified elements.
             * Overloadings of this method exist to initialize an enum set with
             * one through five elements.  A sixth overloading is provided that
             * uses the varargs feature.  This overloading may be used to create
             * an enum set initially containing an arbitrary number of elements, but
             * is likely to run slower than the overloadings that do not use varargs.
             */
            // @ts-ignore
            public static of(e1: java.lang.Enum, e2: java.lang.Enum, e3: java.lang.Enum, e4: java.lang.Enum, e5: java.lang.Enum): java.util.EnumSet;
            /**
             * Creates an enum set initially containing the specified elements.
             * This factory, whose parameter list uses the varargs feature, may
             * be used to create an enum set initially containing an arbitrary
             * number of elements, but it is likely to run slower than the overloadings
             * that do not use varargs.
             */
            // @ts-ignore
            public static of(first: java.lang.Enum, rest: java.lang.Enum): java.util.EnumSet;
            /**
             * Creates an enum set initially containing all of the elements in the
             * range defined by the two specified endpoints.  The returned set will
             * contain the endpoints themselves, which may be identical but must not
             * be out of order.
             */
            // @ts-ignore
            public static range(from: java.lang.Enum, to: java.lang.Enum): java.util.EnumSet;
            /**
             * Returns a copy of this set.
             */
            // @ts-ignore
            public clone(): java.util.EnumSet;
        }
    }
}
