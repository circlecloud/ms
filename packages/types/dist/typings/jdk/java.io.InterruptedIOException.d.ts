declare namespace java {
    namespace io {
        // @ts-ignore
         class InterruptedIOException extends java.io.IOException {
            /**
             * Constructs an <code>InterruptedIOException</code> with
             * <code>null</code> as its error detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an <code>InterruptedIOException</code> with the
             * specified detail message. The string <code>s</code> can be
             * retrieved later by the
             * <code>{@link java.lang.Throwable#getMessage}</code>
             * method of class <code>java.lang.Throwable</code>.
             */
            // @ts-ignore
            constructor(s: string)
            // @ts-ignore
            public bytesTransferred: number;
        }
    }
}
