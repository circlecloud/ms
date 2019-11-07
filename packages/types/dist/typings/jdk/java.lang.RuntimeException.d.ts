declare namespace java {
    namespace lang {
        // @ts-ignore
         class RuntimeException extends java.lang.Exception {
            /**
             * Constructs a new runtime exception with {@code null} as its
             * detail message.  The cause is not initialized, and may subsequently be
             * initialized by a call to {@link #initCause}.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new runtime exception with the specified detail message.
             * The cause is not initialized, and may subsequently be initialized by a
             * call to {@link #initCause}.
             */
            // @ts-ignore
            constructor(message: string)
            /**
             * Constructs a new runtime exception with the specified detail message and
             * cause.  <p>Note that the detail message associated with
             * {@code cause} is <i>not</i> automatically incorporated in
             * this runtime exception's detail message.
             */
            // @ts-ignore
            constructor(message: string, cause: java.lang.Throwable)
            /**
             * Constructs a new runtime exception with the specified cause and a
             * detail message of <tt>(cause==null ? null : cause.toString())</tt>
             * (which typically contains the class and detail message of
             * <tt>cause</tt>).  This constructor is useful for runtime exceptions
             * that are little more than wrappers for other throwables.
             */
            // @ts-ignore
            constructor(cause: java.lang.Throwable)
            /**
             * Constructs a new runtime exception with the specified detail
             * message, cause, suppression enabled or disabled, and writable
             * stack trace enabled or disabled.
             */
            // @ts-ignore
            constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean)
        }
    }
}
