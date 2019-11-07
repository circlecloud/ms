// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class CompletionException extends java.lang.RuntimeException {
                /**
                 * Constructs a {@code CompletionException} with no detail message.
                 * The cause is not initialized, and may subsequently be
                 * initialized by a call to {@link #initCause(Throwable) initCause}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a {@code CompletionException} with the specified detail
                 * message. The cause is not initialized, and may subsequently be
                 * initialized by a call to {@link #initCause(Throwable) initCause}.
                 */
                // @ts-ignore
                constructor(message: string)
                /**
                 * Constructs a {@code CompletionException} with the specified detail
                 * message and cause.
                 */
                // @ts-ignore
                constructor(message: string, cause: java.lang.Throwable)
                /**
                 * Constructs a {@code CompletionException} with the specified cause.
                 * The detail message is set to {@code (cause == null ? null :
                 * cause.toString())} (which typically contains the class and
                 * detail message of {@code cause}).
                 */
                // @ts-ignore
                constructor(cause: java.lang.Throwable)
            }
        }
    }
}
