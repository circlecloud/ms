declare namespace java {
    namespace lang {
        namespace reflect {
            // @ts-ignore
             class InvocationTargetException extends java.lang.ReflectiveOperationException {
                /**
                 * Constructs an {@code InvocationTargetException} with
                 * {@code null} as the target exception.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a InvocationTargetException with a target exception.
                 */
                // @ts-ignore
                constructor(target: java.lang.Throwable)
                /**
                 * Constructs a InvocationTargetException with a target exception
                 * and a detail message.
                 */
                // @ts-ignore
                constructor(target: java.lang.Throwable, s: string)
                /**
                 * Get the thrown target exception.
                 * <p>This method predates the general-purpose exception chaining facility.
                 * The {@link Throwable#getCause()} method is now the preferred means of
                 * obtaining this information.
                 */
                // @ts-ignore
                public getTargetException(): java.lang.Throwable;
                /**
                 * Returns the cause of this exception (the thrown target exception,
                 * which may be {@code null}).
                 */
                // @ts-ignore
                public getCause(): java.lang.Throwable;
            }
        }
    }
}
