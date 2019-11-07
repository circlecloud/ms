declare namespace java {
    namespace util {
        // @ts-ignore
         class MissingFormatArgumentException extends java.util.IllegalFormatException {
            /**
             * Constructs an instance of this class with the unmatched format
             * specifier.
             */
            // @ts-ignore
            constructor(s: string)
            /**
             * Returns the unmatched format specifier.
             */
            // @ts-ignore
            public getFormatSpecifier(): string;
            // @ts-ignore
            public getMessage(): string;
        }
    }
}
