// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
         class Exception extends java.lang.Throwable {
            /**
             * Constructs a new exception with {@code null} as its detail message.
             * The cause is not initialized, and may subsequently be initialized by a
             * call to {@link #initCause}.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new exception with the specified detail message.  The
             * cause is not initialized, and may subsequently be initialized by
             * a call to {@link #initCause}.
             */
            // @ts-ignore
            constructor(message: string)
            /**
             * Constructs a new exception with the specified detail message and
             * cause.  <p>Note that the detail message associated with
             * {@code cause} is <i>not</i> automatically incorporated in
             * this exception's detail message.
             */
            // @ts-ignore
            constructor(message: string, cause: java.lang.Throwable)
            /**
             * Constructs a new exception with the specified cause and a detail
             * message of <tt>(cause==null ? null : cause.toString())</tt> (which
             * typically contains the class and detail message of <tt>cause</tt>).
             * This constructor is useful for exceptions that are little more than
             * wrappers for other throwables (for example, {@link
             * java.security.PrivilegedActionException}).
             */
            // @ts-ignore
            constructor(cause: java.lang.Throwable)
            /**
             * Constructs a new exception with the specified detail message,
             * cause, suppression enabled or disabled, and writable stack
             * trace enabled or disabled.
             */
            // @ts-ignore
            constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean)
        }
    }
}
