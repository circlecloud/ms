declare namespace java {
    namespace lang {
        namespace annotation {
            // @ts-ignore
             class IncompleteAnnotationException extends java.lang.RuntimeException {
                /**
                 * Constructs an IncompleteAnnotationException to indicate that
                 * the named element was missing from the specified annotation type.
                 */
                // @ts-ignore
                constructor(annotationType: java.lang.Class, elementName: string)
                /**
                 * Returns the Class object for the annotation type with the
                 * missing element.
                 */
                // @ts-ignore
                public annotationType(): java.lang.Class;
                /**
                 * Returns the name of the missing element.
                 */
                // @ts-ignore
                public elementName(): string;
            }
        }
    }
}
