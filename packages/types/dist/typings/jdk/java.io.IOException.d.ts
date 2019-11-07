declare namespace java {
    namespace io {
        // @ts-ignore
         class IOException extends java.lang.Exception {
            /**
             * Constructs an {@code IOException} with {@code null}
             * as its error detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an {@code IOException} with the specified detail message.
             */
            // @ts-ignore
            constructor(message: string)
            /**
             * Constructs an {@code IOException} with the specified detail message
             * and cause.
             * <p> Note that the detail message associated with {@code cause} is
             * <i>not</i> automatically incorporated into this exception's detail
             * message.
             */
            // @ts-ignore
            constructor(message: string, cause: java.lang.Throwable)
            /**
             * Constructs an {@code IOException} with the specified cause and a
             * detail message of {@code (cause==null ? null : cause.toString())}
             * (which typically contains the class and detail message of {@code cause}).
             * This constructor is useful for IO exceptions that are little more
             * than wrappers for other throwables.
             */
            // @ts-ignore
            constructor(cause: java.lang.Throwable)
        }
    }
}
