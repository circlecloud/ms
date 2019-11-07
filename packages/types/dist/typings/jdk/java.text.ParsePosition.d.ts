declare namespace java {
    namespace text {
        // @ts-ignore
         class ParsePosition extends java.lang.Object {
            /**
             * Create a new ParsePosition with the given initial index.
             */
            // @ts-ignore
            constructor(index: number)
            /**
             * Retrieve the current parse position.  On input to a parse method, this
             * is the index of the character at which parsing will begin; on output, it
             * is the index of the character following the last character parsed.
             */
            // @ts-ignore
            public getIndex(): number;
            /**
             * Set the current parse position.
             */
            // @ts-ignore
            public setIndex(index: number): void;
            /**
             * Set the index at which a parse error occurred.  Formatters
             * should set this before returning an error code from their
             * parseObject method.  The default value is -1 if this is not set.
             */
            // @ts-ignore
            public setErrorIndex(ei: number): void;
            /**
             * Retrieve the index at which an error occurred, or -1 if the
             * error index has not been set.
             */
            // @ts-ignore
            public getErrorIndex(): number;
            /**
             * Overrides equals
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns a hash code for this ParsePosition.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Return a string representation of this ParsePosition.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
