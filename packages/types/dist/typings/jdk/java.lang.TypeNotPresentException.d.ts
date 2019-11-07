declare namespace java {
    namespace lang {
        // @ts-ignore
         class TypeNotPresentException extends java.lang.RuntimeException {
            /**
             * Constructs a <tt>TypeNotPresentException</tt> for the named type
             * with the specified cause.
             */
            // @ts-ignore
            constructor(typeName: string, cause: java.lang.Throwable)
            /**
             * Returns the fully qualified name of the unavailable type.
             */
            // @ts-ignore
            public typeName(): string;
        }
    }
}
