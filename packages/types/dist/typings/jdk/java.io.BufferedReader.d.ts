// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
         class BufferedReader extends java.io.Reader {
            /**
             * Creates a buffering character-input stream that uses an input buffer of
             * the specified size.
             */
            // @ts-ignore
            constructor(input: java.io.Reader, sz: number)
            /**
             * Creates a buffering character-input stream that uses a default-sized
             * input buffer.
             */
            // @ts-ignore
            constructor(input: java.io.Reader)
            /**
             * Reads a single character.
             */
            // @ts-ignore
            public read(): number;
            /**
             * Reads characters into a portion of an array.
             * <p> This method implements the general contract of the corresponding
             * <code>{@link Reader#read(char[], int, int) read}</code> method of the
             * <code>{@link Reader}</code> class.  As an additional convenience, it
             * attempts to read as many characters as possible by repeatedly invoking
             * the <code>read</code> method of the underlying stream.  This iterated
             * <code>read</code> continues until one of the following conditions becomes
             * true: <ul>
             * <li> The specified number of characters have been read,
             * <li> The <code>read</code> method of the underlying stream returns
             * <code>-1</code>, indicating end-of-file, or
             * <li> The <code>ready</code> method of the underlying stream
             * returns <code>false</code>, indicating that further input requests
             * would block.
             * </ul> If the first <code>read</code> on the underlying stream returns
             * <code>-1</code> to indicate end-of-file then this method returns
             * <code>-1</code>.  Otherwise this method returns the number of characters
             * actually read.
             * <p> Subclasses of this class are encouraged, but not required, to
             * attempt to read as many characters as possible in the same fashion.
             * <p> Ordinarily this method takes characters from this stream's character
             * buffer, filling it from the underlying stream as necessary.  If,
             * however, the buffer is empty, the mark is not valid, and the requested
             * length is at least as large as the buffer, then this method will read
             * characters directly from the underlying stream into the given array.
             * Thus redundant <code>BufferedReader</code>s will not copy data
             * unnecessarily.
             */
            // @ts-ignore
            public read(cbuf: string, off: number, len: number): number;
            /**
             * Reads a line of text.  A line is considered to be terminated by any one
             * of a line feed ('\n'), a carriage return ('\r'), or a carriage return
             * followed immediately by a linefeed.
             */
            // @ts-ignore
            public readLine(): string;
            /**
             * Skips characters.
             */
            // @ts-ignore
            public skip(n: number): number;
            /**
             * Tells whether this stream is ready to be read.  A buffered character
             * stream is ready if the buffer is not empty, or if the underlying
             * character stream is ready.
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
             * will attempt to reposition the stream to this point.
             */
            // @ts-ignore
            public mark(readAheadLimit: number): void;
            /**
             * Resets the stream to the most recent mark.
             */
            // @ts-ignore
            public reset(): void;
            // @ts-ignore
            public close(): void;
            /**
             * Returns a {@code Stream}, the elements of which are lines read from
             * this {@code BufferedReader}.  The {@link Stream} is lazily populated,
             * i.e., read only occurs during the
             * <a href="../util/stream/package-summary.html#StreamOps">terminal
             * stream operation</a>.
             * <p> The reader must not be operated on during the execution of the
             * terminal stream operation. Otherwise, the result of the terminal stream
             * operation is undefined.
             * <p> After execution of the terminal stream operation there are no
             * guarantees that the reader will be at a specific position from which to
             * read the next character or line.
             * <p> If an {@link IOException} is thrown when accessing the underlying
             * {@code BufferedReader}, it is wrapped in an {@link
             * UncheckedIOException} which will be thrown from the {@code Stream}
             * method that caused the read to take place. This method will return a
             * Stream if invoked on a BufferedReader that is closed. Any operation on
             * that stream that requires reading from the BufferedReader after it is
             * closed, will cause an UncheckedIOException to be thrown.
             */
            // @ts-ignore
            public lines(): java.util.stream.Stream;
        }
    }
}
