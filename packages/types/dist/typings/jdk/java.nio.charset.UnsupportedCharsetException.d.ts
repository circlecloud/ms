declare namespace java {
    namespace nio {
        namespace charset {
            // @ts-ignore
             class UnsupportedCharsetException extends java.lang.IllegalArgumentException {
                /**
                 * Constructs an instance of this class.
                 */
                // @ts-ignore
                constructor(charsetName: string)
                /**
                 * Retrieves the name of the unsupported charset.
                 */
                // @ts-ignore
                public getCharsetName(): string;
            }
        }
    }
}
