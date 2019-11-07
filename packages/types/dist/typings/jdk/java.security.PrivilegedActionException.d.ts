// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
         class PrivilegedActionException extends java.lang.Exception {
            /**
             * Constructs a new PrivilegedActionException &quot;wrapping&quot;
             * the specific Exception.
             */
            // @ts-ignore
            constructor(exception: java.lang.Exception)
            /**
             * Returns the exception thrown by the privileged computation that
             * resulted in this {@code PrivilegedActionException}.
             * <p>This method predates the general-purpose exception chaining facility.
             * The {@link Throwable#getCause()} method is now the preferred means of
             * obtaining this information.
             */
            // @ts-ignore
            public getException(): java.lang.Exception;
            /**
             * Returns the cause of this exception (the exception thrown by
             * the privileged computation that resulted in this
             * {@code PrivilegedActionException}).
             */
            // @ts-ignore
            public getCause(): java.lang.Throwable;
            // @ts-ignore
            public toString(): string;
        }
    }
}
