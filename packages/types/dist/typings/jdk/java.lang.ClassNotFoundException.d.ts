declare namespace java {
    namespace lang {
        // @ts-ignore
         class ClassNotFoundException extends java.lang.ReflectiveOperationException {
            /**
             * Constructs a <code>ClassNotFoundException</code> with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>ClassNotFoundException</code> with the
             * specified detail message.
             */
            // @ts-ignore
            constructor(s: string)
            /**
             * Constructs a <code>ClassNotFoundException</code> with the
             * specified detail message and optional exception that was
             * raised while loading the class.
             */
            // @ts-ignore
            constructor(s: string, ex: java.lang.Throwable)
            /**
             * Returns the exception that was raised if an error occurred while
             * attempting to load the class. Otherwise, returns <tt>null</tt>.
             * <p>This method predates the general-purpose exception chaining facility.
             * The {@link Throwable#getCause()} method is now the preferred means of
             * obtaining this information.
             */
            // @ts-ignore
            public getException(): java.lang.Throwable;
            /**
             * Returns the cause of this exception (the exception that was raised
             * if an error occurred while attempting to load the class; otherwise
             * <tt>null</tt>).
             */
            // @ts-ignore
            public getCause(): java.lang.Throwable;
        }
    }
}
