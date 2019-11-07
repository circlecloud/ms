// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace annotation {
            // @ts-ignore
             class AnnotationTypeMismatchException extends java.lang.RuntimeException {
                /**
                 * Constructs an AnnotationTypeMismatchException for the specified
                 * annotation type element and found data type.
                 */
                // @ts-ignore
                constructor(element: java.lang.reflect.Method, foundType: string)
                /**
                 * Returns the <tt>Method</tt> object for the incorrectly typed element.
                 */
                // @ts-ignore
                public element(): java.lang.reflect.Method;
                /**
                 * Returns the type of data found in the incorrectly typed element.
                 * The returned string may, but is not required to, contain the value
                 * as well.  The exact format of the string is unspecified.
                 */
                // @ts-ignore
                public foundType(): string;
            }
        }
    }
}
