// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace file {
            // @ts-ignore
             class InvalidPathException extends java.lang.IllegalArgumentException {
                /**
                 * Constructs an instance from the given input string, reason, and error
                 * index.
                 */
                // @ts-ignore
                constructor(input: string, reason: string, index: number)
                /**
                 * Constructs an instance from the given input string and reason.  The
                 * resulting object will have an error index of <tt>-1</tt>.
                 */
                // @ts-ignore
                constructor(input: string, reason: string)
                /**
                 * Returns the input string.
                 */
                // @ts-ignore
                public getInput(): string;
                /**
                 * Returns a string explaining why the input string was rejected.
                 */
                // @ts-ignore
                public getReason(): string;
                /**
                 * Returns an index into the input string of the position at which the
                 * error occurred, or <tt>-1</tt> if this position is not known.
                 */
                // @ts-ignore
                public getIndex(): number;
                /**
                 * Returns a string describing the error.  The resulting string
                 * consists of the reason string followed by a colon character
                 * (<tt>':'</tt>), a space, and the input string.  If the error index is
                 * defined then the string <tt>" at index "</tt> followed by the index, in
                 * decimal, is inserted after the reason string and before the colon
                 * character.
                 */
                // @ts-ignore
                public getMessage(): string;
            }
        }
    }
}
