declare namespace java {
    namespace io {
        // @ts-ignore
         class WriteAbortedException extends java.io.ObjectStreamException {
            /**
             * Constructs a WriteAbortedException with a string describing
             * the exception and the exception causing the abort.
             */
            // @ts-ignore
            constructor(s: string, ex: java.lang.Exception)
            // @ts-ignore
            public detail: java.lang.Exception;
            /**
             * Produce the message and include the message from the nested
             * exception, if there is one.
             */
            // @ts-ignore
            public getMessage(): string;
            /**
             * Returns the exception that terminated the operation (the <i>cause</i>).
             */
            // @ts-ignore
            public getCause(): java.lang.Throwable;
        }
    }
}
