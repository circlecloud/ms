declare namespace java {
    namespace nio {
        namespace charset {
            // @ts-ignore
             class CoderResult extends java.lang.Object {
                // @ts-ignore
                public static UNDERFLOW: java.nio.charset.CoderResult;
                // @ts-ignore
                public static OVERFLOW: java.nio.charset.CoderResult;
                /**
                 * Returns a string describing this coder result.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Tells whether or not this object describes an underflow condition.
                 */
                // @ts-ignore
                public isUnderflow(): boolean;
                /**
                 * Tells whether or not this object describes an overflow condition.
                 */
                // @ts-ignore
                public isOverflow(): boolean;
                /**
                 * Tells whether or not this object describes an error condition.
                 */
                // @ts-ignore
                public isError(): boolean;
                /**
                 * Tells whether or not this object describes a malformed-input error.
                 */
                // @ts-ignore
                public isMalformed(): boolean;
                /**
                 * Tells whether or not this object describes an unmappable-character
                 * error.
                 */
                // @ts-ignore
                public isUnmappable(): boolean;
                /**
                 * Returns the length of the erroneous input described by this
                 * object&nbsp;&nbsp;<i>(optional operation)</i>.
                 */
                // @ts-ignore
                public length(): number;
                /**
                 * Static factory method that returns the unique object describing a
                 * malformed-input error of the given length.
                 */
                // @ts-ignore
                public static malformedForLength(length: number): java.nio.charset.CoderResult;
                /**
                 * Static factory method that returns the unique result object describing
                 * an unmappable-character error of the given length.
                 */
                // @ts-ignore
                public static unmappableForLength(length: number): java.nio.charset.CoderResult;
                /**
                 * Throws an exception appropriate to the result described by this object.
                 */
                // @ts-ignore
                public throwException(): void;
            }
        }
    }
}
