// @ts-nocheck
declare namespace java {
    namespace text {
        // @ts-ignore
         class ParseException extends java.lang.Exception {
            /**
             * Constructs a ParseException with the specified detail message and
             * offset.
             * A detail message is a String that describes this particular exception.
             */
            // @ts-ignore
            constructor(s: string, errorOffset: number)
            /**
             * Returns the position where the error was found.
             */
            // @ts-ignore
            public getErrorOffset(): number;
        }
    }
}
