// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
         class URISyntaxException extends java.lang.Exception {
            /**
             * Constructs an instance from the given input string, reason, and error
             * index.
             */
            // @ts-ignore
            constructor(input: string, reason: string, index: number)
            /**
             * Constructs an instance from the given input string and reason.  The
             * resulting object will have an error index of {@code -1}.
             */
            // @ts-ignore
            constructor(input: string, reason: string)
            /**
             * Returns the input string.
             */
            // @ts-ignore
            public getInput(): string;
            /**
             * Returns a string explaining why the input string could not be parsed.
             */
            // @ts-ignore
            public getReason(): string;
            /**
             * Returns an index into the input string of the position at which the
             * parse error occurred, or {@code -1} if this position is not known.
             */
            // @ts-ignore
            public getIndex(): number;
            /**
             * Returns a string describing the parse error.  The resulting string
             * consists of the reason string followed by a colon character
             * ({@code ':'}), a space, and the input string.  If the error index is
             * defined then the string {@code " at index "} followed by the index, in
             * decimal, is inserted after the reason string and before the colon
             * character.
             */
            // @ts-ignore
            public getMessage(): string;
        }
    }
}
