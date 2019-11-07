declare namespace java {
    namespace util {
        namespace regex {
            // @ts-ignore
             class PatternSyntaxException extends java.lang.IllegalArgumentException {
                /**
                 * Constructs a new instance of this class.
                 */
                // @ts-ignore
                constructor(desc: string, regex: string, index: number)
                /**
                 * Retrieves the error index.
                 */
                // @ts-ignore
                public getIndex(): number;
                /**
                 * Retrieves the description of the error.
                 */
                // @ts-ignore
                public getDescription(): string;
                /**
                 * Retrieves the erroneous regular-expression pattern.
                 */
                // @ts-ignore
                public getPattern(): string;
                /**
                 * Returns a multi-line string containing the description of the syntax
                 * error and its index, the erroneous regular-expression pattern, and a
                 * visual indication of the error index within the pattern.
                 */
                // @ts-ignore
                public getMessage(): string;
            }
        }
    }
}
