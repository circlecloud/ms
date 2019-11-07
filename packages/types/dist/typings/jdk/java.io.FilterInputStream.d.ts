declare namespace java {
    namespace io {
        // @ts-ignore
         class FilterInputStream extends java.io.InputStream {
            /**
             * Creates a <code>FilterInputStream</code>
             * by assigning the  argument <code>in</code>
             * to the field <code>this.in</code> so as
             * to remember it for later use.
             */
            // @ts-ignore
            constructor(input: java.io.InputStream)
            // @ts-ignore
            protected in: java.io.InputStream;
            /**
             * Reads the next byte of data from this input stream. The value
             * byte is returned as an <code>int</code> in the range
             * <code>0</code> to <code>255</code>. If no byte is available
             * because the end of the stream has been reached, the value
             * <code>-1</code> is returned. This method blocks until input data
             * is available, the end of the stream is detected, or an exception
             * is thrown.
             * <p>
             * This method
             * simply performs <code>in.read()</code> and returns the result.
             */
            // @ts-ignore
            public read(): number;
            /**
             * Reads up to <code>byte.length</code> bytes of data from this
             * input stream into an array of bytes. This method blocks until some
             * input is available.
             * <p>
             * This method simply performs the call
             * <code>read(b, 0, b.length)</code> and returns
             * the  result. It is important that it does
             * <i>not</i> do <code>in.read(b)</code> instead;
             * certain subclasses of  <code>FilterInputStream</code>
             * depend on the implementation strategy actually
             * used.
             */
            // @ts-ignore
            public read(b: number): number;
            /**
             * Reads up to <code>len</code> bytes of data from this input stream
             * into an array of bytes. If <code>len</code> is not zero, the method
             * blocks until some input is available; otherwise, no
             * bytes are read and <code>0</code> is returned.
             * <p>
             * This method simply performs <code>in.read(b, off, len)</code>
             * and returns the result.
             */
            // @ts-ignore
            public read(b: number, off: number, len: number): number;
            /**
             * Skips over and discards <code>n</code> bytes of data from the
             * input stream. The <code>skip</code> method may, for a variety of
             * reasons, end up skipping over some smaller number of bytes,
             * possibly <code>0</code>. The actual number of bytes skipped is
             * returned.
             * <p>
             * This method simply performs <code>in.skip(n)</code>.
             */
            // @ts-ignore
            public skip(n: number): number;
            /**
             * Returns an estimate of the number of bytes that can be read (or
             * skipped over) from this input stream without blocking by the next
             * caller of a method for this input stream. The next caller might be
             * the same thread or another thread.  A single read or skip of this
             * many bytes will not block, but may read or skip fewer bytes.
             * <p>
             * This method returns the result of {@link #in in}.available().
             */
            // @ts-ignore
            public available(): number;
            /**
             * Closes this input stream and releases any system resources
             * associated with the stream.
             * This
             * method simply performs <code>in.close()</code>.
             */
            // @ts-ignore
            public close(): void;
            /**
             * Marks the current position in this input stream. A subsequent
             * call to the <code>reset</code> method repositions this stream at
             * the last marked position so that subsequent reads re-read the same bytes.
             * <p>
             * The <code>readlimit</code> argument tells this input stream to
             * allow that many bytes to be read before the mark position gets
             * invalidated.
             * <p>
             * This method simply performs <code>in.mark(readlimit)</code>.
             */
            // @ts-ignore
            public mark(readlimit: number): void;
            /**
             * Repositions this stream to the position at the time the
             * <code>mark</code> method was last called on this input stream.
             * <p>
             * This method
             * simply performs <code>in.reset()</code>.
             * <p>
             * Stream marks are intended to be used in
             * situations where you need to read ahead a little to see what's in
             * the stream. Often this is most easily done by invoking some
             * general parser. If the stream is of the type handled by the
             * parse, it just chugs along happily. If the stream is not of
             * that type, the parser should toss an exception when it fails.
             * If this happens within readlimit bytes, it allows the outer
             * code to reset the stream and try another parser.
             */
            // @ts-ignore
            public reset(): void;
            /**
             * Tests if this input stream supports the <code>mark</code>
             * and <code>reset</code> methods.
             * This method
             * simply performs <code>in.markSupported()</code>.
             */
            // @ts-ignore
            public markSupported(): boolean;
        }
    }
}
