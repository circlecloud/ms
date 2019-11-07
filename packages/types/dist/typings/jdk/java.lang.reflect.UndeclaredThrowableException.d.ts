// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace reflect {
            // @ts-ignore
             class UndeclaredThrowableException extends java.lang.RuntimeException {
                /**
                 * Constructs an {@code UndeclaredThrowableException} with the
                 * specified {@code Throwable}.
                 */
                // @ts-ignore
                constructor(undeclaredThrowable: java.lang.Throwable)
                /**
                 * Constructs an {@code UndeclaredThrowableException} with the
                 * specified {@code Throwable} and a detail message.
                 */
                // @ts-ignore
                constructor(undeclaredThrowable: java.lang.Throwable, s: string)
                /**
                 * Returns the {@code Throwable} instance wrapped in this
                 * {@code UndeclaredThrowableException}, which may be {@code null}.
                 * <p>This method predates the general-purpose exception chaining facility.
                 * The {@link Throwable#getCause()} method is now the preferred means of
                 * obtaining this information.
                 */
                // @ts-ignore
                public getUndeclaredThrowable(): java.lang.Throwable;
                /**
                 * Returns the cause of this exception (the {@code Throwable}
                 * instance wrapped in this {@code UndeclaredThrowableException},
                 * which may be {@code null}).
                 */
                // @ts-ignore
                public getCause(): java.lang.Throwable;
            }
        }
    }
}
