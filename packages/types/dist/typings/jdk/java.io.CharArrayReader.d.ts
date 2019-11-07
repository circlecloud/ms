declare namespace java {
    namespace io {
        // @ts-ignore
         class CharArrayReader extends java.io.Reader {
            /**
             * Creates a CharArrayReader from the specified array of chars.
             */
            // @ts-ignore
            constructor(buf: string)
            /**
             * Creates a CharArrayReader from the specified array of chars.
             * <p> The resulting reader will start reading at the given
             * <tt>offset</tt>.  The total number of <tt>char</tt> values that can be
             * read from this reader will be either <tt>length</tt> or
             * <tt>buf.length-offset</tt>, whichever is smaller.
             */
            // @ts-ignore
            constructor(buf: string, offset: number, length: number)
            // @ts-ignore
            protected buf: string[];
            // @ts-ignore
            protected pos: number;
            // @ts-ignore
            protected markedPos: number;
            // @ts-ignore
            protected count: number;
            /**
             * Reads a single character.
             */
            // @ts-ignore
            public read(): number;
            /**
             * Reads characters into a portion of an array.
             */
            // @ts-ignore
            public read(b: string, off: number, len: number): number;
            /**
             * Skips characters.  Returns the number of characters that were skipped.
             * <p>The <code>n</code> parameter may be negative, even though the
             * <code>skip</code> method of the {@link Reader} superclass throws
             * an exception in this case. If <code>n</code> is negative, then
             * this method does nothing and returns <code>0</code>.
             */
            // @ts-ignore
            public skip(n: number): number;
            /**
             * Tells whether this stream is ready to be read.  Character-array readers
             * are always ready to be read.
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
             * Resets the stream to the most recent mark, or to the beginning if it has
             * never been marked.
             */
            // @ts-ignore
            public reset(): void;
            /**
             * Closes the stream and releases any system resources associated with
             * it.  Once the stream has been closed, further read(), ready(),
             * mark(), reset(), or skip() invocations will throw an IOException.
             * Closing a previously closed stream has no effect.
             */
            // @ts-ignore
            public close(): void;
        }
    }
}
