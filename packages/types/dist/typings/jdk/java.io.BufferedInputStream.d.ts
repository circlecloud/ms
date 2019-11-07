declare namespace java {
    namespace io {
        // @ts-ignore
         class BufferedInputStream extends java.io.FilterInputStream {
            /**
             * Creates a <code>BufferedInputStream</code>
             * and saves its  argument, the input stream
             * <code>in</code>, for later use. An internal
             * buffer array is created and  stored in <code>buf</code>.
             */
            // @ts-ignore
            constructor(input: java.io.InputStream)
            /**
             * Creates a <code>BufferedInputStream</code>
             * with the specified buffer size,
             * and saves its  argument, the input stream
             * <code>in</code>, for later use.  An internal
             * buffer array of length  <code>size</code>
             * is created and stored in <code>buf</code>.
             */
            // @ts-ignore
            constructor(input: java.io.InputStream, size: number)
            // @ts-ignore
            protected buf: number[];
            // @ts-ignore
            protected count: number;
            // @ts-ignore
            protected pos: number;
            // @ts-ignore
            protected markpos: number;
            // @ts-ignore
            protected marklimit: number;
            /**
             * See
             * the general contract of the <code>read</code>
             * method of <code>InputStream</code>.
             */
            // @ts-ignore
            public read(): number;
            /**
             * Reads bytes from this byte-input stream into the specified byte array,
             * starting at the given offset.
             * <p> This method implements the general contract of the corresponding
             * <code>{@link InputStream#read(byte[], int, int) read}</code> method of
             * the <code>{@link InputStream}</code> class.  As an additional
             * convenience, it attempts to read as many bytes as possible by repeatedly
             * invoking the <code>read</code> method of the underlying stream.  This
             * iterated <code>read</code> continues until one of the following
             * conditions becomes true: <ul>
             * <li> The specified number of bytes have been read,
             * <li> The <code>read</code> method of the underlying stream returns
             * <code>-1</code>, indicating end-of-file, or
             * <li> The <code>available</code> method of the underlying stream
             * returns zero, indicating that further input requests would block.
             * </ul> If the first <code>read</code> on the underlying stream returns
             * <code>-1</code> to indicate end-of-file then this method returns
             * <code>-1</code>.  Otherwise this method returns the number of bytes
             * actually read.
             * <p> Subclasses of this class are encouraged, but not required, to
             * attempt to read as many bytes as possible in the same fashion.
             */
            // @ts-ignore
            public read(b: number, off: number, len: number): number;
            /**
             * See the general contract of the <code>skip</code>
             * method of <code>InputStream</code>.
             */
            // @ts-ignore
            public skip(n: number): number;
            /**
             * Returns an estimate of the number of bytes that can be read (or
             * skipped over) from this input stream without blocking by the next
             * invocation of a method for this input stream. The next invocation might be
             * the same thread or another thread.  A single read or skip of this
             * many bytes will not block, but may read or skip fewer bytes.
             * <p>
             * This method returns the sum of the number of bytes remaining to be read in
             * the buffer (<code>count&nbsp;- pos</code>) and the result of calling the
             * {@link java.io.FilterInputStream#in in}.available().
             */
            // @ts-ignore
            public available(): number;
            /**
             * See the general contract of the <code>mark</code>
             * method of <code>InputStream</code>.
             */
            // @ts-ignore
            public mark(readlimit: number): void;
            /**
             * See the general contract of the <code>reset</code>
             * method of <code>InputStream</code>.
             * <p>
             * If <code>markpos</code> is <code>-1</code>
             * (no mark has been set or the mark has been
             * invalidated), an <code>IOException</code>
             * is thrown. Otherwise, <code>pos</code> is
             * set equal to <code>markpos</code>.
             */
            // @ts-ignore
            public reset(): void;
            /**
             * Tests if this input stream supports the <code>mark</code>
             * and <code>reset</code> methods. The <code>markSupported</code>
             * method of <code>BufferedInputStream</code> returns
             * <code>true</code>.
             */
            // @ts-ignore
            public markSupported(): boolean;
            /**
             * Closes this input stream and releases any system resources
             * associated with the stream.
             * Once the stream has been closed, further read(), available(), reset(),
             * or skip() invocations will throw an IOException.
             * Closing a previously closed stream has no effect.
             */
            // @ts-ignore
            public close(): void;
        }
    }
}
