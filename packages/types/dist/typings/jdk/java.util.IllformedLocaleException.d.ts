// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class IllformedLocaleException extends java.lang.RuntimeException {
            /**
             * Constructs a new <code>IllformedLocaleException</code> with no
             * detail message and -1 as the error index.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new <code>IllformedLocaleException</code> with the
             * given message and -1 as the error index.
             */
            // @ts-ignore
            constructor(message: string)
            /**
             * Constructs a new <code>IllformedLocaleException</code> with the
             * given message and the error index.  The error index is the approximate
             * offset from the start of the ill-formed value to the point where the
             * parse first detected an error.  A negative error index value indicates
             * either the error index is not applicable or unknown.
             */
            // @ts-ignore
            constructor(message: string, errorIndex: number)
            /**
             * Returns the index where the error was found. A negative value indicates
             * either the error index is not applicable or unknown.
             */
            // @ts-ignore
            public getErrorIndex(): number;
        }
    }
}
