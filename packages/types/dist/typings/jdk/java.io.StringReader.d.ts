declare namespace java {
    namespace io {
        // @ts-ignore
         class StringReader extends java.io.Reader {
            /**
             * Creates a new string reader.
             */
            // @ts-ignore
            constructor(s: string)
            /**
             * Reads a single character.
             */
            // @ts-ignore
            public read(): number;
            /**
             * Reads characters into a portion of an array.
             */
            // @ts-ignore
            public read(cbuf: string, off: number, len: number): number;
            /**
             * Skips the specified number of characters in the stream. Returns
             * the number of characters that were skipped.
             * <p>The <code>ns</code> parameter may be negative, even though the
             * <code>skip</code> method of the {@link Reader} superclass throws
             * an exception in this case. Negative values of <code>ns</code> cause the
             * stream to skip backwards. Negative return values indicate a skip
             * backwards. It is not possible to skip backwards past the beginning of
             * the string.
             * <p>If the entire string has been read or skipped, then this method has
             * no effect and always returns 0.
             */
            // @ts-ignore
            public skip(ns: number): number;
            /**
             * Tells whether this stream is ready to be read.
             */
            // @ts-ignore
            public ready(): boolean;
            /**
             * Tells whether this stream supports the mark() operation, which it does.
             */
            // @ts-ignore
            public markSupported(): boolean;
            /**
             * Marks the present position in the stream.  Subsequent calls to reset()
             * will reposition the stream to this point.
             */
            // @ts-ignore
            public mark(readAheadLimit: number): void;
            /**
             * Resets the stream to the most recent mark, or to the beginning of the
             * string if it has never been marked.
             */
            // @ts-ignore
            public reset(): void;
            /**
             * Closes the stream and releases any system resources associated with
             * it. Once the stream has been closed, further read(),
             * ready(), mark(), or reset() invocations will throw an IOException.
             * Closing a previously closed stream has no effect.
             */
            // @ts-ignore
            public close(): void;
        }
    }
}
