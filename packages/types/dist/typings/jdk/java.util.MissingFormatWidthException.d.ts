declare namespace java {
    namespace util {
        // @ts-ignore
         class MissingFormatWidthException extends java.util.IllegalFormatException {
            /**
             * Constructs an instance of this class with the specified format
             * specifier.
             */
            // @ts-ignore
            constructor(s: string)
            /**
             * Returns the format specifier which does not have a width.
             */
            // @ts-ignore
            public getFormatSpecifier(): string;
            // @ts-ignore
            public getMessage(): string;
        }
    }
}
