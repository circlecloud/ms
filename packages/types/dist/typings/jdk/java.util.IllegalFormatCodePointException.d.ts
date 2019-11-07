declare namespace java {
    namespace util {
        // @ts-ignore
         class IllegalFormatCodePointException extends java.util.IllegalFormatException {
            /**
             * Constructs an instance of this class with the specified illegal code
             * point as defined by {@link Character#isValidCodePoint}.
             */
            // @ts-ignore
            constructor(c: number)
            /**
             * Returns the illegal code point as defined by {@link
             * Character#isValidCodePoint}.
             */
            // @ts-ignore
            public getCodePoint(): number;
            // @ts-ignore
            public getMessage(): string;
        }
    }
}
