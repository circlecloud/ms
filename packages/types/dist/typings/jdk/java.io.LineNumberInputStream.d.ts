declare namespace java {
    namespace io {
        // @ts-ignore
         class LineNumberInputStream extends java.io.FilterInputStream {
            /**
             * Constructs a newline number input stream that reads its input
             * from the specified input stream.
             */
            // @ts-ignore
            constructor(input: java.io.InputStream)
            /**
             * Reads the next byte of data from this input stream. The value
             * byte is returned as an {@code int} in the range
             * {@code 0} to {@code 255}. If no byte is available
             * because the end of the stream has been reached, the value
             * {@code -1} is returned. This method blocks until input data
             * is available, the end of the stream is detected, or an exception
             * is thrown.
             * <p>
             * The {@code read} method of
             * {@code LineNumberInputStream} calls the {@code read}
             * method of the underlying input stream. It checks for carriage
             * returns and newline characters in the input, and modifies the
             * current line number as appropriate. A carriage-return character or
             * a carriage return followed by a newline character are both
             * converted into a single newline character.
             */
            // @ts-ignore
            public read(): number;
            /**
             * Reads up to {@code len} bytes of data from this input stream
             * into an array of bytes. This method blocks until some input is available.
             * <p>
             * The {@code read} method of
             * {@code LineNumberInputStream} repeatedly calls the
             * {@code read} method of zero arguments to fill in the byte array.
             */
            // @ts-ignore
            public read(b: number, off: number, len: number): number;
            /**
             * Skips over and discards {@code n} bytes of data from this
             * input stream. The {@code skip} method may, for a variety of
             * reasons, end up skipping over some smaller number of bytes,
             * possibly {@code 0}. The actual number of bytes skipped is
             * returned.  If {@code n} is negative, no bytes are skipped.
             * <p>
             * The {@code skip} method of {@code LineNumberInputStream} creates
             * a byte array and then repeatedly reads into it until
             * {@code n} bytes have been read or the end of the stream has
             * been reached.
             */
            // @ts-ignore
            public skip(n: number): number;
            /**
             * Sets the line number to the specified argument.
             */
            // @ts-ignore
            public setLineNumber(lineNumber: number): void;
            /**
             * Returns the current line number.
             */
            // @ts-ignore
            public getLineNumber(): number;
            /**
             * Returns the number of bytes that can be read from this input
             * stream without blocking.
             * <p>
             * Note that if the underlying input stream is able to supply
             * <i>k</i> input characters without blocking, the
             * {@code LineNumberInputStream} can guarantee only to provide
             * <i>k</i>/2 characters without blocking, because the
             * <i>k</i> characters from the underlying input stream might
             * consist of <i>k</i>/2 pairs of {@code '\r'} and
             * {@code '\n'}, which are converted to just
             * <i>k</i>/2 {@code '\n'} characters.
             */
            // @ts-ignore
            public available(): number;
            /**
             * Marks the current position in this input stream. A subsequent
             * call to the {@code reset} method repositions this stream at
             * the last marked position so that subsequent reads re-read the same bytes.
             * <p>
             * The {@code mark} method of
             * {@code LineNumberInputStream} remembers the current line
             * number in a private variable, and then calls the {@code mark}
             * method of the underlying input stream.
             */
            // @ts-ignore
            public mark(readlimit: number): void;
            /**
             * Repositions this stream to the position at the time the
             * {@code mark} method was last called on this input stream.
             * <p>
             * The {@code reset} method of
             * {@code LineNumberInputStream} resets the line number to be
             * the line number at the time the {@code mark} method was
             * called, and then calls the {@code reset} method of the
             * underlying input stream.
             * <p>
             * Stream marks are intended to be used in
             * situations where you need to read ahead a little to see what's in
             * the stream. Often this is most easily done by invoking some
             * general parser. If the stream is of the type handled by the
             * parser, it just chugs along happily. If the stream is not of
             * that type, the parser should toss an exception when it fails,
             * which, if it happens within readlimit bytes, allows the outer
             * code to reset the stream and try another parser.
             */
            // @ts-ignore
            public reset(): void;
        }
    }
}
