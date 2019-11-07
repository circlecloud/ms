// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
         class ExceptionInInitializerError extends java.lang.LinkageError {
            /**
             * Constructs an <code>ExceptionInInitializerError</code> with
             * <code>null</code> as its detail message string and with no saved
             * throwable object.
             * A detail message is a String that describes this particular exception.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new <code>ExceptionInInitializerError</code> class by
             * saving a reference to the <code>Throwable</code> object thrown for
             * later retrieval by the {@link #getException()} method. The detail
             * message string is set to <code>null</code>.
             */
            // @ts-ignore
            constructor(thrown: java.lang.Throwable)
            /**
             * Constructs an ExceptionInInitializerError with the specified detail
             * message string.  A detail message is a String that describes this
             * particular exception. The detail message string is saved for later
             * retrieval by the {@link Throwable#getMessage()} method. There is no
             * saved throwable object.
             */
            // @ts-ignore
            constructor(s: string)
            /**
             * Returns the exception that occurred during a static initialization that
             * caused this error to be created.
             * <p>This method predates the general-purpose exception chaining facility.
             * The {@link Throwable#getCause()} method is now the preferred means of
             * obtaining this information.
             */
            // @ts-ignore
            public getException(): java.lang.Throwable;
            /**
             * Returns the cause of this error (the exception that occurred
             * during a static initialization that caused this error to be created).
             */
            // @ts-ignore
            public getCause(): java.lang.Throwable;
        }
    }
}
